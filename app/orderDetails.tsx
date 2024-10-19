import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomNav from "./components/bottomNav";
import { router, useLocalSearchParams } from "expo-router";
import { Order } from "./interfaces/Order";

const OrderDetails: React.FC = () => {
  const { order } = useLocalSearchParams();
  const orderObj: Order | null = order ? JSON.parse(order as string) : null;

  const handleNavigation = () => {
    router.push("/home");
  };

  const formatCPF = (cpf: string) => {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  };

  const formatCellPhone = (cellPhone: string) => {
    return cellPhone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  };

  if (!orderObj) {
    return <Text>Erro ao carregar os detalhes do pedido.</Text>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={30}
            color="#000"
            onPress={handleNavigation}
          />
          <Text style={styles.headerText}>Pedido {`${orderObj.orderID}`}</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cliente</Text>
            <View style={styles.card}>
              <Text
                style={styles.cardTextBold}
              >{`${orderObj.client.name}`}</Text>
              <Text style={styles.cardText}>{`${formatCPF(
                orderObj.client.cpf
              )}`}</Text>
              <Text style={styles.cardText}>{`${orderObj.client.email}`}</Text>
              <Text style={styles.cardText}>{`${formatCellPhone(
                orderObj.client.cellPhone
              )}`}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Entrega</Text>
            <View style={styles.card}>
              <Text
                style={styles.cardTextBold}
              >{`${orderObj.address.addressName}`}</Text>
              <Text style={styles.cardText}>{`${orderObj.address.cep}`}</Text>
              <Text style={styles.cardText}>
                {`${orderObj.address.city}`} - {`${orderObj.address.uf}`}
              </Text>
              <Text style={styles.cardText}>
                {`${orderObj.address.number}`},{" "}
                {`${orderObj.address.complement}`}
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Produtos</Text>
            {orderObj.orderProducts.map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTextBold}>{item.productName}</Text>
                <Text
                  style={styles.cardText}
                >{`Quantidade: ${item.quantity}`}</Text>
                <Text
                  style={styles.cardText}
                >{`Valor: R$${item.finalPrice.toFixed(2)}`}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pedido</Text>
            <View style={styles.card}>
              <Text style={styles.cardText}>
                {`Data do pedido: ${new Date(
                  orderObj.orderDate
                ).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}`}
              </Text>
              <Text style={styles.cardText}>{`Total: R$${orderObj.total.toFixed(
                2
              )}`}</Text>
              <Text style={styles.cardText}>
                {`Data de entrega: ${new Date(
                  orderObj.deliveryForecast
                ).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}`}
              </Text>
              <Text
                style={styles.cardText}
              >{`Método de pagamento: ${orderObj.paymentMethod}`}</Text>
            </View>
          </View>
        </ScrollView>

        <BottomNav />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  scrollContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#1A1ABB",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  cardTextBold: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#666666",
  },
});

export default OrderDetails;
