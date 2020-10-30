import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Button, Block, Input, Text } from "../component";
import { theme } from "../constants";

export default class Register extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    name: null,
    address: null,
    postcode: null,
    city: null,
    country: null,
    errors: [],
    loading: false,
  };

  handleRegister() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            },
          },
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.register} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Register
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingVertical: theme.sizes.base }}
          >
            <Block middle>
              <Input
                email
                label="Email"
                error={hasErrors("email")}
                style={[styles.input, hasErrors("email")]}
                defaultValue={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <Input
                label="Username"
                error={hasErrors("username")}
                style={[styles.input, hasErrors("username")]}
                defaultValue={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
              />
              <Input
                secure
                label="Password"
                error={hasErrors("password")}
                style={[styles.input, hasErrors("password")]}
                defaultValue={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
              />
              <Input
                label="Name"
                error={hasErrors("name")}
                style={[styles.input, hasErrors("name")]}
                defaultValue={this.state.name}
                onChangeText={(text) => this.setState({ name: text })}
              />
              <Input
                label="Address"
                error={hasErrors("address")}
                style={[styles.input, hasErrors("address")]}
                defaultValue={this.state.address}
                onChangeText={(text) => this.setState({ address: text })}
              />
              <Input
                label="Postcode"
                error={hasErrors("postcode")}
                style={[styles.input, hasErrors("postcode")]}
                defaultValue={this.state.postcode}
                onChangeText={(text) => this.setState({ postcode: text })}
              />
              <Input
                label="City"
                error={hasErrors("city")}
                style={[styles.input, hasErrors("city")]}
                defaultValue={this.state.city}
                onChangeText={(text) => this.setState({ city: text })}
              />
              <Input
                label="Country"
                error={hasErrors("country")}
                style={[styles.input, hasErrors("country")]}
                defaultValue={this.state.country}
                onChangeText={(text) => this.setState({ country: text })}
              />
              <Button gradient onPress={() => this.handleRegister()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Sign Up
                  </Text>
                )}
              </Button>

              <Button onPress={() => navigation.navigate("Login")}>
                <Text
                  gray
                  caption
                  center
                  style={{ textDecorationLine: "underline" }}
                >
                  Back to Login
                </Text>
              </Button>
            </Block>
          </ScrollView>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
