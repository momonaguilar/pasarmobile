import React from "react";

import { View, Text } from "react-native";

const HomeScreen = () => {
  global.currentScreenIndex = "HomeScreen";
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Product</Text>
    </View>
  );
};
export default HomeScreen;
