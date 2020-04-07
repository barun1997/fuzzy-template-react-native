// @flow
import * as React from "react";
import {StatusBar, Platform} from "react-native";
import {enableScreens} from "react-native-screens";
import {createSwitchNavigator, createAppContainer} from "react-navigation";
import {AppLoading} from "expo";
import * as Font from "expo-font";

import {Images, loadIcons, ThemeProvider} from "./src/components";

import {Login, SignUpNavigator} from "./src/login";
import {Welcome} from "./src/welcome";
import {FoodNavigator} from "./src/food";
import {SocialNavigator} from "./src/social";
import {MusicNavigator} from "./src/music";
import {PhotographyNavigator} from "./src/photography";
import {TravelNavigator} from "./src/travel";
import {PlayerProvider} from "./src/components/music";

enableScreens();

// $FlowFixMe
const SFProTextBold = require("./assets/fonts/SF-Pro-Text-Bold.otf");
// $FlowFixMe
const SFProTextSemibold = require("./assets/fonts/SF-Pro-Text-Semibold.otf");
// $FlowFixMe
const SFProTextRegular = require("./assets/fonts/SF-Pro-Text-Regular.otf");

const onNavigationStateChange = () => undefined;

type AppProps = {};
type AppState = {
    isReady: boolean
};

export default class App extends React.Component<AppProps, AppState> {

    state = {
        isReady: false
    };

    ready() { this.setState({ isReady: true }); }

    async componentDidMount(): Promise<void> {
        StatusBar.setBarStyle("dark-content");
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("white");
        }
        const fonts = Font.loadAsync({
            "SFProText-Bold": SFProTextBold,
            "SFProText-Semibold": SFProTextSemibold,
            "SFProText-Regular": SFProTextRegular
        });
        const images = Images.downloadAsync();
        const icons = loadIcons();
        try {
            await Promise.all([fonts, ...images, icons]);
        } catch (e) {
            // Do nothing
        }
        this.ready();
    }

    render(): React.Node {
        const {isReady} = this.state;
        return (
            <React.Fragment>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle={isReady ? "light-content" : "dark-content"}
                />
                <ThemeProvider>
                    <PlayerProvider>
                        {
                            !isReady && (<AppLoading />)
                        }
                        {
                            isReady && (<AppNavigator {...{onNavigationStateChange}} />)
                        }
                    </PlayerProvider>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

const MainNavigator = createSwitchNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUpNavigator },
    Welcome: { screen: Welcome },
    Food: { screen: FoodNavigator },
    Social: { screen: SocialNavigator },
    Music: { screen: MusicNavigator },
    Photography: { screen: PhotographyNavigator },
    Travel: { screen: TravelNavigator }
});

const AppNavigator = createAppContainer(MainNavigator);
