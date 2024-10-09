import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNav from './components/bottomNav'; // Importando o componente de navegação

const OrderDetails: React.FC = () => {
  const navigateToHome = () => {
    // Lógica de navegação para a Home
  };

  const navigateToPedidos = () => {
    // Lógica de navegação para a tela de Pedidos
  };

  return (
    <View style={styles.container}>
      {/* Header com ícone de voltar */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={30} color="#000" />
        <Text style={styles.headerText}>Pedido {`{id}`}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Seção do Cliente */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cliente</Text>
          <View style={styles.card}>
            <Text style={styles.cardTextBold}>Nome cliente</Text>
            <Text style={styles.cardText}>CPF</Text>
            <Text style={styles.cardText}>Email</Text>
            <Text style={styles.cardText}>Telefone contato</Text>
          </View>
        </View>

        {/* Seção de Entrega */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Entrega</Text>
          <View style={styles.card}>
            <Text style={styles.cardTextBold}>Endereço</Text>
            <Text style={styles.cardText}>CEP</Text>
            <Text style={styles.cardText}>Cidade - UF</Text>
            <Text style={styles.cardText}>Número, complemento</Text>
          </View>
        </View>

        {/* Seção de Produtos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Produtos</Text>
          <View style={styles.card}>
            <Text style={styles.cardTextBold}>Nome do produto</Text>
            <Text style={styles.cardText}>Quantidade</Text>
            <Text style={styles.cardText}>Valor</Text>
          </View>
        </View>

        {/* Seção de Pagamento */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pagamento</Text>
          <View style={styles.card}>
            <Text style={styles.cardTextBold}>Data do pedido</Text>
            <Text style={styles.cardText}>Valor total</Text>
          </View>
        </View>
      </ScrollView>

      {/* Barra de Navegação */}
      <BottomNav navigateToHome={navigateToHome} navigateToPedidos={navigateToPedidos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#1A1ABB',
    borderRadius: 8,
shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 5,
  },
  cardTextBold: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default OrderDetails;