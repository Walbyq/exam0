import HeaderComponent from './Components/Header/HeaderComponent';
import MainPageUnLogComponent from './Components/MainPageUnLogComponent';
import MainPageLogComponent from './Components/MainPageLog/MainPageLogComponent';
import LoginComponent from './Components/Login/LoginComponent';
import RegisterComponent from './Components/Registration/RegisterComponent';
import ShporComponent from './Components/Shpora/ShporComponent';
import AddShporComponent from './Components/AddShpor/AddShporComponent';
import ProfileComponent from './Components/Profile/ProfileComponent';
import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    console.log(window.localStorage.getItem('logged'));
    this.state = {
      logged: window.localStorage.getItem('logged'),
      nickname: window.localStorage.getItem('nickname'),
      lessons: []
    }
    this.getLessons();
    console.log(window.localStorage.getItem('logged'));
  }

  async response(){
    const answer = await fetch(`http://shporhub/api/index.php/?method=getLessons`);
    const result = await answer.json();
    return result;
  }
  async getLessons(){
    let response = await this.response();
    this.setState({lessons: response.data});
  }

  SetDirection(current){
    this.setState({direction: current});
  }

  SetCourse(current){
    this.setState({course: current});
  }
  SetLocalStorage(){
    if(!window.localStorage.getItem('logged')){
      
    }
  }

  Log(nickname){
    window.localStorage.setItem('logged', true);
    window.localStorage.setItem('nickname', nickname);
    this.setState({logged: true, nickname: nickname});
  }
  Logout(){
    window.localStorage.setItem('logged', false);
    console.log(window.localStorage.getItem('logged'));
    window.localStorage.setItem('nickname', null);
    this.setState({logged: false});
  }
  render(){
    return (
      <BrowserRouter>
        <div className="app">
          <HeaderComponent nickname={this.state.nickname} isLogged={this.state.logged} logout={() => this.Logout()}/>
          <Route exact path='/' component={MainPageUnLogComponent}/>
          <Route path='/main-menu' component={()=><MainPageLogComponent lessons={this.state.lessons}/>}/>
          <Route path='/login' component={() => <LoginComponent log={(nickname) => this.Log(nickname)}/>}/>
          <Route path='/registration' component={RegisterComponent}/>
          <Route path='/sphora' component={() => <ShporComponent isLogged={this.state.logged}/>}/>
          <Route path='/profile' component={() => <ProfileComponent 
              setDirection={current => this.SetDirection(current)}
              setCourse={current => this.SetCourse(current)}  
              course={this.state.course}
              direction={this.state.direction}
              nickname={this.state.nickname}/>}/>
          <Route path='/add-shpor' component={AddShporComponent}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
