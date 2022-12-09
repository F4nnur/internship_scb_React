import {appAxiosInstance} from '../api'
import {ApiUrls} from '../../constants/urls'
import {DeviceResponseDto} from './devices.types'
import {Device} from '../../store/reducers/entities/devices/devices.types'
import {deviceResponseMapper} from "./devices.mappers";


/**
 * Получить устройства
 */
export const fetchDevicesApi = (): Promise<Device[]> =>
    appAxiosInstance
        .get<DeviceResponseDto[]>(ApiUrls.devices)
        .then(res => res.data.map(deviceResponseMapper))
