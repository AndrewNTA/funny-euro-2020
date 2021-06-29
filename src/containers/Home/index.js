import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import banner from '../../static/images/banner.jpeg';
import logo from '../../static/images/logo-small.jpeg';
import { useGoogleLogin } from 'react-google-login';
import { useToasts } from 'react-toast-notifications';
import {
  CLIENT_ID,
  ZALORA_EURO_PROFILE_EMAIL,
  ZALORA_EURO_PROFILE_ID,
  ZALORA_EURO_PROFILE_NAME,
  ZALORA_EURO_TOKEN
} from '../../core/constants';
import cookie from '../../cookie';
import Schedule from '../Schedule';
import './styles.css';

const Home = () => {
  const history = useHistory();
  const { addToast } = useToasts();
  const currentUsername = cookie.get(ZALORA_EURO_PROFILE_NAME, { path: '/' }) || '';
  const [username, setUsername] = useState(currentUsername);
  const handleLoginSuccess = response => {
    const tokenId = response.tokenId;
    const profileId = response.googleId;
    const profileName = response.profileObj && response.profileObj.name;
    const profileEmail = response.profileObj && response.profileObj.email;

    cookie.set(ZALORA_EURO_TOKEN, tokenId, { path: '/' });
    cookie.set(ZALORA_EURO_PROFILE_ID, profileId, { path: '/' });
    cookie.set(ZALORA_EURO_PROFILE_NAME, profileName, { path: '/' });
    cookie.set(ZALORA_EURO_PROFILE_EMAIL, profileEmail, { path: '/' });

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

  const showToastFailed = () => {
    addToast('Đăng nhập thất bại! Vui lòng thử lại', {
      appearance: 'error',
      autoDismissTimeout: 3000,
      autoDismiss: true,
    });
  };

  const { signIn } = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    clientId: CLIENT_ID,
    onFailure: () => {showToastFailed()},
    cookiePolicy: 'single_host_origin',
  });

  const goToProfile = () => {
    history.push('/profile');
  };

  const tokenId = cookie.get(ZALORA_EURO_TOKEN, { path: '/' });

  return (
    <div className="app">
      <div className="menu-bar">
        <img src={logo} className="menu-logo" alt="banner" />
        {tokenId ? <div className="menu-welcome">
          <span className="welcome-text">Welcome</span>
          <span className="username" onClick={goToProfile}>{username}</span>
        </div> : <div className="login-register-button" onClick={signIn}>
          Đăng ký / Đăng nhập
        </div>}
      </div>
      <img src={banner} className="app-banner" alt="banner" />
      <Schedule/>
    </div>
  );
};

export default Home;
