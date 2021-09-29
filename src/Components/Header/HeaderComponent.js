import React from 'react';
import HeaderCSS from './Header.Module.css';
import { NavLink,withRouter } from 'react-router-dom';

class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
  }
  LogOut(){
    this.props.logout();
    this.props.history.push('/');
  }
  render(){
    return (
        <header>
            <div className={HeaderCSS.logo}>Shpor<span>Hub</span></div>
            {
            (this.props.isLogged) 
              ? 
              <div>
                <label className={HeaderCSS.nickname}>{this.props.nickname}</label>
                <button onClick={() => this.LogOut()} className={HeaderCSS.standartButton}>Выйти</button>
                <NavLink to='/profile' className={HeaderCSS.standartButton}>Профиль</NavLink>
              </div>
              :
              <div>
                  <NavLink to='/login' className={HeaderCSS.standartButton}>Войти</NavLink>
                  <NavLink to='/registration' className={HeaderCSS.standartButton}>Зарегистрироваться</NavLink>
              </div>
            }
            
        </header>
    );
  }
}

export default withRouter(HeaderComponent);