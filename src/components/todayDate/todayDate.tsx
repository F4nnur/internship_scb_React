import React from "react";
import s from "./todayDate.module.scss"

const todayDate = () => {

    const days:string[] = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const myDate:Date = new Date();
    const fullDate:string = days[myDate.getDay()] + " " + myDate.getDate() + ", " + myDate.getFullYear();

    return(
            <h1 className={s.todayDate}>{fullDate}</h1>
    )
}

export default React.memo(todayDate);