import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchLoginApi} from "../../api/login/login.requests";

export const fetchLogin = createAsyncThunk('login',
    async ({username, password}: {username: string, password: string}) =>
        fetchLoginApi(username, password))