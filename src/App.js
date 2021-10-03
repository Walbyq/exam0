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
    this.state = {
      logged: false,
      nickname: ''
    }
  }

  SetDirection(current){
    this.setState({direction: current});
  }

  SetCourse(current){
    this.setState({course: current});
  }

  Log(loggin, nickname){
    this.setState({logged: loggin, nickname: nickname});
  }
  Logout(){
    this.setState({logged: false});
  }
  render(){
    return (
      <BrowserRouter>
        <div className="app">
          <HeaderComponent nickname={this.state.nickname} isLogged={this.state.logged} logout={() => this.Logout()}/>
          <Route exact path='/' component={MainPageUnLogComponent}/>
          <Route path='/main-menu' component={MainPageLogComponent}/>
          <Route path='/login' component={() => <LoginComponent log={(loggin, nickname) => this.Log(loggin, nickname)}/>}/>
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
