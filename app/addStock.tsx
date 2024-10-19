import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BottomNav from "./components/bottomNav";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

const AddStock: React.FC = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleNavigation = () => {
    router.push("/home");
  };

  const handleContinue = () => {
    console.log("Produto:", product, "Quantidade:", quantity);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={30}
          color="#000"
          onPress={handleNavigation}
        />
        <Text style={styles.headerText}>Estoque</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Produto"
          value={product}
          onChangeText={setProduct}
          placeholderTextColor="#6A6A6A"
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantity}
          onChangeText={setQuantity}
          placeholderTextColor="#6A6A6A"
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
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
    justifyContent: "space-between",
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
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  form: {
    padding: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6A6A6A",
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddStock;
