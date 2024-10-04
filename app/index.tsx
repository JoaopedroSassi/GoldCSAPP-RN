import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Obtendo as dimensões da tela
const { width } = Dimensions.get("window");

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null); // Armazenar qual input está focado

  const handleLogin = () => {
    // Simulando a validação de erro para fins de exemplo
    if (email !== "test@example.com" || password !== "123456") {
      setError(true);
    } else {
      setError(false);
      // lógica de login
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
          style={[styles.input, error && styles.inputError, focusedInput === 'email' && styles.inputBorderFocused]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          onFocus={() => { setFocusedInput('email') }}
          onBlur={() => { setFocusedInput(null) }}
          placeholderTextColor={getPlaceholderTextColor('email')}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, error && styles.inputError, focusedInput === 'password' && styles.inputBorderFocused]}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            onFocus={() => { setFocusedInput('password') }}
            onBlur={() => { setFocusedInput(null) }}
            secureTextEntry={!showPassword}
            placeholderTextColor={getPlaceholderTextColor('password')}
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
          <Text style={styles.errorText}>Senha ou email incorretos!</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
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
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
