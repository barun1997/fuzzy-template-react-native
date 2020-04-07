// @flow
import * as React from "react";

import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type LoginProps = NavigationProps<>;

type LoginState = {
    email: string,
    password: string
};

export default class Login extends React.PureComponent<LoginProps, LoginState> {

    // $FlowFixMe
    passwordField = React.createRef();

    state = {
        email: "",
        password: ""
    };

    setEmail = (email: string) => this.setState({ email });

    setPassword = (password: string) => this.setState({ password });

    goToPassword = () => this.passwordField.current.focus();

    login = () => {
        const {navigation} = this.props;
        const {email, password} = this.state;
        // eslint-disable-next-line no-console
        console.log({email, password});
        navigation.navigate("Welcome");
    };

    signUp = () => {
        const {navigation} = this.props;
        navigation.navigate("SignUp");
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Get Started"
                subtitle="Login"
            >
                <TextField
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setEmail}
                    onSubmitEditing={this.goToPassword}
                />
                <TextField
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    ref={this.passwordField}
                    onSubmitEditing={this.login}
                    onChangeText={this.setPassword}
                    secureTextEntry
                />
                <Button label="Login" onPress={this.login} full primary />
                <Button label="Sign Up" onPress={this.signUp} full primary transparent />
            </LoginContainer>
        );
    }
}
