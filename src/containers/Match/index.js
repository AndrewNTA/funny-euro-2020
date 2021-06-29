import React from 'react';
import { data } from '../../core/data';
import { useParams } from 'react-router-dom';
import './styles.css';

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

  const matchDetail = getDetailMatch(matchId, dateId)

  if (!matchDetail) {
    return null;
  }

  const { date, round, detail } = matchDetail;
  return (
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
    </div>
  );
};

export default Match;
