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

const email = "josereymondaguilar@gmail.com";
const username = "regov123";
const password = "test123";

export default class Register extends Component {
  state = {
    email: email,
    username: username,
    password: password,
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
      navigation.navigate("RegisterDetails");
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
              <Button gradient onPress={() => this.handleRegister()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Next
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
