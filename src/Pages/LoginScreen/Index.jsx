import React from "react";
import LoginForm from "../../Components/LoginForm/Index";
import "./Index.scss";
const LoginScreen = () => {
  return (
    <div className="container">
      <div className="title-bar"><h2>HearWell</h2></div>
      <div className="body-cont">
        <div className="left-box"></div>
        <div className="right-box">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
