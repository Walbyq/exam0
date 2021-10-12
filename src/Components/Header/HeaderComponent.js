import React from "react";
import HeaderCSS from "./Header.Module.css";
import { NavLink, withRouter, useHistory } from "react-router-dom";

const HeaderComponent = (props) => {
  const { isLogged, logout, nickname } = props;
  const history = useHistory();
  const LogOut = () => {
    logout();
    history.push("/");
  };
  const LogoClick = () => {
    if (isLogged) {
      history.push("/main-menu");
    } else {
      history.push("/");
    }
  };
  return (
    <header>
      <div onClick={LogoClick} className={HeaderCSS.logo}>
        Shpor<span>Hub</span>
      </div>
      {isLogged ? (
        <div>
          <label className={HeaderCSS.nickname}>{nickname}</label>
          <button
            onClick={LogOut}
            className={HeaderCSS.standartButton}
          >
            Выйти
          </button>
          <NavLink to="/profile" className={HeaderCSS.standartButton}>
            Профиль
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/login" className={HeaderCSS.standartButton}>
            Войти
          </NavLink>
          <NavLink to="/registration" className={HeaderCSS.standartButton}>
            Зарегистрироваться
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default withRouter(HeaderComponent);
