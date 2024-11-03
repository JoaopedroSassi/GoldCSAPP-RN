import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRouter } from "expo-router";

import api from "./services/api";

import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import * as SplashScreen from "expo-splash-screen"; 
import CustomText from "./components/customText";

const login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();


 const [fontsLoaded] = useFonts({
  OpenSans_400Regular,
  OpenSans_700Bold,
});

useEffect(() => {
  if (fontsLoaded) {
    SplashScreen.hideAsync(); 
  }
}, [fontsLoaded]);
  
  useEffect(() => {
    const clearStorageItem = async () => {
      try {
        await AsyncStorage.removeItem("jwtToken");
      } catch (e) {
        console.error("Erro ao remover o JWT do AsyncStorage", e);
      }
    };

    clearStorageItem();
  });

  if (!fontsLoaded) {
    return null; 
  }


  const handleLogin = async () => {
    setLoading(true); 
    setError(false); 
    try {
      const response = await api.post("/Authenticate/LoginUser", {
        email,
        password,
      });

      const { token } = response.data.result;

      await AsyncStorage.setItem("jwtToken", token);

      router.push("/home");
    } catch (error) {
      setError(true);
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false); 
    }
  };

  const getPlaceholderTextColor = (input: string) => {
    if (error) return "#FF0000";
    if (focusedInput === input) return "#343aeb";
    return "#000000";
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo-white.svg")} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            error && styles.inputError,
            focusedInput === "email" && styles.inputBorderFocused,
          ]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          onFocus={() => {
            setFocusedInput("email");
          }}
          onBlur={() => {
            setFocusedInput(null);
          }}
          placeholderTextColor={getPlaceholderTextColor("email")}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              error && styles.inputError,
              focusedInput === "password" && styles.inputBorderFocused,
            ]}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            onFocus={() => {
              setFocusedInput("password");
            }}
            onBlur={() => {
              setFocusedInput(null);
            }}
            secureTextEntry={!showPassword}
            placeholderTextColor={getPlaceholderTextColor("password")}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "visibility-off" : "visibility"}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {error && (
          <CustomText style={styles.errorText}>Senha ou email incorretos!</CustomText>
        )}

        <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading} 
            >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" /> 
          ) : (
            <CustomText style={styles.buttonText}>ENTRAR</CustomText>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1ABB",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  form: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    color: "#000000",
  },
  inputError: {
    borderBottomColor: "#FF0000",
  },
  inputBorderFocused: {
    borderBottomColor: "#343aeb",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errorText: {
    color: "#FF0000",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1A1ABB",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.7, 
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default login;
