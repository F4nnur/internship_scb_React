import Modal from "react-ts-modal";
import React from "react";
import EditTimeWindow from "./editTimeWindow";
import s from "./MyAwesomeModel.module.scss";



const MyAwesomeModal = () => {
    return (
        <Modal name="awesome-modal" closeButton={false} className={s.modal}>

            <EditTimeWindow/>

        </Modal>
    );
};
export default React.memo(MyAwesomeModal)