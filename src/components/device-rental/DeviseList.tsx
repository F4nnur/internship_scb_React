import React from "react";
import DeviceItem from "./DeviceItem";
import {Device} from "../../store/reducers/entities/devices/devices.types";

interface DevicesListProps {
    device?: Device[];
}

export default function DeviceList(props: DevicesListProps) {
    return (
        <div>
            {props.device?.map(item =>
                <DeviceItem device={item} key={item.id}/>
            )}
        </div>
    )
}