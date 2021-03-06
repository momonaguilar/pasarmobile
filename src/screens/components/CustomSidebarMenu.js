import React from "react";

import { View, StyleSheet, Image, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const CustomSidebarMenu = (props) => {
  let items = [
    {
      navOptionName: "Products",
      screenToNavigate: "HomeScreen",
    },
    {
      navOptionName: "Settings",
      screenToNavigate: "SettingsScreen",
    },
    {
      navOptionName: "Logout",
      screenToNavigate: "Logout",
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == "Logout") {
      props.navigation.toggleDrawer();
      Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
          {
            text: "No",
            onPress: () => {
              return null;
            },
          },
          {
            text: "Yes",
            onPress: () => {
              AsyncStorage.clear();
              props.navigation.navigate("Auth");
              console.log("INFO: Logging out.");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Image
            source={require("../../images/avatar.png")}
            style={{
              width: "50%",
              height: 100,
              resizeMode: "contain",
              margin: 30,
            }}
          />
        </View>
        <Text style={stylesSidebar.profileHeaderText}>Welcome</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{ width: "100%", flex: 1 }}>
        {items.map((item, key) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              color: "white",
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? "yellowgreen"
                  : "green",
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    paddingTop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "green",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
    marginBottom: 10,
  },
});
export default CustomSidebarMenu;
