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
  const [workDate, setWorkDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const year = dayjs(workDate).year();
  const month = dayjs(workDate).month();
  const day = dayjs(workDate).date();

  const handleClickNext = () => {
    if ((startTime && endTime) === '') {
      alert('Es wurden keine Daten eingegeben. Bitte geben Sie die Daten an und versuchen Sie es erneut!')
      console.log('no data'); 
      navigate(ConfigRoutes.TIME_REGISTRATION)
    } else {
      console.log('data!!')
      const date = dayjs(workDate).format(Dateformat.DEFAULT);
      const obj = {
        date: date,
        start: startTime,
        end: endTime,
        ist: calcTimings(endTime).diff(calcTimings(startTime), 'hours'),
        soll: 8,
        difference: calcTimings(endTime).diff(calcTimings(startTime), 'hours') - 8,
      };
      mockedData.push(obj);
      navigate(ConfigRoutes.TIME_OVERVIEW);
    }
  };

  const calcTimings = (time: string) => {
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    return dayjs(new Date(year, month, day, +hours, +minutes));
  }

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
            value={workDate}
            onChange={(date: React.SetStateAction<Date>) => setWorkDate(date)}
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