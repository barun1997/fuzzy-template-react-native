# Packages Used

```json
{
    "name": "react-native-elements",
    "version": "2.0.13",
    "private": true,
    "license": "https://wcandillon.github.io/react-native-elements/License.html",
    "devDependencies": {
        "babel-eslint": "^8.2.1",
        "babel-preset-expo": "^8.1.0",
        "eslint": "^4.9.0",
        "eslint-config-airbnb": "^16.1.0",
        "eslint-plugin-flowtype": "^2.41.0",
        "eslint-plugin-import": "^2.7.0",
        "eslint-plugin-jsx-a11y": "^6.0.2",
        "eslint-plugin-react": "^7.4.0",
        "eslint-plugin-react-native": "^3.2.1",
        "expo-cli": "3.17.5",
        "flow-bin": "0.63.1",
        "flow-result-checker": "^0.3.0",
        "jest-expo": "^37.0.0",
        "react-test-renderer": "16.0.0-alpha.12"
    },
    "main": "node_modules/expo/AppEntry.js",
    "scripts": {
        "start": "expo start",
        "android": "expo start --android",
        "ios": "expo start --ios",
        "eject": "expo eject",
        "test": "jest",
        "test:watch": "jest --watch",
        "flow": "flow check --show-all-errors | flow-result-checker",
        "lint": "eslint App.js src/",
        "deploy:expo": "expo publish",
        "deploy": "yarn deploy:expo",
        "build:ios": "expo build:ios",
        "build:android": "expo build:android",
        "build": "yarn build:ios && yarn build:android"
    },
    "jest": {
        "preset": "jest-expo"
    },
    "dependencies": {
        "@expo/vector-icons": "^10.0.0",
        "crypto-js": "^3.1.9-1",
        "expo": "^37.0.0",
        "expo-asset": "~8.1.3",
        "expo-av": "~8.1.0",
        "expo-blur": "~8.1.0",
        "expo-camera": "~8.2.0",
        "expo-constants": "~9.0.0",
        "expo-file-system": "~8.1.0",
        "expo-font": "~8.1.0",
        "expo-gl": "~8.1.0",
        "expo-linear-gradient": "~8.1.0",
        "expo-permissions": "~8.1.0",
        "gl-react": "^3.15.0",
        "gl-react-expo": "https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/npm%2Fgl-react-expo-3.16.15.tgz?alt=media&token=b255bf76-de93-43dd-85c2-d799f22fd6fc",
        "jest-junit-reporter": "^1.1.0",
        "lodash": "^4.17.4",
        "moment": "^2.18.1",
        "react": "16.9.0",
        "react-native": "https://github.com/expo/react-native/archive/sdk-37.0.0.tar.gz",
        "react-native-datepicker": "1.6.0",
        "react-native-gesture-handler": "~1.6.0",
        "react-native-keyboard-spacer": "^0.4.1",
        "react-native-maps": "0.26.1",
        "react-native-maps-super-cluster": "^1.3.1",
        "react-native-reanimated": "~1.7.0",
        "react-native-svg": "11.0.1",
        "react-navigation": "^4.0.6",
        "react-navigation-stack": "^1.8.1",
        "react-navigation-tabs": "^2.5.5"
    }
}
```