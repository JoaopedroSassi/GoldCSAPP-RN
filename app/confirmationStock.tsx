import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomNav from "./components/bottomNav";
import { useNavigation } from "@react-navigation/native";

const confirmationStock: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Estoque</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.productInfo}>
          <Text style={styles.productLabel}>Produto</Text>
          <Text style={styles.productDetail}>Quantidade</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>INSERIR ESTOQUE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>CANCELAR</Text>
        </TouchableOpacity>
      </View>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    alignItems: "flex-start",
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  productInfo: {
    borderWidth: 1,
    borderColor: "#1A1ABB",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 30,
  },
  productLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productDetail: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#1A1ABB",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#1A1ABB",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default confirmationStock;