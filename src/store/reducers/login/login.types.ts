import {STORAGE_KEYS} from "../../../utils/storage";

export type LoginState = {
    access?: STORAGE_KEYS.ACCESS_TOKEN
    refresh?: STORAGE_KEYS.REFRESH_TOKEN
};


export type Login = LoginState
