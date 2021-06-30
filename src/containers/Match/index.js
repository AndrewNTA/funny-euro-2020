import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { data } from '../../core/data';
import firebase from '../../core/firebase';
import MenuBar from '../MenuBar';
import './styles.css';
import cookie from '../../cookie';
import {
  ZALORA_EURO_PROFILE_ID,
  ZALORA_EURO_PROFILE_EMAIL
} from '../../core/constants';
import { isEmpty } from '../utils';

const getDetailMatch = (matchId, dateId) => {
  for(let i = 0; i < data.length; i++) {
    if (data[i]['dateId'] === dateId) {
      const matches = data[i]['matches'] || [];
      for(let j = 0; j < matches.length; j++) {
        if(matches[j]['id'] === matchId) {
          return {
            date: data[i]['date'],
            round: data[i]['round'],
            detail: matches[j]
          };
        }
      }
    }
  }
  return null;
};

const Match = () => {
  const { matchId, dateId } = useParams();
  const matchDetail = getDetailMatch(matchId, dateId);
  const profileId = cookie.get(ZALORA_EURO_PROFILE_ID, { path: '/' }) || '';
  const profileEmail = cookie.get(ZALORA_EURO_PROFILE_EMAIL, { path: '/' }) || '';
  const [betRecords, setBetRecords] = useState(null);
  const [userHistory, setUserHistory] = useState(null);

  useEffect(() => {
    const betRecordsRef = firebase.database().ref('BetRecords').child(matchId);
    const userHistoryRef = firebase.database().ref('UserHistory').child(profileId);

    betRecordsRef.on('value', snapshot => {
      const result = snapshot.val();
      setBetRecords(result);
    });
    userHistoryRef.on('value', snapshot => {
      const result = snapshot.val();
      setUserHistory(result);
    });
  }, []);

  const handleBet = teamId => {
    const betRecordsRef = firebase.database().ref('BetRecords').child(matchId);
    const userHistoryRef = firebase.database().ref('UserHistory').child(profileId);

    const teamBetRecord = betRecords[teamId];
    const newTeamBetRecord = teamBetRecord ? [...teamBetRecord, profileEmail] : [profileEmail];

    const teamUserHistory = userHistory[profileId];
    const newTeamUserHistory = teamUserHistory ? {
      ...teamUserHistory,
      [matchId]: {
        selected: teamId,
        nameMatch: `${detail.team1.name} - ${detail.team2.name}`,
        email: profileEmail,
      }
    } : {
      [matchId]: {
        selected: teamId,
        nameMatch: `${detail.team1.name} - ${detail.team2.name}`,
        email: profileEmail,
      }
    };
    betRecordsRef.update({
      [teamId]: newTeamBetRecord,
    });
    userHistoryRef.update({
      [profileId]: newTeamUserHistory,
    });
  };

  const handleClearBet = () => {
    const betRecordsRef = firebase.database().ref('BetRecords').child(matchId);
    const userHistoryRef = firebase.database().ref('UserHistory').child(profileId);

    const teamBetRecord = betRecords[teamSelected];
    const indexBetRecord = teamBetRecord.indexOf(profileEmail);
    const newTeamBetRecord = [...teamBetRecord];
    if (indexBetRecord > -1) {
      newTeamBetRecord.splice(indexBetRecord, 1);
    }

    const teamUserHistory = userHistory[profileId];
    const newTeamUserHistory = teamUserHistory ? {...teamUserHistory} : {};
    delete newTeamUserHistory[matchId];

    betRecordsRef.update({
      [teamSelected]: isEmpty(newTeamBetRecord) ? '' : newTeamBetRecord,
    });
    userHistoryRef.update({
      [profileId]: isEmpty(newTeamUserHistory) ? '' : newTeamUserHistory,
    });
  };

  if (!matchDetail) {
    return null;
  }

  const teamSelected = userHistory &&
    userHistory[profileId] &&
    userHistory[profileId][matchId] &&
    userHistory[profileId][matchId]['selected'];

  const { date, round, detail } = matchDetail;
  return (
    <div>
      <MenuBar/>
      <div className="container-match-detail" id={matchId}>
        <div className="top-match-detail">
          <div className="tag-match-detail">{`${date}, ${detail.time}`}</div>
          <div className="tag-match-detail">{round}</div>
          <div className="match-detail-info">
            <div className="team-match-detail">
              <span className="team-name-match-detail align-right-match-detail">{detail.team1.name}</span>
              <img alt="flag" src={detail.team1.flag} className="team-flag-match-detail"/>
            </div>
            <div className="middle-match-detail">
              {detail.isFinished ? <div className="result-match-detail">
                <span className="score-match-detail">{detail.team1.score}</span>
                {detail.isPen && <span className="pen-match-detail">{`(${detail.team1.pen})`}</span>}
                <span className="divider-match-detail">-</span>
                <span className="score-match-detail">{detail.team2.score}</span>
                {detail.isPen && <span className="pen-match-detail">{`(${detail.team2.pen})`}</span>}
              </div> : <div className="info-match-detail">
                {detail.info}
              </div>}
            </div>
            <div className="team-match-detail">
              <img alt="flag" src={detail.team2.flag} className="team-flag-match-detail"/>
              <span className="team-name-match-detail">{detail.team2.name}</span>
            </div>
          </div>
        </div>
        <div className="bottom-match-detail">
          <div className="title-detail">
            Dự đoán kết quả
          </div>
          <div className="notify-detail">
            Vì mục đích giải trí, mỗi account được bet 1 lần trên 1 trận đồng giá 30K. Lưu ý chỉ tính kết quả trong 90
            phút chính thức. Cổng dự đoán sẽ đóng lại ngay giờ bóng lăn của trận đấu. Bạn có thể xem những nguời dự đoán
            giống bạn ở danh sách bên dưới.
          </div>
          <div className="label-middle">Bạn chọn</div>
          <form action="#" className="form-data">
            <p>
              <input
                type="radio"
                id={detail.team1.id}
                name="radio-group"
                checked={teamSelected === detail.team1.id}
                onChange={() => handleBet(detail.team1.id)}
              />
              <label htmlFor={detail.team1.id}>{detail.team1.name}</label>
            </p>
            <p>
              <input
                type="radio"
                id={detail.team2.id}
                name="radio-group"
                checked={teamSelected === detail.team2.id}
                onChange={() => handleBet(detail.team2.id)}
              />
              <label htmlFor={detail.team2.id}>{detail.team2.name}</label>
            </p>
          </form>
          <div className="middle-section">
            {teamSelected && <div className="clear-btn" onClick={handleClearBet}>
              Xoá dự đoán
            </div>}
          </div>
        </div>
        <div className="bottom-match-detail">
          <div className="title-detail">
            Danh sách dự đoán
          </div>
          <div className="table-detail">
            <div className="box-size">
              <div className="team-label">
                {detail.team1.name}
              </div>
              {
                betRecords && betRecords[detail.team1.id] ?
                  <ul>
                    {betRecords[detail.team1.id].map(mail => {
                      return <li key={mail}>{mail}</li>
                    })}
                  </ul> :
                  <div className="center-text">
                    Chưa có dữ liệu
                  </div>
              }
            </div>
            <div className="box-size">
              <div className="team-label">
                {detail.team2.name}
              </div>
              {
                betRecords && betRecords[detail.team2.id] ?
                  <ul>
                    {betRecords[detail.team2.id].map(mail => {
                      return <li key={mail}>{mail}</li>
                    })}
                  </ul> :
                  <div className="center-text">
                    Chưa có dữ liệu
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
