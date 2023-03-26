import React from "react";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";

import "./time-overview.css";  


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
      <div className="table-container">
        <table>
          <tr>
            <th>Datum</th>
            <th>Startzeit</th> 
            <th>Endzeit</th>
            <th>Ist</th>
            <th>Soll</th> 
            <th>Diffrenz</th>
         </tr>
         <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
         </tr>
         <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
         </tr>
        </table>

      </div>
      <div>
        <button onClick={handleClickHome}>Beenden</button>
        <button onClick={handleClickAgain}>Zeit eintragen</button>
      </div>
    </div>
  ); 
}; 