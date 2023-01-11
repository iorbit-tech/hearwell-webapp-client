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
import SelectUsers from "./Pages/SelectUsers";
import HearingDiary from "./Pages/HearingDiary";
// import WAChat from "./Pages/WhatsApp";
import WAchatUi from "./Pages/WhatsApp";

const App = () => {
  const nav = useNavigate();
  useEffect(() => {
    console.log(authToken, "auth token use effect");
    if (authToken) {
      if (authToken == "null") {
        console.log("auth is null");
        nav("/login");
      } else {
      //  nav("/addquestions");
        nav("/whatsappchat");
      }
      // <Navigate replace to="/addquestions" />
    } else {
      nav("/login");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<RegFormPage />} />
        <Route path="/" element={<DashBoard />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegForm />} />
          <Route path="/editquestion/:item" element={<AddQuestions />} />
          <Route path="/addquestions" element={<AddQuestions />} />
          <Route path="/tellus/:username" element={<Tellus />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/allquestions" element={<QuestionsDisplay />} />
          <Route path="/selectUsers" element={<SelectUsers />} />
          <Route path="/hearingdiary/:username" element={<HearingDiary />} />
          <Route path="/whatsappchat" element={<WAchatUi />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
