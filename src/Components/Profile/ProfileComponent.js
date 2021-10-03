import React from 'react';
import CSS from './Profile.Module.css';
import { NavLink } from 'react-router-dom';

class ProfileComponent extends React.Component {
  constructor(props){
    super(props);
    this.course = React.createRef();
  }
  async changeCourse(){
    await fetch(`http://shporhub/api/index.php/?method=updateProfile`);
    this.updateData();
  }
  async response(){
    const answer = await fetch(`http://shporhub/api/index.php/?method=getProfile`);
    const result = await answer.json();
    return result;
  }
  async updateData(){
    let response = await this.response();
    if(response.data){
      this.course.current.value = response.data.course;
    }
  }
  componentDidMount(){
    this.updateData();
  }
  render(){
    return (
        <div className={CSS.wrapper}>
            <label className={CSS.title}>Логин: {this.props.nickname}</label>
            <label className={CSS.title}>Пароль: <button className={CSS.standartButton}>Сменить пароль</button></label>
            <label className={CSS.title}>
              Курс
              <select onChange={() => this.changeCourse()} ref={this.course} className={CSS.standartSelect}>
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option  value="3">3</option>
                <option  value="4">4</option>
              </select>
            </label>
            <label className={CSS.title}>
              Направление
              <select className={CSS.standartSelect}>
                <option  value="ivt">ИиВТ</option>
                <option  value="is">ИС</option>
                <option  value="pi">ПИ</option>
              </select>
            </label>
            <button className={CSS.standartButton}>Сохранить изменения</button>
            <NavLink to='/main-menu/mat_analiz' className={CSS.standartButton}>Назад в меню</NavLink>
        </div>
    );
  }
}

export default ProfileComponent;