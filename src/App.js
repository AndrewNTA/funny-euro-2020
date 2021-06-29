import React from 'react';
import banner from './statistic/images/banner.jpeg';
import logo from './statistic/images/logo-small.jpeg';
import GoogleLogin from 'react-google-login';
import './App.css';

function App() {

  const responseGoogleLogin = response => {
    console.log('data ===>', response);
  };

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
      <GoogleLogin
        clientId="442973200160-si3h4jb3e4bkbrt0gulqp71qdgi3bva8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogleLogin}
        onFailure={responseGoogleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
