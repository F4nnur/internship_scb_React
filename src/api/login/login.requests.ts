import {ApiUrls} from '../../constants/urls'
import {LoginResponseDto} from './login.types'
import {loginResponseMapper} from './login.mappers'
import {Login} from '../../store/reducers/login/login.types'
import { authAxiosInstance } from '../api'



export const fetchLoginApi = (username: string, password: string): Promise<Login> =>
    authAxiosInstance.post<{data: LoginResponseDto}>(ApiUrls.login, {username, password}).then((res) => {
        console.log('res.data', res.data)
        console.log('loginResponseMappe', loginResponseMapper(res.data.data))
        return loginResponseMapper(res.data.data)
    })
