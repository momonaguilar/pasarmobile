import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import RegisterUploadICScreen from "./src/screens/RegisterUploadICScreen";
import DrawerNavigationRoutes from "./src/screens/DrawerNavigationRoutes";

const Auth = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "Register",
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "#fff",
    },
  },
  RegisterUploadICScreen: {
    screen: RegisterUploadICScreen,
    navigationOptions: {
      title: "Register",
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "#fff",
    },
  },
});

const App = createSwitchNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Auth: {
    screen: Auth,
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(App);
