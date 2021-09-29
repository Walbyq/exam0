import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CSS from './Register.Module.css';

class RegisterComponent extends React.Component {
  constructor(props){
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
  }

  async response(){
    let md5 = require('md5');
    let token = md5(`${this.login.current.value}${this.password.current.value}`);
    const answer = await fetch(`http://shporhub/api/index.php/?method=login&hash=${token}`);
    const result = await answer.json();
    return result;
  }

  async Register(){
    let response = await this.response();
    if(false){
      //внести пользователя в БД
      this.props.history.push('/login');
    } else {
      this.login.current.classList.add(CSS.wrongInput);
      this.password.current.classList.add(CSS.wrongInput);
    }
  }

  ChangeInput(input){
    this.login.current.classList.remove(CSS.wrongInput);
    this.password.current.classList.remove(CSS.wrongInput);
    if(input.current.value !== ''){
      if(input.current.value.length >= 6){
        input.current.classList.add(CSS.activeInput);
      } else {
        input.current.classList.add(CSS.wrongInput);
      }
    } else {
      input.current.classList.remove(CSS.activeInput);
    }
  }
  render(){
    return (
        <div className={CSS.wrapper}>
            <div className={CSS.registration}>
                <label>Регистрация</label>
                <input ref={this.login} onChange={() => this.ChangeInput(this.login)} className={CSS.input} placeholder="Логин(> 6 символов)"/>
                <input ref={this.password} onChange={() => this.ChangeInput(this.password)} className={CSS.input} placeholder="Пароль(> 6 символов)"/>
                <button className={CSS.standartButton} onClick={() => this.Register()}>Зарегистрироваться</button>
                <NavLink to=''>Назад в меню</NavLink>
            </div>
        </div>
    );
  }
}

export default withRouter(RegisterComponent);