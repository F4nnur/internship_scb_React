import {DeviceDisplayName, DeviceId, DeviceName} from "../../store/reducers/entities/devices/devices.types";

export type DeviceResponseDto = {
  id: DeviceId,
  name: DeviceName,
  display_name: DeviceDisplayName
}
