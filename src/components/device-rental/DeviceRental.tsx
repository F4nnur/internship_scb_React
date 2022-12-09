import React, {useEffect} from "react";
import s from "./style.module.scss"
import DevicesList from './DeviseList'
import {useDispatch, useSelector} from "react-redux";
import {fetchDevices} from "../../store/actions/entities/devices.actions";
import {AppDispatch} from "../../store/store";
import {allDevicesListSelector} from "../../store/selectors/entities/devices.selectors";



const DeviceRental = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchDevices())
    }, [dispatch])

    const devices = useSelector(allDevicesListSelector)
    const IphoneDevices = devices?.filter(item =>
        item.device_name.includes('iPhone')
    )

    const AndroidDevices = devices?.filter(item => !item.device_name.includes('iPhone'))

    return (
        <div className={s.DeviceRental}>
            <p className={s.title}>Аренда устройства</p>
            <p className={s.IOSTittle}>IOS</p>
            <p className={s.AndroidTittle}>Android</p>
            <div className={s.IOSListDevice}>
                <DevicesList
                    device={IphoneDevices}
                />
            </div>
            <div className={s.AndroidListDevice}>
                <DevicesList
                    device={AndroidDevices}
                />
            </div>
        </div>
    );
};

export default DeviceRental;