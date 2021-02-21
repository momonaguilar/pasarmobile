import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const SplashScreen = (props) => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem("user_id").then((value) =>
        props.navigation.navigate(
          value === null ? "Auth" : "DrawerNavigationRoutes"
        )
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/pasarmobile.png")}
        style={{ width: "80%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
