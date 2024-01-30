// HomeScreen.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import MapScreen from "./MapScreen";
import ProfileScreen from "./ProfileScreen";

const Display = ({ navigation }) => (
  <View
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  ></View>
);

const CartScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Cart Screen</Text>
  </View>
);

const OrderHistoryScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Order History Screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>About Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Settings Screen</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <NavigationContainer independent={true}>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Display} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Drawer.Screen name="Maps" component={MapScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default HomeScreen;
