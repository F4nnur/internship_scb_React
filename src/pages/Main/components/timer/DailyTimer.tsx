import React, { useEffect, useState } from "react";
import x from "./style.module.scss";
import TimerForm from "./TimerForm";
import ICONS from "../../../../constants/icons";

interface Props {
  workDay: number;
  setTotalWeekTime: React.Dispatch<React.SetStateAction<number>>;
}

const DailyTimer: React.FC<Props> = ({ workDay, setTotalWeekTime }: Props) => {
  const [totalDayTime, setTotalDayTime] = useState<number>(0);
  let today: Date;
  let todayHour: number;
  let todayMinute: number;
  let totalMiliSecond: number;

  today = new Date();
  todayHour = today.getHours();
  todayMinute = today.getMinutes();
  totalMiliSecond = Math.floor((todayHour * 3600 + todayMinute * 60) * 1000);

  useEffect(() => {
    setTotalDayTime((totalDayTime) => totalDayTime + workDay);
  }, [setTotalDayTime, workDay, totalDayTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTotalWeekTime((totalWeekTime) => totalWeekTime + totalDayTime);
      setTotalDayTime(0);
    }, 86400000 - totalMiliSecond);

    return () => clearTimeout(timer);
  });

  return (
    <div className={x.containerday}>
      <div className={x.timerday}>
        <TimerForm time={totalDayTime} />
      </div>
      <div className={x.textday}>Работал за сегодня</div>
      <i className={x.iconday}>
        <img src={ICONS.timer} alt="timer"></img>
      </i>
    </div>
  );
};

export default DailyTimer;
