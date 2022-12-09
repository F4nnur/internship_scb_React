import React, { useState } from "react";
import s from "./style.module.scss";
import Timer from "./components/timer/Timer";
import DailyTimer from "./components/timer/DailyTimer";
import WeeklyTime from "./components/timer/WeeklyTime";
import Nav from "./components/nav/Nav";
import Employee from "./components/employee/Employee";
// import Notifications from "./components/nav/Notifications";
import DeviceRental from "../../components/device-rental/DeviceRental";
import todayDate from "../../components/todayDate/todayDate";
import TodayDate from "../../components/todayDate/todayDate";
import EditTimeWindow from "../../components/UI/Main/editTimeWindow";
import {modal} from "react-ts-modal";
import MyAwesomeModel from "../../components/UI/Main/model";

import PivotTable from "../../components/pivotTable/PivotTable";


const MainPage: React.FC = () => {
  const [workDay, setWorkDay] = useState<number>(0);
  const [totalWeekTime, setTotalWeekTime] = useState<number>(0);

  return (
    <div className={s.mainPage}>
      <div className={s.header}>
        <div className={s.title}>Monitor</div>
      </div>
      <Nav /><MyAwesomeModel/>

      <div className={s.container}>
        <button onClick={() => modal.show("awesome-modal")} style={{width:20}}> </button>
        <div className={s.inner}>
          <div>
            <h1 className={s.today}>Сегодня</h1>
            <TodayDate />
          </div>
          <div className={s.timers}>
            <div />
            <Timer setWorkDay={setWorkDay} />
          </div>
        </div>
        <div className={s.inner}>
          <div className={s.half}>
            <PivotTable />
            <Employee />
          </div>
          <div className={s.half}>
            <div className={s.timers}>
              <DailyTimer
                workDay={workDay}
                setTotalWeekTime={setTotalWeekTime}
              />
              <WeeklyTime
                setTotalWeekTime={setTotalWeekTime}
                totalWeekTime={totalWeekTime}
              />
            </div>
            <DeviceRental />
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(MainPage);
