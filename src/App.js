import React, { useState } from 'react';
import banner from './statistic/images/banner.jpeg';
import logo from './statistic/images/logo-small.jpeg';
import { useGoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import {
  CLIENT_ID,
  ZALORA_EURO_PROFILE_ID,
  ZALORA_EURO_PROFILE_NAME,
  ZALORA_EURO_TOKEN
} from './containers/Auth/constants';
import cookie from './cookie';
import './App.css';

const App = () => {
  const currentUsername = cookie.get(ZALORA_EURO_PROFILE_NAME, { path: '/' }) || '';
  const [username, setUsername] = useState(currentUsername);
  const handleLoginSuccess = response => {
    const tokenId = response.tokenId;
    const profileId = response.googleId;
    const profileName = response.profileObj && response.profileObj.name;

    cookie.set(ZALORA_EURO_TOKEN, tokenId, { path: '/' });
    cookie.set(ZALORA_EURO_PROFILE_ID, profileId, { path: '/' });
    cookie.set(ZALORA_EURO_PROFILE_NAME, profileName, { path: '/' });

    setUsername(profileName);
  };

  const { signIn } = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    clientId: CLIENT_ID,
    onFailure: () => {},
    cookiePolicy: 'single_host_origin',
  });

  const handleLogout = () => {
    const auth2 = gapi.auth2 && gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(
        auth2.disconnect()
      )
    }
    cookie.remove(ZALORA_EURO_TOKEN, { path: '/' });
    cookie.remove(ZALORA_EURO_PROFILE_ID, { path: '/' });
    cookie.remove(ZALORA_EURO_PROFILE_NAME, { path: '/' });

    setUsername('')
  };

  const tokenId = cookie.get(ZALORA_EURO_TOKEN, { path: '/' });

  return (
    <div className="app">
      <div className="menu-bar">
        <img src={logo} className="menu-logo" alt="banner" />
        {tokenId ? <div className="menu-welcome">
          <span className="welcome-text">Welcome</span>
          <span className="username">{username}</span>
        </div> : <div className="login-register-button" onClick={signIn}>
          Đăng ký / Đăng nhập
        </div>}
      </div>
      <img src={banner} className="app-banner" alt="banner" />
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default App;
