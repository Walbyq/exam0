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
  }
  ChangeSubject(link){
    this.currentSubject.current.innerHTML = 'Шпоры по предмету: ' + link.target.innerHTML;
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
            <div className={CSS.nav_menu}>
              <label>Предметы</label>
              {
                this.subjects.map((value, index) => (
                  <NavLink onClick={this.ChangeSubject.bind(this)} to={`/main-menu/${value[1]}`} key={index} className={CSS.standartButton} activeClassName={CSS.choosenButton}>{value[0]}</NavLink>
                ))
              }
              <label>Остальное</label>       
              <NavLink to='/add-shpor' className={CSS.standartButton}>Опубликовать шпору</NavLink> 
            </div>
        </div>
    );
  }
}

export default MainPageLogComponent;