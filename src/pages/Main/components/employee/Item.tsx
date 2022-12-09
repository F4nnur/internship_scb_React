import React from "react";
import s from "./style.module.scss";
import { Carrers } from "./types";
import ICONS from "../../../../constants/icons";

const Item = ({
  data,
  btnOnClick,
  isOpen,
}: {
  data: Carrers;
  btnOnClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <React.Fragment>
      <div className={s.work} key={data.title}>
        <h2 className={s.workinfo} onClick={() => btnOnClick()}>
          <i className={s.dropdownicon1}>
            {" "}
            <img
              className={` ${
                isOpen ? `${s.dropdownactive}` : `${s.dropdownicon}`
              }`}
              src={ICONS.dropdown}
              alt={data.title}
            ></img>
          </i>
          {data.title}
        </h2>
      </div>
      <div className={`${isOpen ? `${s.show}` : `${s.hide}`}`}>
        <div className={s.info}>
          <div className={s.name}>{data.name}</div>
          Женский банк
        </div>
        <div className={s.workcontent}></div>
        <div className={s.phonetitle}>
          Номер телефона
          <div className={s.phone}>{data.phone}</div>
        </div>
        <div className={s.birthdaytitle}>
          Дата рождения
          <div className={s.birthday}>{data.birthDay}</div>
        </div>
        <div className={s.skillstitle}>
          Навыки
          <div className={s.skills}>{data.skills}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
