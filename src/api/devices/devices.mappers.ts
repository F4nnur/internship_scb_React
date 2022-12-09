import {DeviceResponseDto} from './devices.types'
import {Device} from '../../store/reducers/entities/devices/devices.types';

export const deviceResponseMapper = (device: DeviceResponseDto): Device => ({
  id: device.id,
  device_name: device.name,
  display_name: device.display_name,
})
