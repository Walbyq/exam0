import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CSS from './Login.Module.css';

class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
  }
  async response(){
    const md5 = require('md5');
    const rand = Math.floor(Math.random()*1000000);
    const token = md5(md5(`${this.login.current.value}${this.password.current.value}`)+rand);
    const answer = await fetch(`http://shporhub/api/index.php/?method=login&hash=${token}&rand=${rand}`);
    const result = await answer.json();
    return result;
  }

  async Login(){
    this.login.current.classList.remove(CSS.wrongInput);
    this.password.current.classList.remove(CSS.wrongInput);
    let response = await this.response();
    if(response.result === 'ok'){
      this.props.log(this.login.current.value);
      this.props.history.push('/main-menu/mat_analiz');
    } else {
      this.login.current.classList.add(CSS.wrongInput);
      this.password.current.classList.add(CSS.wrongInput);
    }
  }
  ChangeInput(input){
    this.login.current.classList.remove(CSS.wrongInput);
    this.password.current.classList.remove(CSS.wrongInput);
    if(input.current.value !== ''){
      input.current.classList.add(CSS.activeInput);
    } else {
      input.current.classList.remove(CSS.activeInput);
    }
  }
  render(){
    return (
        <div className={CSS.wrapper}>
            <div className={CSS.login}>
                <label>Авторизация</label>
                <input ref={this.login} onChange={() => this.ChangeInput(this.login)} className={CSS.input} placeholder="Почта"/>
                <input ref={this.password} onChange={() => this.ChangeInput(this.password)} className={CSS.input} placeholder="Пароль"/>
                <button className={CSS.btn} onClick={() => this.Login()}>Войти</button>
                <NavLink className={CSS.btn} to=''>Назад в меню</NavLink>
            </div>
        </div>
    );
  }
}

export default withRouter(LoginComponent);