import React from 'react';
import Post from '../Post/Post';
import CSS from './MainPageLog.Module.css';
import { NavLink } from 'react-router-dom';

class MainPageLogComponent extends React.Component {
  constructor(props){
    super(props);
    this.subject = 'Мат.анализ';
    this.subjects = [['Мат.анализ', 'mat_analiz'], ['Алгебра и геометрия','aig'], ['Основы прогр-я','osnovi_programmirovaniya'], ['Дискретка','diskretka']];
    this.arr = [1,2,3,4,5,6,7,8,9];
    this.currentSubject = React.createRef();
    this.navMenu = React.createRef();
    this.getLessons();
  }
  ChangeSubject(link){
    this.currentSubject.current.innerHTML = 'Шпоры по предмету: ' + link.target.innerHTML;
  }
  HideOrOpenMenu(){
    if(this.navMenu.current.classList.contains(CSS.hide_menu)){
      this.navMenu.current.classList.remove(CSS.hide_menu);
    } else {
      this.navMenu.current.classList.add(CSS.hide_menu);
    }
  }
  async response(){
    const answer = await fetch(`http://shporhub/api/index.php/?method=getLessons`);
    const result = await answer.json();
    return result;
  }
  async getLessons(){
    let response = await this.response();
    this.subject = [];
    response.data.forEach(element => {
      this.subject.push([element.name, element.link]);
    });
  }
  render(){
    return (
        <div className={CSS.page_horizontal}>
            <div className={CSS.content}>
              <label ref={this.currentSubject} className={CSS.subject}>Шпоры по предмету: {this.subject}</label>
              {this.arr.map(() => (
                <Post/>
              ))}
            </div>
            <div ref={this.navMenu} className={CSS.menu_wrapper}>
              <button onClick={() => this.HideOrOpenMenu()} className={CSS.turnOff}></button>
              <div className={CSS.nav_menu}>
                <label>Предметы</label>
                {
                  console.log(this.subjects) , 
                  this.subjects.map((value, index) => (
                    <NavLink onClick={this.ChangeSubject.bind(this)} to={`/main-menu/${value[1]}`} key={index} className={CSS.standartButton} activeClassName={CSS.choosenButton}>{value[0]}</NavLink>
                  ))
                }
                <label>Остальное</label>       
                <NavLink to='/add-shpor' className={CSS.standartButton}>Опубликовать шпору</NavLink> 
              </div>
            </div> 
        </div>
    );
  }
}

export default MainPageLogComponent;