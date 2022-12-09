import s from "../../../pages/Login/style.module.scss";
import React, {useState} from "react";
import InputField from "../inputField";
import ICONS from "../../../constants/icons";
import {Form} from "react-final-form";
import ConfirmButton from "../confirmButton";
import {fetchLogin} from "../../../store/actions/login.actions";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store";


const AuthWindow = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const dispatch = useDispatch<AppDispatch>()
    // let onSubmit: (value: (string | number)) => any;

    const onSubmit = (value: { name: string, password: string}) => {
        dispatch(fetchLogin({username: value.name, password: value.password}))
    }


    return (
        <div id={s.temp}>
        <div className={s.authWindow}>
            <div className={s.loginHeaderWrapper}>
                <h1 id={s.loginTitle}>Добро пожаловать в SCB Monitor!</h1>
            </div>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (

                    <div className={s.inputWrap}>

                        <form onSubmit={handleSubmit}>
                            <InputField
                                id={s.firstInput}
                                type={"text"}
                                placeholder={"Логин"}
                                name={"name"}
                                component={"input"}
                                isRevealPwd
                                setIsRevealPwd
                                onInputChange
                            />

                            <InputField
                                id={s.secondInput}
                                type={isRevealPwd ? "text" : "password"}
                                placeholder={"Пароль"}
                                name={"password"}
                                component={"input"}
                                isRevealPwd={isRevealPwd}
                                setIsRevealPwd={setIsRevealPwd}
                                onInputChange/>

                            <ConfirmButton loginButtonText={"Войти"}/>

                        </form>

                        <div className={s.hidePassWrap}>
                                <img
                                    title={isRevealPwd ? "hide" : "show"}
                                    src={isRevealPwd ? ICONS.eye : ICONS.hide} alt={"eye"}
                                    onClick={() => setIsRevealPwd((prevState: boolean) => !prevState)}
                                />

                        </div>

                    </div>
                )}
            />
        </div>
        </div>

    );
};
export default React.memo(AuthWindow);