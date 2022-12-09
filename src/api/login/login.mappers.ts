import {LoginResponseDto} from './login.types'
import {Login} from "../../store/reducers/login/login.types";

export const loginResponseMapper = (login: LoginResponseDto): Login => ({
    access: login.access_token,
    refresh: login.refresh_token,
})
