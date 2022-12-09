import React from "react";
import s from "./style.module.scss";

import Header from "./Header";

const Nav: React.FC = () => {
  return (
    <div className={s.nav}>
      <Header />
    </div>
  );
};

export default Nav;
