import React, { useEffect, useState } from "react";
import x from "./style.module.scss";
import { VscDebugRestart } from "react-icons/vsc";
import TimerForm from "./TimerForm";
import ICONS from "../../../../constants/icons";

interface Props {
  setWorkDay: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<Props> = ({ setWorkDay }: Props) => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Save time, day, date | save timer, daily Time, Week Time
  // redux create, Delete, Edit

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => setTime((seconds) => seconds + 1), 1000);
    } else if (!isRunning) {
      setWorkDay(time);
      clearInterval(interval);
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [isRunning, setWorkDay, time]);

  return (
    <div className={x.containertimer}>
      <div className={x.timer}>
        <TimerForm time={time} />
      </div>
      <div
        className={x.buttons}
        onClick={() => (!isRunning ? setIsRunning(true) : setIsRunning(false))}
      >
        <i className={x.iconstart}>
          {isRunning ? (
            <VscDebugRestart />
          ) : (
            <img src={ICONS.play} alt="play"></img>
          )}
        </i>
        <div className={x.textstart}>{isRunning ? " RESET" : " START"}</div>
      </div>
    </div>
  );
};

export default Timer;
