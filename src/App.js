import React from "react";
import LoginScreen from "./Pages/LoginScreen/Index";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/Dashboard/Dashboard";
import RegForm from "./Components/RegForms/Form";
import Login from "./Components/LoginForm/Index";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<DashBoard />}>
          <Route path="home" element={<Home />} />
          <Route path="form" element={<RegForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
