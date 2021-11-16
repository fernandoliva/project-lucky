import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Pets from './components/Pets/Pets';
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";

import "./styles/app.scss";
import PreLogin from "./components/Login/PreLogin";
import Onboarding from "./components/Onboarding/Onboarding";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        
          <Link to="/user/register">|Register|</Link>
          <Link to="/user/login">|Login|</Link>
          <Link to="/user/logout">|Logout|</Link>
          <Link to="/user">|PreLogin|</Link>
          <Link to="/pets">|Pets|</Link>
          <Link to="/home">|Home|</Link>
          <Link to="/">|Onboarding|</Link>

          <Routes>
            <Route path="/" element={<Onboarding/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/pets" element={<Pets/>}/>
            <Route path="/user" element={<PreLogin/>}/>
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;