import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { gapi } from 'gapi-script';

import banner from '../../static/images/banner.jpeg';
import {
  ZALORA_EURO_PROFILE_EMAIL,
  ZALORA_EURO_PROFILE_NAME,
  ZALORA_EURO_TOKEN,
  ZALORA_EURO_PROFILE_ID
} from '../../core/constants';
import cookie from '../../cookie';
import './styles.css';
import firebase from '../../core/firebase';
import { isEmpty } from "../utils";

const Profile = () => {
  const history = useHistory();
  const profileUsername = cookie.get(ZALORA_EURO_PROFILE_NAME, { path: '/' }) || '';
  const profileEmail = cookie.get(ZALORA_EURO_PROFILE_EMAIL, { path: '/' }) || '';
  const profileId = cookie.get(ZALORA_EURO_PROFILE_ID, { path: '/' }) || '';
  const [userHistory, setUserHistory] = useState(null);

  useEffect(() => {
    const userHistoryRef = firebase.database().ref('UserHistory').child(profileId);

    userHistoryRef.on('value', snapshot => {
      const result = snapshot.val();
      console.log('user history ==>', result);
      setUserHistory(result);
    });
  }, []);

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

    history.push('/');
  };

  const goHome = () => {
    history.push('/');
  };

  return (
    <div className="container-profile">
      <img src={banner} className="app-banner" alt="banner" />
      <div className="wrapper-profile">
        <div className="title-profile">
          Thông tin cá nhân
        </div>
        <div className="row-profile">
          <span className="label-profile">Tên:</span>
          <span className="info-profile">{profileUsername}</span>
        </div>
        <div className="row-profile">
          <span className="label-profile">Email:</span>
          <span className="info-profile">{profileEmail}</span>
        </div>
        <div className="control-group-profile">
          <div className="home-btn-profile" onClick={goHome}>Trang chủ</div>
          <div className="logout-btn-profile" onClick={handleLogout}>Đăng xuất</div>
        </div>
        <div className="title-profile space-profile">
          Lịch sử dự đoán
        </div>
        {
          userHistory ? <div>
          {
            Object.keys(userHistory).map(matchId => {
              const match = userHistory[matchId];
              if (isEmpty(match)) {
                return null;
              } else {
                return <div className="row-item">
                  <div className="match-name-profile">{match.nameMatch}</div>
                  <div className="simple-text">Bạn chọn</div>
                  <div className="selected-team-profile">{match.selected}</div>
                </div>
              }
            })
          }
        </div> : <div className="not-found">Không có dữ liệu</div>}
      </div>
    </div>
  );
};

export default Profile;
