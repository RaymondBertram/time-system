import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";

import "./time-registration.css";  

export const TimeRegistration = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleClickNext = () => {
    navigate(ConfigRoutes.TIME_OVERVIEW)
  }; 

  const handleClickBack = () => {
    navigate(ConfigRoutes.HOME)
  }; 
  
  return (
    <div>
      <h1>Zeiterfassung</h1>
      <div className="container">
        <div className="datepicker">
          <h2>Datum auswählen</h2>
          <DatePicker
            value={startDate}
            onChange={(date: React.SetStateAction<Date>) => setStartDate(date)}
          />
        </div>
        <div className="time-registration">
          <h2>Zeit eintragen</h2>
          <div className="input-container">
            <label>Label 1</label>
            <input type="time" id="name" name="name"></input>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleClickBack}>Zurück</button>
        <button onClick={handleClickNext}>Weiter</button>
      </div>
    </div>
  ); 
}; 