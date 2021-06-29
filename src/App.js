import React from 'react';
import banner from './statistic/images/banner.jpeg';
import logo from './statistic/images/logo-small.jpeg';
import { useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import './App.css';

const logFn = res => { console.log('data ===>', res.tokenId, res.profileObj) };
const errorFn = err => { console.log('error ===>', err) };
const clientId = '442973200160-si3h4jb3e4bkbrt0gulqp71qdgi3bva8.apps.googleusercontent.com';

function App() {
  const { signIn } = useGoogleLogin({
    onSuccess: logFn,
    clientId,
    onFailure: errorFn,
    cookiePolicy: 'single_host_origin',
  });

  const handleLogout = () => {
    const auth2 = gapi.auth2 && gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(
        auth2.disconnect()
      )
    }
  };

  return (
    <div className="app">
      <div className="menu-bar">
        <img src={logo} className="menu-logo" alt="banner" />
        <div className="login-register-button" onClick={signIn}>
          Đăng ký / Đăng nhập
        </div>
      </div>
      <img src={banner} className="app-banner" alt="banner" />
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
}

export default App;
