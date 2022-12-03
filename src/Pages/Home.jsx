import React from "react";
import { useNavigate } from "react-router-dom";
import { authToken } from "../utils/authChecker";

const Home = () => {
  const nav = useNavigate()
  if (!authToken) {
    nav("/login");
  }
  return <div>hiiii</div>;
};

export default Home;
