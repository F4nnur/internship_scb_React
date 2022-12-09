import React from "react";
import s from "./style.module.scss";
import AuthWindow from "../../components/UI/Login/authWindow";
import Images from "../../components/UI/Login/images";
import {Navigate} from "react-router-dom"
import { ROUTES } from "../../constants/navigation";
import { useSelector } from "react-redux";
import { selectLoginState } from "../../store/selectors/login.selectors";
import { STORAGE_KEYS } from "../../utils/storage";


const LoginPage = () => {

    const accesss = useSelector(selectLoginState).access

    console.log('access', accesss)
    const isAuth = accesss && accesss !== " " as STORAGE_KEYS.ACCESS_TOKEN

    return (
        <div className={s.loginPage}>
            <Images/>

            <AuthWindow/>
            {isAuth && <Navigate to={ROUTES.MAIN}/>}
        </div>
    );
};
export default React.memo(LoginPage);




