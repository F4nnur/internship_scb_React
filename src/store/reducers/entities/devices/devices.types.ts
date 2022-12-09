import { Brand } from "../../../../constants/types"

export type DeviceId = Brand<number, 'device_id'>
export type DeviceName = Brand<string, 'device_name'>
export type DeviceDisplayName = Brand<string, "display_name">

export type Device = {
  id: DeviceId,
  device_name: DeviceName,
  display_name: DeviceDisplayName,
}
