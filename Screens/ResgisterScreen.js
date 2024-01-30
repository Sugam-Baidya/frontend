// RegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterAsCustomer = async () => {
    try {
      const response = await fetch(
        "http://192.168.254.8:4000/api/register/customer",
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
        console.log("Customer registered successfully");
        // Navigate to the Home screen or any other screen upon successful registration
        navigation.navigate("Home"); // Replace 'Home' with the actual screen name
      } else {
        console.error("Customer registration failed");
        // Handle registration failure
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterAsSeller = async () => {
    try {
      const response = await fetch(
        "http://192.168.254.8:4000/api/register/seller",
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
        console.log("Seller registered successfully");
        // Navigate to the Home screen or any other screen upon successful registration
        navigation.navigate("Home"); // Replace 'Home' with the actual screen name
      } else {
        console.error("Seller registration failed");
        // Handle registration failure
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleLoginNow = () => {
    // Navigate to the login screen
    navigation.navigate("Login");
  };

  const handleNavigateToPage = () => {
    // Navigate to another page (replace 'AnotherPage' with the actual screen name)
    navigation.navigate("Getting Started");
  };

  return (
    <ImageBackground
      source={require("../Images/gettingStarted.jpg")}
      style={styles.container}
    >
      {/* Navigation icon to go to AnotherPage */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={handleNavigateToPage}
      >
        <Icon name="close" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Register</Text>
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
          style={styles.registerButton}
          onPress={() => handleRegisterAsCustomer()}
        >
          <Text style={[styles.buttonText, styles.customerText]}>
            Register{"\n"}as Customer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => handleRegisterAsSeller()}
        >
          <Text style={[styles.buttonText, styles.sellerText]}>
            Register{"\n"}as Seller
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already a member?</Text>
        <TouchableOpacity onPress={handleLoginNow}>
          <Text style={styles.loginButton}>Login now</Text>
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
  registerButton: {
    flex: 1,
    backgroundColor: "green", // Customize the color for the registration button
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
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    marginRight: 8,
  },
  loginButton: {
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

export default RegisterScreen;
