import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import LoginScreen from './Pages/LoginScreen/Index'
import Register from './Pages/LoginScreen/Register'
import Profile from './Pages/Profile';

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
      </Routes>
    </BrowserRouter>
  )
}

export default App