import React from "react";
import CSS from "./Shpor.Module.css";
import { NavLink } from "react-router-dom";
import TestImg from "../../Images/test.jpg";

const ShporComponent = (props) => {
  const {isLogged} = props;
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.page}>
        <div className={CSS.answers}>
          <label className={CSS.title}>Вариант 1</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Ответ на вариант 1</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Вариант 2</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Ответ на вариант 2</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Вариант 3</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Ответ на вариант 3</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Вариант 4</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
          <label className={CSS.title}>Ответ на вариант 4</label>
          <div className={CSS.answer}>
            <img src={TestImg} alt="answer"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShporComponent;
