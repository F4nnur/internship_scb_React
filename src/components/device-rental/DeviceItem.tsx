import React, {FC, useState, MouseEvent} from 'react';
import s from "./style.module.scss"
import IMAGES from "../../constants/images";
import cn from "classnames"
import {Device} from "../../store/reducers/entities/devices/devices.types";

interface DeviceItemProps {
    device: Device
}

const DeviceItem: FC<DeviceItemProps> = ({device}) => {
    const [isChoice, setChoice] = useState<boolean>(false);

    const handleChoice = (event: MouseEvent<HTMLInputElement>) => {
        setChoice(current => !current)
    }

    return (
        <div className={cn(s.DeviceItem, isChoice && s.active)}
             onClick={handleChoice}>
            <img className={s.DeviceImage}
                 src={IMAGES.device}
                 alt='device'
            />
            <p className={isChoice ? s.DeviceChoiced : s.DeviceParagraph}>{device.device_name}</p>
            {isChoice ?
                <img className={s.CheckBox} src={IMAGES.checkbox} alt={'checkbox'}/> :
                <div className={s.EmptyCircle}></div>}
            {(isChoice && !!device.display_name) ? <p className={s.RentalledParagraph}>Занято: {device.display_name} </p> :
                <p className={s.FreeDevice}>Свободно</p>}
        </div>
    );
};

export default React.memo(DeviceItem);