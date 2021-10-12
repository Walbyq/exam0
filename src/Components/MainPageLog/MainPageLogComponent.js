import React from "react";
import Post from "../Post/Post";
import CSS from "./MainPageLog.Module.css";
import { NavLink } from "react-router-dom";

const MainPageLogComponent = (props) => {
  const {getLessons} = props;
  let lessons = [];
  getLessons().then(value => {
    lessons = value;
  });
  console.log(lessons);
  
  let subject = "Мат.анализ";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const currentSubject = React.createRef();
  const navMenu = React.createRef();
  const ChangeSubject = (link) => {
    currentSubject.current.innerHTML =
      "Шпоры по предмету: " + link.target.innerHTML;
  };

  const HideOrOpenMenu = () => {
    if (navMenu.current.classList.contains(CSS.hide_menu)) {
      navMenu.current.classList.remove(CSS.hide_menu);
    } else {
      navMenu.current.classList.add(CSS.hide_menu);
    }
  };
  return (
    <div className={CSS.page_horizontal}>
      <div className={CSS.content}>
        <label ref={currentSubject} className={CSS.subject}>
          Шпоры по предмету: {subject}
        </label>
        {
          arr.map((a, index) => (
            <Post index={index} />
          ))
        }
      </div>
      <div ref={navMenu} className={CSS.menu_wrapper}>
        <button
          onClick={HideOrOpenMenu}
          className={CSS.turnOff}
        ></button>
        <div className={CSS.nav_menu}>
          <label>Предметы</label>
          {
            lessons.map((element, index) => (
              <NavLink
                onClick={ChangeSubject}
                to={`/main-menu/${element.link}`}
                key={index}
                className={CSS.standartButton}
                activeClassName={CSS.choosenButton}
              >
                {element.name}
              </NavLink>
            ))
          }
          <label>Остальное</label>
          <NavLink to="/add-shpor" className={CSS.standartButton}>
            Опубликовать шпору
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPageLogComponent;
