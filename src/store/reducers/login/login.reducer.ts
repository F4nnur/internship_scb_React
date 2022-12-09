import {Login, LoginState} from "./login.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchLogin} from "../../actions/login.actions";
import { ReducerSingulars } from "../../../constants/reducerLIst";
import {setItemToStorage, STORAGE_KEYS} from "../../../utils/storage";

const initialState: LoginState = {
    access: " " as STORAGE_KEYS.ACCESS_TOKEN,
    refresh: " " as STORAGE_KEYS.REFRESH_TOKEN
}

export const loginReducer = createSlice({
    name: ReducerSingulars.Login,
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                fetchLogin.fulfilled,
                (state, action: PayloadAction<Login>) => {
                    console.log('action.payload', action.payload)
                    state.access = action.payload.access
                    action.payload.access && setItemToStorage(STORAGE_KEYS.ACCESS_TOKEN, action.payload.access);
                    state.refresh = action.payload.refresh
                    action.payload.refresh && setItemToStorage(STORAGE_KEYS.REFRESH_TOKEN, action.payload.refresh )
                },
            )
    }
});
