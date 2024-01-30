//GettingStarted.js

import { StyleSheet, Text, ImageBackground, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GettingStarted = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../Images/gettingStarted.jpg")}
      style={styles.background}
    >
      <View style={styles.fixToText}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
          style={styles.s1}
        />
      </View>
    </ImageBackground>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20%",
  },
});
