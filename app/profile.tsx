import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNav from "./components/bottomNav";
import Feather from "@expo/vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "./interfaces/DecodedToken";

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
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileImageWrapper}>
          <Feather name="user" size={120} color="#1E0FA0" />
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.userName}>{userInfo.name}</Text>
        <Text style={styles.userDetail}>{userInfo.email}</Text>
        <Text style={styles.userDetail}>{userInfo.role}</Text>
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
    height: 150,
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
    width: 180,
    height: 180,
    borderRadius: 90,
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
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginBottom: 120,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E3192",
    marginBottom: 10,
  },
  userDetail: {
    fontSize: 16,
    color: "#7D7D7D",
    marginBottom: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#1A1ABB",
  },
});

export default ProfileScreen;
