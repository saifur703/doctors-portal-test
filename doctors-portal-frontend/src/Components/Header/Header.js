import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-left'>
          <div className='logo'>
            <h1>
              <a href='/'>Logo</a>
            </h1>
          </div>
        </div>
        <div className='col-md-6 text-right'>
          <div className='mainmenu'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/doctorPanel'>Doctor panel</a>
              </li>
              <li>
                <a href='/getAppointment'>Appointment</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
