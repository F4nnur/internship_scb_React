import {STORAGE_KEYS} from "../../utils/storage";


export type LoginResponseDto = {
    access_token: STORAGE_KEYS.ACCESS_TOKEN
    refresh_token: STORAGE_KEYS.REFRESH_TOKEN
}
