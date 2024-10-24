import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNav from "./components/bottomNav";
import Feather from "@expo/vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "./interfaces/DecodedToken";
import CustomText from "./components/customText";

const handleNavigation = () => {
  router.push("/home");
};

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    email: string;
    role: string;
  }>({
    name: "Nome não disponível",
    email: "Email não disponível",
    role: "Cargo não disponível",
  });

  useEffect(() => {
    const getTokenAndDecode = async () => {
      try {
        const token = await AsyncStorage.getItem("jwtToken");
        if (token) {
          const decoded: DecodedToken = jwtDecode(token);

          setUserInfo({
            name: decoded.name || "",
            email: decoded.email || "",
            role: decoded.role || "",
          });
        }
      } catch (error) {
        console.error("Erro ao recuperar ou decodificar o token:", error);
      }
    };

    getTokenAndDecode();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={30}
          color="#FFF"
          onPress={handleNavigation}
        />
        <CustomText style={styles.headerTextProfile}>Perfil</CustomText>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Feather name="user" size={180} color="#1E0FA0" />
        </View>
      </View>

      <View style={styles.infoCard}>
        <CustomText style={styles.userName}>{userInfo.name}</CustomText>
        <CustomText style={styles.userDetail}>{userInfo.email}</CustomText>
        <CustomText style={styles.userDetail}>{userInfo.role}</CustomText>
      </View>

      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#1E0FA0",
    height: 250,
    justifyContent: "flex-start",
    paddingLeft: 20,
    flexDirection: "row",
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
  profileContainer: {
    alignItems: "center",
    marginTop: -220,
  },
  profileImageWrapper: {
    width: 250,
    height: 250,
    borderRadius: 130,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E6E6E6",
  },
  profileImage: {
    width: 120,
    height: 120,
    tintColor: "#2E3192",
  },
  infoCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
    marginBottom: 120,
    borderWidth: 1,
    borderColor: "#1A1ABB",
  },

  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E0FA0",
    marginBottom: 12,
  },
  userDetail: {
    fontSize: 18,
    color: "#7D7D7D",
    marginBottom: 6,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#1A1ABB",
  },
  headerTextProfile:{
    fontSize: 22,
    marginLeft: 16,
    color: "#fff",
    alignItems:"center",
  }
});

export default ProfileScreen;
