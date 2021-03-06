import React, { useState } from "react";

//required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Loader from "./components/loader";

const RegisterScreen = (props) => {
  let [email, setEmail] = useState("");
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [postCode, setPostcode] = useState("");
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState("");
  let [isRegistraionSuccess, setIsRegistrationSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext("");
    if (!email) {
      alert("Email is a required field");
      return;
    }
    if (!username) {
      alert("Username is a required field");
      return;
    }
    if (!password) {
      alert("Password is a required field");
      return;
    }
    if (!name) {
      alert("Name is a required field");
      return;
    }
    if (!address) {
      alert("Address is a required field");
      return;
    }
    if (!postCode) {
      alert("Postcode is a required field");
      return;
    }
    if (!city) {
      alert("City is a required field");
      return;
    }
    if (!country) {
      alert("Country is a required field");
      return;
    }

    setIsRegistrationSuccess(true);
    console.log("INFO: Registration success.");
    Alert.alert(
      "Registration success",
      "Registration is successful. Please login to proceed.",
      { cancelable: false }
    );
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../images/success.png")}
          style={{ height: 150, resizeMode: "contain", alignSelf: "center" }}
        />
        <Text style={styles.successTextStyle}>Registration successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("RegisterUploadICScreen")}
        >
          <Text style={styles.buttonTextStyle}>Login now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
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
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Email) => setEmail(Email)}
              placeholder="Email address"
              placeholderTextColor="tomato"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              placeholder="User name"
              placeholderTextColor="tomato"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Password) => setPassword(Password)}
              placeholder="Password"
              placeholderTextColor="tomato"
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Name) => setName(Name)}
              placeholder="Name"
              placeholderTextColor="tomato"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Address) => setAddress(Address)}
              placeholder="Address"
              placeholderTextColor="tomato"
              keyboardType="numeric"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Postcode) => setPostcode(Postcode)}
              placeholder="Post code"
              placeholderTextColor="tomato"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(City) => setCity(City)}
              placeholder="City"
              placeholderTextColor="tomato"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Country) => setCountry(Country)}
              placeholder="Country"
              placeholderTextColor="tomato"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate("RegisterUploadICScreen")}
          >
            <Text style={styles.buttonTextStyle}>Continue</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 35,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    margin: 0,
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
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "green",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
