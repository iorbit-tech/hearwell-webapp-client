import React from "react";
import LoginScreen from "./Pages/LoginScreen/Index";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/Dashboard/Dashboard";
import RegForm from "./Components/RegForms/Form";
import Login from "./Components/LoginForm/Index";
import RegFormPage from "./Pages/RegistrationPage";
import AddQuestions from "./Pages/AddQuestions";
import Tellus from "./Pages/TellUs";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<RegFormPage />} />
        <Route path="/" element={<DashBoard />}>
          <Route path="home" element={<Home />} />
          <Route path="form" element={<RegForm />} />
          <Route path="addquestions" element={<AddQuestions />} />
          <Route path="tellus" element={< Tellus />} />
          <Route path="chat" element={< Chat />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
