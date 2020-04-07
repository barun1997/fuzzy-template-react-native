// @flow
import * as React from "react";

import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type SignUpPasswordProps = NavigationProps<>;

type SignUpPasswordState = {
    password: string
};

export default class SignUpPassword extends React.PureComponent<SignUpPasswordProps, SignUpPasswordState> {

    state = {
        password: ""
    };

    setPassword = (password: string) => this.setState({ password });

    signUp = () => {
        const {navigation} = this.props;
        const {password} = this.state;
        // eslint-disable-next-line no-console
        console.log({password});
        navigation.navigate("Welcome");
    };

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Stay Safe"
                subtitle="Your Password"
            >
                <TextField
                    placeholder="Password"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    onChangeText={this.setPassword}
                    onSubmitEditing={this.signUp}
                    secureTextEntry
                />
                <Button label="Sign Up" onPress={this.signUp} full primary />
                <Button label="Back" onPress={this.back} full primary transparent />
            </LoginContainer>
        );
    }
}
