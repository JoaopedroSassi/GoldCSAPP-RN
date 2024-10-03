import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface BottomNavProps {
  navigateToHome: () => void;
  navigateToPedidos: () => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ navigateToHome, navigateToPedidos }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome} style={styles.button}>
        <Icon name="home" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToPedidos} style={styles.boxButton}>
        <View style={styles.circle}>
          <MaterialCommunityIcons name="cube-outline" size={30} color="#1A1ABB" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToPedidos} style={styles.button}>
        <Icon name="list-alt" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1A1ABB',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  boxButton: {
    alignItems: 'center',
    padding: 10,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#FFD700', // Círculo amarelo
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNav;