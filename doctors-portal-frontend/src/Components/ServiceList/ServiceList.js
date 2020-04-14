import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const ServiceList = () => {
  return (
    <div>
      <h2>Service List</h2>
      <AppointmentForm></AppointmentForm>
    </div>
  );
};

export default ServiceList;
