import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import ICONS from "../../../../constants/icons";
import Notifications from "./Notifications";

let time: Date;
let day: number;
let year: number;
let date: number;

time = new Date();
day = time.getDate();
date = time.getDate();
year = time.getFullYear();

let notifications = [
  {
    title: "Frontend - разработчики",
    content: "Happy Birthday",
    time: `${day}/${date} ${year}`,
  },
  {
    title: "Frontend - разработчики",
    content: "Happy Birthday",
    time: `${day}/${date} ${year}`,
  },
  {
    title: "Frontend - разработчики",
    content: "Happy Birthday",
    time: `${day}/${date} ${year}`,
  },
  {
    title: "Frontend - разработчики",
    content: "Happy Birthday",
    time: `${day}/${date} ${year}`,
  },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSignout, setOpenSignout] = useState<boolean>(open);

  const ref = useRef<any>(null);
  const refSignout = useRef<any>(null);

  useEffect(() => {
    const onBodyClick = (e: any) => {
      if (
        ref.current.contains(e.target) ||
        refSignout.current.contains(e.target)
      ) {
        return;
      }
      setOpen(false);
      setOpenSignout(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <React.Fragment>
      <div ref={ref} className={s.notification} onClick={() => setOpen(!open)}>
        <span className={s.dotCounter}>
          <div className={s.counter}>{notifications.length}</div>
        </span>
        <img className={s.icBell} src={ICONS.ic_bell} alt="Bell" />
        <div
          className={`${
            open
              ? `${s.notificationContainerShow}`
              : `${s.notificationContainerHide}`
          }`}
        >
          <div className={s.notificationPolygon}></div>
          <div className={s.notificationUnion}>
            {" "}
            {notifications.map((item, index) => (
              <Notifications key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        ref={refSignout}
        className={s.profile}
        onClick={() => setOpenSignout(!openSignout)}
      >
        <i>
          <img
            className={s.profilepic}
            src={ICONS.profilePicture}
            alt="ProfilePictue"
          ></img>
        </i>

        <div className={s.profilecarrer}>UX/UI Designer</div>
        <div className={s.profiletext}>Татьяна Сидорова</div>
        <div
          className={`${
            openSignout
              ? `${s.signoutContainerShow}`
              : `${s.signoutContainerHide}`
          }`}
        >
          <div className={s.signoutPolygon}></div>
          <div className={s.signoutCard}>
            <img src={ICONS.SignOut} alt="SingOut" className={s.signoutIcon} />
            <div className={s.signoutText}>Выход</div>
          </div>
        </div>
      </div>
      <div className={s.maintitle}>Hi</div>
    </React.Fragment>
  );
};

export default Header;
