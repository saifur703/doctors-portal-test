import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import DoctorPanel from './Components/DoctorPanel/DoctorPanel';
import Appointment from './Components/Appointment/Appointment';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/doctorPanel'>
            <DoctorPanel></DoctorPanel>
          </Route>

          <Route path='/getAppointment'>
            <Appointment></Appointment>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
