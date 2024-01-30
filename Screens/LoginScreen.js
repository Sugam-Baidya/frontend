// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigateToPage = () => {
    // Navigate to another page (replace 'AnotherPage' with the actual screen name)
    navigation.navigate("Getting Started");
  };

  const handleLoginAsCustomer = async () => {
    try {
      const response = await fetch(
        "http://192.168.254.8:4000/api/login/seller",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log("Customer login successful");
        // Navigate to the Home screen or any other screen upon successful login
        navigation.navigate("Home"); // Replace 'Home' with the actual screen name
      } else {
        console.error("Customer login failed");
        // Handle login failure
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginAsSeller = async () => {
    try {
      const response = await fetch(
        "http://192.168.254.8:4000/api/login/seller",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        console.log("Seller login successful");
        // Navigate to the Home screen or any other screen upon successful login
        navigation.navigate("Home"); // Replace 'Home' with the actual screen name
      } else {
        console.error("Seller login failed");
        // Handle login failure
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleRegisterNow = () => {
    // Navigate to the registration screen
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={require("../Images/gettingStarted.jpg")}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={handleNavigateToPage}
      >
        <Icon name="close" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLoginAsCustomer()}
        >
          <Text style={[styles.buttonText, styles.customerText]}>
            Login{"\n"}as Customer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLoginAsSeller()}
        >
          <Text style={[styles.buttonText, styles.sellerText]}>
            Login{"\n"}as Seller
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not a member?</Text>
        <TouchableOpacity onPress={handleRegisterNow}>
          <Text style={styles.registerButton}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 16,
  },
  loginButton: {
    flex: 1,
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginRight: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  customerText: {
    lineHeight: 24, // Adjust the line height for better spacing between the lines
  },
  sellerText: {
    lineHeight: 24, // Adjust the line height for better spacing between the lines
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    marginRight: 8,
  },
  registerButton: {
    color: "blue",
    textDecorationLine: "underline",
  },
  iconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1,
  },
});

export default LoginScreen;
