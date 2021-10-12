import React from "react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import CSS from "./Register.Module.css";

const RegisterComponent = (props) => {
  const login = React.createRef();
  const password = React.createRef();
  const history = useHistory();

  const Response = async function () {
    const md5 = require("md5");
    const token = md5(`${login.current.value}${password.current.value}`);
    const answer = await fetch(
      `http://shporhub/api/index.php/?method=registration&hash=${token}`
    );
    const result = await answer.json();
    return result;
  };

  const Register = async function () {
    const response = await Response();
    if (response.data.access) {
      props.history.push("/login");
    } else {
      login.current.classList.add(CSS.wrongInput);
      password.current.classList.add(CSS.wrongInput);
    }
  };

  const ChangeInput = (input) => {
    login.current.classList.remove(CSS.wrongInput);
    password.current.classList.remove(CSS.wrongInput);
    if (input.current.value !== "") {
      if (input.current.value.length >= 6) {
        input.current.classList.add(CSS.activeInput);
      } else {
        input.current.classList.add(CSS.wrongInput);
      }
    } else {
      input.current.classList.remove(CSS.activeInput);
    }
  };
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.registration}>
        <label>Регистрация</label>
        <input
          ref={login}
          onChange={() => ChangeInput(login)}
          className={CSS.input}
          placeholder="Логин(> 6 символов)"
        />
        <input
          ref={password}
          onChange={() => ChangeInput(password)}
          className={CSS.input}
          placeholder="Пароль(> 6 символов)"
        />
        <button className={CSS.standartButton} onClick={Register}>
          Зарегистрироваться
        </button>
        <NavLink to="">Назад в меню</NavLink>
      </div>
    </div>
  );
};

export default withRouter(RegisterComponent);
