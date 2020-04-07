// @flow
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, TextField, Switch, Text, StyleGuide} from "../components";
import type {NavigationProps} from "../components/Navigation";

import LoginContainer from "./LoginContainer";

type SignUpEmailProps = NavigationProps<>;

type SignUpEmailState = {
    email: string,
    newsletter: boolean
};

export default class SignUpEmail extends React.PureComponent<SignUpEmailProps, SignUpEmailState> {

    state = {
        email: "",
        newsletter: false
    };

    setEmail = (email: string) => this.setState({ email });

    signUp = () => {
        const {navigation} = this.props;
        const {email, newsletter} = this.state;
        // eslint-disable-next-line no-console
        console.log({email, newsletter});
        navigation.navigate("SingUpPassword");
    };

    next = () => {
        const {navigation} = this.props;
        navigation.navigate("SignUpPassword");
    }

    back = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onToggle = (newsletter: boolean) => this.setState({ newsletter });

    render(): React.Node {
        const {onToggle} = this;
        return (
            <LoginContainer
                title="We won't spam"
                subtitle="Your Email"
            >
                <TextField
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                    returnKeyType="next"
                    onChangeText={this.setEmail}
                    onSubmitEditing={this.next}
                />

                <View style={styles.newsletter}>
                    <Switch {...{onToggle}} />
                    <Text style={styles.text}>
                    Sign up for the newsletter
                    </Text>
                </View>
                <Button label="Next" onPress={this.next} full primary />
                <Button label="Back" onPress={this.back} full primary transparent />
            </LoginContainer>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: StyleGuide.palette.white
    },
    newsletter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: StyleGuide.spacing.small
    }
});
