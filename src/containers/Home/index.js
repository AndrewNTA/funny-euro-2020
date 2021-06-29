import React from 'react';
import banner from '../../static/images/banner.jpeg';
import MenuBar from '../MenuBar';
import Schedule from '../Schedule';
import './styles.css';

const Home = () => {
  return (
    <div className="app">
      <MenuBar/>
      <img src={banner} className="app-banner" alt="banner" />
      <Schedule/>
    </div>
  );
};

export default Home;
