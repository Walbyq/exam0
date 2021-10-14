import HeaderComponent from "./Components/Header/HeaderComponent";
import MainPageUnLogComponent from "./Components/MainPageUnLogComponent";
import MainPageLogComponent from "./Components/MainPageLog/MainPageLogComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import RegisterComponent from "./Components/Registration/RegisterComponent";
import ShporComponent from "./Components/Shpora/ShporComponent";
import AddShporComponent from "./Components/AddShpor/AddShporComponent";
import ProfileComponent from "./Components/Profile/ProfileComponent";
import FaqComponent from "./Components/Faq/FaqComponent";
import "./App.css";
import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";


const App = () => {
  const [logged, setLogged] = useState(false);
  const [nickname, setNickname] = useState("");
  const [course, setCourse] = useState(1);
  const [direction, setDirection] = useState("iivt");
  const [lessons, setLessons] = useState([]);

  const Responce = async function () {
    const answer = await fetch(
      `http://shporhub/api/index.php/?method=getLessons`
    );
    const result = await answer.json();
    return result;
  };
  const GetLessons = async function () {
    let response = await Responce();
    return response.data;
  };
  const Logout = () => {
    setLogged(false);
  };
  const Login = (nickname) => {
    setNickname(nickname);
    setLogged(true);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderComponent
          nickname={nickname}
          isLogged={logged}
          logout={Logout}
        />
        <Route exact path="/" component={MainPageUnLogComponent} />
        <Route
          path="/main-menu"
          component={() => (
            <MainPageLogComponent lessons={lessons} setLessons={setLessons} getLessons={GetLessons} />
          )}
        />
        <Route
          path="/login"
          component={() => (
            <LoginComponent loginFunc={nickname => Login(nickname)} />
          )}
        />
        <Route path="/registration" component={RegisterComponent} />
        <Route
          path="/sphora"
          component={() => <ShporComponent isLogged={logged} />}
        />
        <Route
          path="/profile"
          component={() => (
            <ProfileComponent
              setDirection={(current) => setDirection(current)}
              setCourse={(current) => setCourse(current)}
              course={course}
              direction={direction}
              nickname={nickname}
            />
          )}
        />
        <Route path="/add-shpor" component={AddShporComponent} />
        <Route path="/faq" component={FaqComponent}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
