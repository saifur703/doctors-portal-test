import React, { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import ServiceList from '../ServiceList/ServiceList';

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (d) => {
    setDate(d);
  };
  return (
    <div className='container'>
      <h2 className='text-info'>Appointment</h2>

      <DatePicker date={date} handleDate={handleDate}></DatePicker>

      <ServiceList date={date}></ServiceList>
    </div>
  );
};

export default Appointment;
