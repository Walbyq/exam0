import React, {useEffect} from "react";
import CSS from "./Profile.Module.css";
import { NavLink } from "react-router-dom";

const ProfileComponent = (props) => {
  const course = React.createRef();
  const { nickname } = props;
  const ChangeCourse = async function () {
    await fetch(`http://shporhub/api/index.php/?method=updateProfile`);
    UpdateData();
  };
  const Response = async function () {
    const answer = await fetch(
      `http://shporhub/api/index.php/?method=getProfile`
    );
    const result = await answer.json();
    return result;
  };
  const UpdateData = async function () {
    let response = await Response();
    if (response.data) {
      course.current.value = response.data.course;
    }
  };
  useEffect(() => {
    UpdateData();
  });
  return (
    <div className={CSS.wrapper}>
      <label className={CSS.title}>Логин: {nickname}</label>
      <label className={CSS.title}>
        Пароль: <button className={CSS.standartButton}>Сменить пароль</button>
      </label>
      <label className={CSS.title}>
        Курс
        <select
          onChange={ChangeCourse}
          ref={course}
          className={CSS.standartSelect}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <label className={CSS.title}>
        Направление
        <select className={CSS.standartSelect}>
          <option value="ivt">ИиВТ</option>
          <option value="is">ИС</option>
          <option value="pi">ПИ</option>
        </select>
      </label>
      <button className={CSS.standartButton}>Сохранить изменения</button>
    </div>
  );
};

export default ProfileComponent;
