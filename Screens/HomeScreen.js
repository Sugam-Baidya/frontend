//HomeScreen.js

import { ImageBackground, StyleSheet, Text } from "react-native";
const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../Images/gettingStarted.jpg")}
      style={styles.background}
    >
      <Text>logged in</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    fontSize: 40,
  },
});

export default HomeScreen;
