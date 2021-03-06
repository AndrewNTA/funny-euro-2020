import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { useToasts } from 'react-toast-notifications';

import logo from '../../static/images/logo_small.png';
import {
  CLIENT_ID,
  FUNNY_EURO_PROFILE_EMAIL,
  FUNNY_EURO_PROFILE_ID,
  FUNNY_EURO_PROFILE_NAME,
  FUNNY_EURO_TOKEN
} from '../../core/constants';
import cookie from '../../cookie';
import './styles.css';

const MenuBar = () => {
  const history = useHistory();
  const { addToast } = useToasts();
  const currentUsername = cookie.get(FUNNY_EURO_PROFILE_NAME, { path: '/' }) || '';
  const [username, setUsername] = useState(currentUsername);
  const handleLoginSuccess = response => {
    const tokenId = response.tokenId;
    const profileId = response.googleId;
    const profileName = response.profileObj && response.profileObj.name;
    const profileEmail = response.profileObj && response.profileObj.email;

    cookie.set(FUNNY_EURO_TOKEN, tokenId, { path: '/' });
    cookie.set(FUNNY_EURO_PROFILE_ID, profileId, { path: '/' });
    cookie.set(FUNNY_EURO_PROFILE_NAME, profileName, { path: '/' });
    cookie.set(FUNNY_EURO_PROFILE_EMAIL, profileEmail, { path: '/' });

    showToastSuccess();
    setUsername(profileName);
  };

  const showToastSuccess = () => {
    addToast('Đăng nhập thành công', {
      appearance: 'success',
      autoDismissTimeout: 3000,
      autoDismiss: true,
    });
  };

  const { signIn } = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    clientId: CLIENT_ID,
    onFailure: (error) => { console.log('error ==>', error) },
    cookiePolicy: 'single_host_origin',
  });

  const goToProfile = () => {
    history.push('/profile');
  };

  const goHome = () => {
    history.push('/');
  };

  const tokenId = cookie.get(FUNNY_EURO_TOKEN, { path: '/' });

  return (
    <div className="menu-bar">
      <img src={logo} className="menu-logo" alt="logo" onClick={goHome}/>
      {tokenId ? <div className="menu-welcome">
        <span className="welcome-text">Welcome</span>
        <span className="username" onClick={goToProfile}>{username}</span>
      </div> : <div className="login-register-button" onClick={signIn}>
        Đăng ký / Đăng nhập
      </div>}
    </div>
  );
};

export default MenuBar;
