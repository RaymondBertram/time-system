import React from "react";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";


export const TimeOverview = () => {
  const navigate = useNavigate();

  
  const handleClickAgain = () => {
    navigate(ConfigRoutes.TIME_REGISTRATION)
  }; 

const handleClickHome = () => {
  navigate(ConfigRoutes.HOME)
}; 
  return (
    <div>
      <h1>TimeOverview</h1>
      <div>
        <button onClick={handleClickHome}>Home</button>
        <button onClick={handleClickAgain}>Zeit eintragen</button>
      </div>
    </div>
  ); 
}; 