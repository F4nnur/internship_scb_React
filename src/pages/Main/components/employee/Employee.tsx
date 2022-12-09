import React, { useState } from "react";
import Item from "./Item";
import s from "./style.module.scss";

let items = [
  {
    title: "Frontend - разработчики",
    name: "Татьяна Смирнова",
    phone: "7 (900) 600-04-81",
    birthDay: "28.06.2000",
    skills: "Figma, Sketch, Photoshop, Illustrator",
  },
  {
    title: "Frontend - разработчики",
    name: "Татьяна Смирнова",
    phone: "7 (900) 600-04-81",
    birthDay: "28.06.2000",
    skills: "Figma, Sketch, Photoshop, Illustrator",
  },
  {
    title: "Frontend - разработчики",
    name: "Татьяна Смирнова",
    phone: "7 (900) 600-04-81",
    birthDay: "28.06.2000",
    skills: "Figma, Sketch, Photoshop, Illustrator",
  },
  {
    title: "Frontend - разработчики",
    name: "Татьяна Смирнова",
    phone: "7 (900) 600-04-81",
    birthDay: "28.06.2000",
    skills: "Figma, Sketch, Photoshop, Illustrator",
  },
];

const Employee = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const btnOnClick = (index: number) => {
    setCurrentIndex((currentValue) => (currentValue !== index ? index : -1));
  };

  return (
    <div className={s.container}>
      <div className={s.title}>Сотрудники</div>
      {items.map((item, index) => (
        <Item
          key={index}
          data={item}
          btnOnClick={() => btnOnClick(index)}
          isOpen={index === currentIndex}
        />
      ))}
    </div>
  );
};

export default Employee;
