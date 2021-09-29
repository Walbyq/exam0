import React from 'react';
import TestImg from '../../Images/test.jpg';
import PostCSS from './Post.Module.css';
import { NavLink } from 'react-router-dom';

class Post extends React.Component {
  render(){
    return (
        <div className={PostCSS.post}>
            <label>Время проведения: 13.09.2019</label>
            <label>Тип: контрольная</label>
            <label className={PostCSS.test_description}>Тут мы указываем абсолютно все подробности работы, кто проводил, какая была тема и так далее, что бы пользователь понял, то это или нет</label>
            <div className={PostCSS.image}>
              <img src={TestImg} alt="post_img"></img>
            </div>
            <NavLink to='/sphora' className={PostCSS.standartButton}>Посмотреть ответы</NavLink>
        </div>
    );
  }
}

export default Post;