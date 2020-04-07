// @flow
import {Asset} from "expo-asset";
import logo from "../../../assets/app.png";

export default class Images {

    static logo = logo;

    static downloadAsync(): Promise<*>[] {
        return [
            Asset.loadAsync(Images.logo)
        ];
    }
}
