import React from 'react';
import banner from './statistic/images/banner.jpeg';
import logo from './statistic/images/logo-small.jpeg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="menu-bar">
        <div className="menu-bar-header">
          <img src={logo} className="menu-logo" alt="banner" />
          <div className="menu-description">ZALORA bùng cháy cùng EURO</div>
        </div>
        <div className="login-register-button">
          Đăng ký / Đăng nhập
        </div>
      </div>
      <img src={banner} className="app-banner" alt="banner" />
    </div>
  );
}

export default App;
