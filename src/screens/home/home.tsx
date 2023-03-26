import React from "react";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";

export const Home = () => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate(ConfigRoutes.TIME_REGISTRATION)
  }; 
    
  return (
    <div>
      <h1>FitYourTime</h1>
      <p>Dieses Tool wird genutzt um die persönlichen Arbeitszeiten eintragen zu können. <br></br> Diese sind ebenfalls für die Personalabteilung einsehbar.</p>
      <button onClick={handleClick}>Weiter</button>
    </div>
  );
}; 