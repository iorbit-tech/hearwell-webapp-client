import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import LoginScreen from './Pages/LoginScreen/Index';
import Register from './Pages/LoginScreen/Register';
import Profile from './Pages/Profile';
import AddQuestions from './Pages/AddQuestions';
import Tellus from './Pages/Tellus';

// const App = () => {
//   return (
//     <div>
//       <LoginScreen />
//     </div>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginScreen />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addquestions" element={<AddQuestions />} />
        <Route path="tellus" element={< Tellus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App