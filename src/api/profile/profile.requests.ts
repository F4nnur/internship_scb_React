import {appAxiosInstance} from '../api'
import {ApiUrls} from '../../constants/urls'
import {ProfileResponseDto} from './profile.types'
import {profileResponseMapper} from './profile.mappers'
import {Profile} from '../../store/reducers/profile/profile.types'


/**
 * Получить профиль
 */
export const fetchProfileApi = (): Promise<Profile> =>
    appAxiosInstance
        .get<ProfileResponseDto>(ApiUrls.profile)
        .then(res => profileResponseMapper(res.data))
