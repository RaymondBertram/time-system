import React from "react";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";
import { mockedData } from "../../data/mockedData";
import { MockedDataProps } from "../../data/mockedData";
import "./time-overview.css";  


export const TimeOverview = () => {
  const navigate = useNavigate();

  const handleClickAgain = () => {
    navigate(ConfigRoutes.TIME_REGISTRATION)
  }; 

  const handleClickHome = () => {
    navigate(ConfigRoutes.HOME)
  }; 

  const printRows = () => {
    return (
      mockedData.map(data => 
        <tr key={data.date}>
          <td>{data.date}</td>
          <td>{data.start}</td>
          <td>{data.end}</td>
          <td>{data.ist}</td>
          <td>{data.soll}</td>
          <td>{data.difference}</td>
        </tr>
      )
    );
  }; 

  const calcDifference = () => {
    return mockedData.map(data => data.difference).reduce((a,b) => a +b); 
  }; 

  return (
    <div>
      <h1>Übersicht der Arbeitszeiten Mitarbeiter X</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Startzeit</th> 
              <th>Endzeit</th>
              <th>Ist (Stunden)</th>
              <th>Soll (Stunden)</th> 
              <th>Differenz (Stunden)</th>
            </tr>
          </thead>
          <tbody>
            {printRows()}
          </tbody>
        </table>
      </div>
      <p>Stunden Differenz: {calcDifference()}</p>

      <div>
        <button onClick={handleClickAgain}>Zeit eintragen</button>
        <button onClick={handleClickHome}>Beenden</button>
      </div>
    </div>
  ); 
}; 