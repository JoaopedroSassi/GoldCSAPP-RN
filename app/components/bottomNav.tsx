import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from 'expo-router';

const BottomNav: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/home')} style={styles.button}>
        <Icon name="home" size={30} color="#FFFFFF" />
        <Text style={styles.navText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/addStock')} style={styles.boxButton}>
        <View style={styles.circle}>
          <MaterialCommunityIcons
            name="cube-outline"
            size={30}
            color="#1A1ABB"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/home')} style={styles.button}>
        <AntDesign name="user" size={30} color="#FFFFFF" />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1A1ABB",
    paddingVertical: 10,
  },
  button: {
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  boxButton: {
    alignItems: "center",
    padding: 10,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: "#FFD700",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNav;
