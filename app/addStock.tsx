import React, { useState, useEffect } from "react";
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
import { Picker } from "@react-native-picker/picker";
import api from "./services/api";
import { Product } from "./interfaces/Product";
import Toast from "react-native-toast-message";
import CustomText from "./components/customText";

const AddStock: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get("/Product/WithoutPagination");

        const success = response.data.success;
        if (success) {
          const result: Product[] = response.data.result;
          setProducts(result);
        }
      } catch (e) {
        console.error("Erro ao trazer os Produtos", e);
      }
    };

    fetchProdutos();
  }, []);

  const handleNavigation = () => {
    router.push("/home");
  };

  const handleContinue = () => {
    if (!product || !quantity) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Por favor, preencha todas as informações.",
      });

      setProduct(null);
      setQuantity("");
      return;
    } else {
      const jsonData = {
        product: product,
        quantity: quantity,
      };

      router.push({
        pathname: "/confirmationStock",
        params: { productInsert: JSON.stringify(jsonData) },
      });
    }
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
        <CustomText style={styles.headerText}>Estoque</CustomText>
      </View>

      <View style={styles.form}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={product ? product.productID : ""}
            onValueChange={(itemValue) => {
              const productItem = products.find(
                (p) => p.productID == itemValue
              );
              setProduct(productItem || null);
            }}
            style={styles.picker}
          >
            <Picker.Item label="Selecione um produto" value="" />
            {products.map((item) => (
              <Picker.Item
                key={item.productID}
                label={`${item.name} - ${item.version}`}
                value={item.productID}
              />
            ))}
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantity}
          onChangeText={(text) => {
            setQuantity(text.replace(/[^0-9]/g, ""));
          }}
          placeholderTextColor="#6A6A6A"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleContinue()}
        >
          <CustomText style={styles.buttonText}>CONTINUAR</CustomText>
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
  picker: {
    color: "#6A6A6A",
    fontSize: 16,
    padding: 10,
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
