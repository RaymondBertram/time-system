import React, { useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router";
import { Routes as ConfigRoutes } from "../../config/routes.config";
import { Dateformat } from "../../config/dateformat.config";
import { mockedData } from "../../data/mockedData";

import "./time-registration.css";


export const TimeRegistration = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState(null!);
  const [endTime, setEndTime] = useState(null!);

  const handleClickNext = () => {
    if ((startTime && endTime) === null) {
      alert('Please Enter Data')
      navigate(ConfigRoutes.TIME_REGISTRATION)
    } else {
      console.log('notNull')
      // Startdate for saving
      const date = dayjs(startDate).format(Dateformat.DEFAULT);
    // push to mocked and calculate properties
    navigate(ConfigRoutes.TIME_OVERVIEW)
    }
  };

  // Get input data 
  const handleChangeStartDate = (event: any) => {
    setStartTime(event.target.value);
  };

  const handleChangeEndDate = (event: any) => {
    setEndTime(event.target.value);
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
              <input type="time" id="time" name="time" required onChange={handleChangeStartDate}></input>
            </div>
            <div className="input-2">
              <label>Endzeit</label>
              <input type="time" id="time" name="time" required onChange={handleChangeEndDate}></input>
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