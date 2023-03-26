import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Routes as ConfigRoutes } from './config/routes.config';
import { Home } from './screens/home/home';
import { TimeOverview } from './screens/time-overview/time-overview';
import { TimeRegistration } from './screens/time-registration/time-registration';

import './App.css';


export default function TimeSystem() {
  return (
    <Router>
      <div className='App'> 
      <Routes>
        <Route path={ConfigRoutes.HOME} element={<Home/>}/>
          <Route path={ConfigRoutes.TIME_REGISTRATION} element={<TimeRegistration/>}/>
          <Route path={ConfigRoutes.TIME_OVERVIEW} element={<TimeOverview/>}/>
      </Routes>
      </div>
    </Router>
  );
}

