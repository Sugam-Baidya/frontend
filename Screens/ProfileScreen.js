// Import necessary components from React and React Native
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage for storing user data

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("Registration");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <View style={styles.profileIconContainer}>
        <Icon name="user-circle" size={100} color="#333" />
      </View>

      {/* User Information */}
      <View style={styles.userInfoContainer}>
        {user && (
          <>
            <Text style={styles.username}>
              {`${Registration.firstName} ${Registration.lastName}`}
            </Text>
            <Text style={styles.phoneNo}>{user.phoneNo}</Text>
          </>
        )}
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
  },
  profileIconContainer: {
    marginBottom: 20,
  },
  userInfoContainer: {
    alignItems: "center",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  phoneNo: {
    fontSize: 18,
    color: "#555",
  },
});

// Export the component
export default ProfileScreen;
