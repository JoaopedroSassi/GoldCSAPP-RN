import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomNav from "./components/bottomNav";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import api from "./services/api";
import Toast from "react-native-toast-message";
import CustomText from "./components/customText";

const confirmationStock: React.FC = () => {
  const { productInsert } = useLocalSearchParams();
  const productInsertObj = productInsert
    ? JSON.parse(productInsert as string)
    : null;

  const handleNavigation = () => {
    router.push("/addStock");
  };

  const handleInsert = async () => {
    try {
      const jsonData = {
        productId: productInsertObj.product.productID,
        quantity: productInsertObj.quantity,
      };

      const response = await api.post("/Product/insertAmount", jsonData);
      const success = response.data.success;
      if (success) {
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Estoque inserido com sucesso",
        });
        router.push("/home");
      } else {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: "Erro ao inserir estoque",
        });
      }
    } catch (e) {
      console.error("Erro ao inserir estoque", e);
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

      <View style={styles.content}>
        <View style={styles.productInfo}>
          <CustomText style={styles.productLabel}>
            {productInsertObj.product.name}
          </CustomText>
          <CustomText style={styles.productDetail}>
            {productInsertObj.product.version}
          </CustomText>
          <CustomText style={styles.productDetail}>
            {productInsertObj.product.categoryName}
          </CustomText>
          <CustomText
            style={styles.productDetail}
          >{`Quantidade: ${productInsertObj.quantity}`}</CustomText>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => handleInsert()}>
          <CustomText style={styles.buttonText}>INSERIR ESTOQUE</CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleNavigation}
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
