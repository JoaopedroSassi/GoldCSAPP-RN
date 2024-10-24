import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter, Router } from "expo-router";

import BottomNav from "./components/bottomNav";
import { Order } from "./interfaces/Order";
import api from "./services/api";
import CustomText from "./components/customText";

const home: React.FC = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await api.get("/Order");

        const success = response.data.success;
        if (success) {
          const result = response.data.result;
          setOrders(result);
        }
      } catch (e) {
        console.error("Erro ao trazer os Pedidos", e);
      }
    };

    fetchPedidos();
  }, []);

  const navigateToDetails = (pedido: Order) => {
    router.push({
      pathname: "/orderDetails",
      params: { order: JSON.stringify(pedido) },
    });
  };

  const handleNavigation = () => {
    router.push("/login");
  };

  const renderPedido = ({ item }: { item: Order }) => (
    <TouchableOpacity
      onPress={() => navigateToDetails(item)}
      style={styles.pedidoContainer}
    >
      <View>
        <CustomText style={styles.pedidoCliente}>{item.client.name}</CustomText>
        <CustomText style={styles.pedidoNumero}>{item.orderID}</CustomText>
        <CustomText style={styles.pedidoData}>
          {new Date(item.orderDate).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </CustomText>
      </View>
      <Icon name="chevron-right" size={24} color="#1A1ABB" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/logoGoldCS.png")}
          style={styles.logo}
        />
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name="exit-to-app" size={40} color="#1A1ABB" />
        </TouchableOpacity>
      </View>

      <CustomText style={styles.title}>Últimos pedidos</CustomText>

      <FlatList
        data={orders}
        renderItem={renderPedido}
        contentContainerStyle={styles.listaPedidos}
      />

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  defaultText: {
    fontFamily: 'OpenSans_400Regular', // Aplica a fonte em todos os textos
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 130,
    height: 90,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    marginLeft: 16,
  },
  listaPedidos: {
    paddingHorizontal: 16,
  },
  pedidoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1A1ABB",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pedidoCliente: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  pedidoNumero: {
    fontSize: 14,
    marginBottom: 4,
  },
  pedidoData: {
    fontSize: 14,
    color: "#808080",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#1A1ABB",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#1A1ABB",
    fontSize: 12,
    marginTop: 4,
  },
  navCenterButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FFD700",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default home;
