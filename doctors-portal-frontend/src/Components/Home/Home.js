import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='p-5 home-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 pt-5 text-left'>
            <h1 className='text-info'>Your New Smile!</h1>
            <h1 className='text-info'>Starts Here</h1>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              sequi?
            </p>
            <Link to='/doctorPanel'>
              <button className='btn btn-info'>Doctor Panel</button>
            </Link>
          </div>

          <div className='col-md-6'>
            <img src='https://via.placeholder.com/500x300' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
