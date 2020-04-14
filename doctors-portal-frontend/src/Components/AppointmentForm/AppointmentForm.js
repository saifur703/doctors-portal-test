import React from 'react';

const AppointmentForm = () => {
  return (
    <div className='col-md-8 offset-md-2'>
      <h2>Appointment Form</h2>

      <form action=''>
        <input
          className='form-control mb-2'
          type='text'
          name='name'
          placeholder='Your Name here...'
        />

        <input
          className='form-control mb-2'
          type='email'
          name='email'
          placeholder='Your Email here...'
        />
        <input
          className='form-control mb-2'
          type='tel'
          name='tel'
          placeholder='Your Phone Number...'
        />
        <input
          className='btn btn-info form-control'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default AppointmentForm;
