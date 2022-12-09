import React from 'react';
import { PivotTableData } from './types';
import s from './PivotTable.module.scss'
import ICONS from "../../constants/icons";
const PivotTableItem = ({
                  data,
                  btnOnClick,
                  isOpen,
              }: {
    data: PivotTableData;
    btnOnClick: () => void;
    isOpen: boolean;
}) => {
    return (
        <React.Fragment>
            <div className={s.titleCell} key={data.title} onClick={() => btnOnClick()}>
                <h2 className={s.workinfo}>
                    <i className={s.arrow}>
                        {" "}
                        <img
                            className={` ${
                                isOpen ? `${" "}` : `${s.arrowActive}`
                            }`}
                            src={ICONS.arrow}
                            alt="arrow">
                        </img>
                    </i>
                    {data.title}   |  {data.hoursTimer}     |   {data.hoursTurnstile}
                </h2>
            </div>
            <div className={`${isOpen ? `${s.show}` : `${s.hide}`}`}>
                <div className={s.content_container}>
                <div className={s.content_1}>
                    <div>{data.date1} | {data.weekDay1}</div>
                    <div>{data.timeOnTimer1}</div>
                    <div>{data.timeTurnstile1}</div>
                    <div><img src={ICONS.pencil} alt="pencil"/></div>
                </div>
                <div className={s.content_2}>
                    <div>{data.date2} | {data.weekDay2}</div>
                    <div>{data.timeOnTimer2}</div>
                    <div>{data.timeTurnstile2}</div>
                    <div><img src={ICONS.pencil} alt="pencil"/></div>
                </div>
                    <div className={s.content_1}>
                        <div>{data.date3} | {data.weekDay3}</div>
                        <div>{data.timeOnTimer3}</div>
                        <div>{data.timeTurnstile3}</div>
                        <div><img src={ICONS.pencil} alt="pencil"/></div>
                    </div>
                    <div className={s.content_2}>
                        <div>{data.date4} | {data.weekDay4}</div>
                        <div>{data.timeOnTimer4}</div>
                        <div>{data.timeTurnstile4}</div>
                        <div><img src={ICONS.pencil} alt="pencil"/></div>
                    </div>
                    <div className={s.content_1}>
                        <div>{data.date5} | {data.weekDay5}</div>
                        <div>{data.timeOnTimer5}</div>
                        <div>{data.timeTurnstile5}</div>
                        <div><img src={ICONS.pencil} alt="pencil"/></div>
                    </div>
                    <div className={s.content_2}>
                        <div>{data.date6} | {data.weekDay6}</div>
                        <div>{data.timeOnTimer6}</div>
                        <div>{data.timeTurnstile6}</div>
                        <div><img src={ICONS.pencil} alt="pencil"/></div>
                    </div>
                    <div className={s.content_1}>
                        <div>{data.date7} | {data.weekDay7}</div>
                        <div>{data.timeOnTimer7}</div>
                        <div>{data.timeTurnstile7}</div>
                        <div><img src={ICONS.pencil} alt="pencil"/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PivotTableItem;