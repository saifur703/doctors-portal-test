import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const DoctorPanel = () => {
  return (
    <div className='doctor-panel'>
      <Router>
        <Switch>
          <Route path='/doctorPanel/dashboard'>
            <h2>Doctor Panel - Dashboard</h2>
          </Route>

          <Route path='/doctorPanel/appointmentList'>
            <h2>Appointment List</h2>
          </Route>

          <Route exact path='/doctorPanel'>
            <h2>Dashboard</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default DoctorPanel;
