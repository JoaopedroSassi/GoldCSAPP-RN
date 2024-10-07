import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNav from './components/bottomNav';

interface Pedido {
  id: string;
  nomeCliente: string;
  numeroPedido: string;
  dataPedido: string;
}

const pedidos: Pedido[] = [
  { id: '1', nomeCliente: 'Nome cliente', numeroPedido: '12345', dataPedido: '01/10/2024' },
  { id: '2', nomeCliente: 'Nome cliente', numeroPedido: '12346', dataPedido: '02/10/2024' },
  { id: '3', nomeCliente: 'Nome cliente', numeroPedido: '12347', dataPedido: '03/10/2024' },
  { id: '4', nomeCliente: 'Nome cliente', numeroPedido: '12348', dataPedido: '04/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
  { id: '5', nomeCliente: 'Nome cliente', numeroPedido: '12349', dataPedido: '05/10/2024' },
];

const Home: React.FC = () => {
  const navigateToHome = () => {
    // Lógica de navegação para a Home
  };

  const navigateToPedidos = () => {
    // Lógica de navegação para a tela de Pedidos
  };

  const renderPedido = ({ item }: { item: Pedido }) => (
    <TouchableOpacity style={styles.pedidoContainer}>
      <View>
        <Text style={styles.pedidoCliente}>{item.nomeCliente}</Text>
        <Text style={styles.pedidoNumero}>{item.numeroPedido}</Text>
        <Text style={styles.pedidoData}>{item.dataPedido}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#1A1ABB" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/logoGoldCS.png')} style={styles.logo} />
        <TouchableOpacity>
          <Icon name="exit-to-app" size={30} color="#1A1ABB" />
        </TouchableOpacity>
      </View>

      {/* Título */}
      <Text style={styles.title}>Últimos pedidos</Text>

      {/* Lista de Pedidos */}
      <FlatList
        data={pedidos}
        renderItem={renderPedido}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaPedidos}
      />

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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
  },
  listaPedidos: {
    paddingHorizontal: 16,
  },
  pedidoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1A1ABB',
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
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  pedidoNumero: {
    fontSize: 14,
    marginBottom: 4,
  },
  pedidoData: {
    fontSize: 14,
    color: '#808080',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#1A1ABB',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#1A1ABB',
    fontSize: 12,
    marginTop: 4,
  },
  navCenterButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFD700',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default Home;