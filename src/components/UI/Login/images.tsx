import s from "../../../pages/Login/style.module.scss";
import IMAGES from "../../../constants/images";
import React from "react";

const Images = () => {
    return(
        <><img className={s.imgLeft} src={IMAGES.leftBack} alt={"leftIMG"}/>
            <img className={s.imgRight} src={IMAGES.rightBack}  alt={"rightIMG"}/></>
    )
}
export default React.memo(Images);