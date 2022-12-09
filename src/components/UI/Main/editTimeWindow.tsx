import s from "../../../pages/Main/style.module.scss";
import React from "react";
import InputField from "../inputField";
import ICONS from "../../../constants/icons";
import {modal} from "react-ts-modal";
import {Form} from "react-final-form";
import ConfirmButton from "../confirmButton";
import Modal from "react-ts-modal";
import "react-ts-modal/css/styles.scss";




const editTimeWindow = () => {
    const current = new Date();
    const date = `${current.getDate()}`;

    //todo доделать день недели

    let onSubmit: (value: (string | number)) => any;

    onSubmit = (value) => {
        console.log(value)
    }

    return (
        <div className={s.editTimeWindow}>
            <div className={s.editTimeHeaderWrapper}>
                <h1 id={s.editTimeTitle}>Редактировать рабочие часы</h1>
            </div>
            <div className={s.dateWrapper}>
            <h1 id={s.date}>Сегодня {date}</h1>
            </div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (

                    <div className={s.inputWrap}>

                        <form onSubmit={handleSubmit}>
                            <InputField
                                id={s.firstInput}
                                type={"text"}
                                placeholder={"Начало работы"}
                                name={"start"}
                                component={"input"}
                                isRevealPwd={""}
                                setIsRevealPwd={""}
                                onInputChange
                            />

                            <InputField
                                id={s.secondInput}
                                type={"text"}
                                placeholder={"Конец работы"}
                                name={"end"}
                                component={"input"}
                                isRevealPwd={""}
                                setIsRevealPwd={""}
                                onInputChange/>

                            <ConfirmButton loginButtonText={"Сохранить"}/>
                        </form>
                    </div>
                )}
            />
            {/*<button>*/}
                <img onClick={() => modal.hide("awesome-modal")} className={s.closeWindow} src={ICONS.XCircle} alt={"close"}/>
            {/*</button>*/}
        </div>
    );
};
export default React.memo(editTimeWindow);