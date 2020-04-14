import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePicker = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Calender</h2>
          <Calendar
            onChange={(d) => props.handleDate(d)}
            value={props.date}
            minDate={new Date()}
            maxDate={new Date(2020, 12, 31)}
            minDetail={'year'}
          />
        </div>

        <div className='col-md-6 d-flex align-items-center'>
          <img src='https://via.placeholder.com/500x300' alt='' />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
