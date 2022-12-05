import React, { useEffect } from "react";
import LoginScreen from "./Pages/LoginScreen/Index";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/Dashboard/Dashboard";
import RegForm from "./Components/RegForms/Form";
import Login from "./Components/LoginForm/Index";
import RegFormPage from "./Pages/RegistrationPage";
import AddQuestions from "./Pages/AddQuestions";
import Tellus from "./Pages/TellUs";
import Chat from "./Pages/Chat";
import QuestionsDisplay from "./Pages/QuestionsDisplay";
import { userData, authToken } from "./utils/authChecker";

const App = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (authToken) {
      // <Navigate replace to="/addquestions" />
      nav("/addquestions");
    } else {
      nav("/login");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        {/* <Route path="/signup" element={<RegFormPage />} /> */}
        <Route path="/" element={<DashBoard  />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegForm />} />
          <Route path="/editquestion/:item" element={<AddQuestions />} />
          <Route path="/addquestions" element={<AddQuestions />} />
          <Route path="/tellus" element={<Tellus />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/allquestions" element={<QuestionsDisplay />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
