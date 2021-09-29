import React from 'react';
import CSS from './Profile.Module.css';
import { NavLink } from 'react-router-dom';

class ProfileComponent extends React.Component {
  constructor(props){
    super(props);
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
  async getData(){
    return await this.response();
  }
  updateData(){
    let response = this.getData();
    if(response){
      let setCourse = this.props.setCourse();
      let setDirection = this.props.setDirection();
      setCourse(response.data.course);
      setDirection(response.data.direction);
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
                <option selected={(this.props.course === 1) ? true : false} value="1">1</option>
                <option selected={(this.props.course === 2) ? true : false} value="2">2</option>
                <option selected={(this.props.course === 3) ? true : false} value="3">3</option>
                <option selected={(this.props.course === 4) ? true : false} value="4">4</option>
              </select>
            </label>
            <label className={CSS.title}>
              Направление
              <select className={CSS.standartSelect}>
                <option selected={(this.props.direction === 'ivt') ? true : false} value="ivt">ИиВТ</option>
                <option selected={(this.props.direction === 'is') ? true : false} value="is">ИС</option>
                <option selected={(this.props.direction === 'pi') ? true : false} value="pi">ПИ</option>
              </select>
            </label>
            <button className={CSS.standartButton}>Сохранить изменения</button>
            <NavLink to='/main-menu/mat_analiz' className={CSS.standartButton}>Назад в меню</NavLink>
        </div>
    );
  }
}

export default ProfileComponent;