import React, { useState } from "react";

//required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Loader from "./components/loader";

const VALID_EMAIL = "josereymondaguilar@gmail.com";
const VALID_PASSWORD = "regov123";

const LoginScreen = (props) => {
  userEmail = VALID_EMAIL;
  userPassword = VALID_PASSWORD;

  let [userEmail, setUserEmail] = useState(VALID_EMAIL);
  let [userPassword, setUserPassword] = useState(VALID_PASSWORD);
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState("");

  const handleSubmitPress = () => {
    const errors = [];
    setErrortext("");
    if (!userEmail) {
      alert("Email required");
      return;
    }
    if (!userPassword) {
      alert("Password required");
      return;
    }
    setLoading(true);

    //check with backend API or with some static data
    if (userEmail !== VALID_EMAIL) {
      errors.push("email");
    }
    if (userPassword !== VALID_PASSWORD) {
      errors.push("password");
    }

    if (!errors.length) {
      setLoading(false);
      AsyncStorage.setItem("user_id", userEmail);
      console.log(userEmail);
      props.navigation.navigate("DrawerNavigationRoutes");
    }
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginTop: 100 }}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../images/pasarmobile.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                defaultValue={VALID_EMAIL}
                placeholder="Enter Email"
                placeholderTextColor="tomato"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                defaultValue={VALID_PASSWORD}
                placeholder="Enter Password"
                placeholderTextColor="tomato"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate("RegisterScreen")}
            >
              Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "green",
    borderColor: "green",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "green",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "green",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "green",
  },
  registerTextStyle: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
