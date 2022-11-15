import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './Pages/LoginScreen/Index'
import Register from './Pages/LoginScreen/Register'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App