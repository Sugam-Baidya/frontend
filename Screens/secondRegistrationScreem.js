import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Create the SecondRegistrationScreen component
const SecondRegistrationScreen = () => {
  // State variables to store user input
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  // Function to handle the submit button press
  const handleSubmit = async () => {
    try {
      // Make a POST request to the backend
      const response = await fetch(
        "http://192.168.254.8:4000/api/register/customer/details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, phoneNo }),
        }
      );

      const data = await response.json();

      // Handle the response from the server
      if (response.ok && data.success) {
        console.log("Registration successful");
        // You might want to navigate to another screen or show a success message here
        navigation.navigate("Home");
      } else {
        console.error("Registration failed:");

        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      {/* First Name Input */}
      <TextInput
        style={[styles.input, { width: "80%" }]}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />

      {/* Last Name Input */}
      <TextInput
        style={[styles.input, { width: "80%" }]}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />

      {/* Phone No Input */}
      <TextInput
        style={[styles.input, { width: "80%" }]}
        placeholder="Phone No"
        onChangeText={(text) => setPhoneNo(text)}
        value={phoneNo}
        keyboardType="numeric" // Set keyboard type to numeric
      />

      {/* Submit Button */}
      <View style={{ width: "80%", marginTop: 10 }}>
        <Button title="Submit" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

// Export the component
export default SecondRegistrationScreen;
