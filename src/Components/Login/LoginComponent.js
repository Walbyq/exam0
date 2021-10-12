import React from "react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import CSS from "./Login.Module.css";

const LoginComponent = (props) => {
  const login = React.createRef();
  const password = React.createRef();
  const history = useHistory();
  const {log} = props;

  const Response = async function () {
    const md5 = require("md5");
    const rand = Math.floor(Math.random() * 1000000);
    const token = md5(
      md5(`${login.current.value}${password.current.value}`) + rand
    );
    const answer = await fetch(
      `http://shporhub/api/index.php/?method=login&hash=${token}&rand=${rand}`
    );
    const result = await answer.json();
    return result;
  };

  const Login = async function () {
    login.current.classList.remove(CSS.wrongInput);
    password.current.classList.remove(CSS.wrongInput);
    let response = await Response();
    if (response.result === "ok") {
      log(login.current.value);
      history.push("/main-menu/mat_analiz");
    } else {
      login.current.classList.add(CSS.wrongInput);
      password.current.classList.add(CSS.wrongInput);
    }
  };
  const ChangeInput = (input) => {
    login.current.classList.remove(CSS.wrongInput);
    password.current.classList.remove(CSS.wrongInput);
    if (input.current.value !== "") {
      input.current.classList.add(CSS.activeInput);
    } else {
      input.current.classList.remove(CSS.activeInput);
    }
  };
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.login}>
        <label>Авторизация</label>
        <input
          ref={login}
          onChange={() => ChangeInput(login)}
          className={CSS.input}
          placeholder="Почта"
        />
        <input
          ref={password}
          onChange={() => ChangeInput(password)}
          className={CSS.input}
          placeholder="Пароль"
        />
        <button className={CSS.btn} onClick={() => Login()}>
          Войти
        </button>
        <NavLink className={CSS.btn} to="">
          Назад в меню
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(LoginComponent);
