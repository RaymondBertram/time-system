import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";

import "./time-registration.css";  

export const TimeRegistration = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleClickNext = () => {
    // check data and save it 
    navigate(ConfigRoutes.TIME_OVERVIEW)
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
            <div className="input-1">
              <label>Startzeit</label>
              <input type="time" id="time" name="time"></input>
            </div>
            <div className="input-2">
              <label>Endzeit</label>
              <input type="time" id="time" name="time"></input>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleClickNext}>Weiter</button>
      </div>
    </div>
  ); 
}; 