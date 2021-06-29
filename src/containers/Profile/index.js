import React from 'react';
import banner from '../../statistic/images/banner.jpeg';
import { gapi } from 'gapi-script';
import {
  ZALORA_EURO_PROFILE_EMAIL,
  ZALORA_EURO_PROFILE_NAME,
  ZALORA_EURO_TOKEN,
  ZALORA_EURO_PROFILE_ID
} from '../../core/constants';
import cookie from '../../cookie';
import './styles.css';

const Profile = () => {
  const profileUsername = cookie.get(ZALORA_EURO_PROFILE_NAME, { path: '/' }) || '';
  const profileEmail = cookie.get(ZALORA_EURO_PROFILE_EMAIL, { path: '/' }) || '';

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
    cookie.remove(ZALORA_EURO_PROFILE_EMAIL, { path: '/' });
  };


  return (
    <div className="container">
      <img src={banner} className="app-banner" alt="banner" />
      <div className="wrapper">
        <div className="row">
          <span className="label">Tên:</span>
          <span className="info">{profileUsername}</span>
        </div>
        <div className="row">
          <span className="label">Tên:</span>
          <span className="info">{profileEmail}</span>
        </div>
      </div>
      <div onClick={handleLogout}>Đăng xuất</div>
    </div>
  );
};

export default Profile;
