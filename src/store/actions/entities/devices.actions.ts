import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchDevicesApi} from "../../../api/devices/devices.requests";

export const fetchDevices = createAsyncThunk('devices', fetchDevicesApi)