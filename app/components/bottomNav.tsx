import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const BottomNav: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/home")}
        style={styles.button}
      >
        <Icon name="home" size={40} color="#FFFFFF" />
        <Text style={styles.navText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/addStock")}
        style={styles.boxButton}
      >
        <View style={styles.circle}>
          <MaterialCommunityIcons
            name="cube-outline"
            size={40}
            color="#fff"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/profile")}
        style={styles.button}
      >
        <AntDesign name="user" size={40} color="#FFFFFF" />
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
    padding: 6,
    marginTop: 8,
  },
  boxButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", 
    top: -40, 
    left: "40%",
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: "#FFB703",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 4,
  },
});

export default BottomNav;
