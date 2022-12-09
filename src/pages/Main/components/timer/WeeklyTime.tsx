import React, { useEffect } from "react";
import x from "./style.module.scss";
import TimerForm from "./TimerForm";
import ICONS from "../../../../constants/icons";

interface Props {
  setTotalWeekTime: React.Dispatch<React.SetStateAction<number>>;
  totalWeekTime: number;
}

const WeeklyTime: React.FC<Props> = ({
  setTotalWeekTime,
  totalWeekTime,
}: Props) => {
  let week: Date;
  let monday: number;

  week = new Date();
  monday = week.getDay();

  useEffect(() => {
    if (monday === 1) {
      setTotalWeekTime(0);
    }
  });

  return (
    <div className={x.containerweek}>
      <div className={x.timerweek}>
        <TimerForm time={totalWeekTime} />
      </div>
      <div className={x.textweek}>Работал на этой неделе</div>
      <i className={x.iconweek}>
        <img src={ICONS.timer} alt="timer"></img>
      </i>
    </div>
  );
};

export default WeeklyTime;
