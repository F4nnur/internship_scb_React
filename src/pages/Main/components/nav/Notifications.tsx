import React from "react";
import { Notification } from "./types";
import s from "./style.module.scss";

interface Props {
  data: Notification;
}

const Notifications: React.FC<Props> = ({ data }: Props) => {
  return (
    <React.Fragment>
      <div key={data.title} className={s.notificationContent}>
        <div className={s.notificationTimeFrame}>
          <div className={s.notificationTime}>{data.time}</div>
        </div>
        <div className={s.notificationTextFrame}>
          <div className={s.notificationTitle}>{data.title}</div>
          <div className={s.notificationText}>{data.content}</div>
        </div>
      </div>

      <div className={s.notificationContainerShow}></div>
    </React.Fragment>
  );
};

export default Notifications;
