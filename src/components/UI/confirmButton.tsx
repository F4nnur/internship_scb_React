import React from 'react';
import s from "../../pages/Login/style.module.scss";

interface props {
    loginButtonText?: string;

}

const ConfirmButton: React.FC<props> = ({loginButtonText}) => {
    return (
        <div>
            <button className={s.loginButton}>
                <p id={s.loginButtonText}>{loginButtonText}</p>
            </button>
        </div>
    );
};

export default React.memo(ConfirmButton);