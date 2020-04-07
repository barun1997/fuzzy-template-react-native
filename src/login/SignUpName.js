// @flow
import * as React from "react";

import {Button, TextField} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type SignUpNameProps = NavigationProps<>;

type SignUpNameState = {
    firstName: string,
    lastName: string
};

export default class SignUpName extends React.PureComponent<SignUpNameProps, SignUpNameState> {

    // $FlowFixMe
    lastName = React.createRef();

    state = {
        firstName: "",
        lastName: ""
    };

    setFirstName = (firstName: string) => this.setState({ firstName });

    setLastName = (lastName: string) => this.setState({ lastName });

    goToLastName = () => this.lastName.current.focus();

    signUp = () => {
        const {navigation} = this.props;
        const {firstName, lastName} = this.state;
        // eslint-disable-next-line no-console
        console.log({firstName, lastName});
        navigation.navigate("Welcome");
    };

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("SignUpEmail");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.navigate("Login");
    }

    render(): React.Node {
        return (
            <LoginContainer
                title="Who are you"
                subtitle="Your Name"
            >
                <TextField
                    placeholder="First Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setFirstName}
                    onSubmitEditing={this.goToLastName}
                />
                <TextField
                    placeholder="LastName"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    ref={this.lastName}
                    onSubmitEditing={this.next}
                    onChangeText={this.setLastName}
                />
                <Button label="Next" onPress={this.next} full primary />
                <Button label="Back" onPress={this.back} full primary transparent />
            </LoginContainer>
        );
    }
}
