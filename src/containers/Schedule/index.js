import React from 'react';
import { useHistory } from 'react-router-dom';

import { data } from '../../core/data';
import './styles.css';

const Schedule = () => {
  const history = useHistory();
  const goToDetail = (dateId, matchId) => {
    history.push(`/match/${dateId}/${matchId}`);
  };

  return (
    <div className="container-schedule">
      {data.map(value => {
        return <div key={value.date}>
          <div className="date-schedule">{value.date}</div>
          <div className="round-schedule">{value.round}</div>
          <div>
            {value.matches.map(match => {
              return <div
                className="row-schedule"
                key={match.id}
                onClick={() => goToDetail(value.dateId, match.id)}
              >
                <div className="main-row-schedule">
                  <div className="team-schedule">
                    <span className="team-name-schedule align-right-schedule">{match.team1.name}</span>
                    <img alt="flag" src={match.team1.flag} className="team-flag-schedule"/>
                  </div>
                  <div className="middle-schedule">
                    {match.isFinished ? <div className="result-schedule">
                      <span className="score-schedule">{match.team1.score}</span>
                      {match.isPen && <span className="pen-schedule">{`(${match.team1.pen})`}</span>}
                      <span className="divider-schedule">-</span>
                      <span className="score-schedule">{match.team2.score}</span>
                      {match.isPen && <span className="pen-schedule">{`(${match.team2.pen})`}</span>}
                    </div> : <div className="time-schedule">
                      {match.time}
                    </div>}
                  </div>
                  <div className="team-schedule">
                    <img alt="flag" src={match.team2.flag} className="team-flag-schedule"/>
                    <span className="team-name-schedule">{match.team2.name}</span>
                  </div>
                </div>
                <div className="arrow-schedule">
                  <div className="arrow-btn-schedule"/>
                </div>
              </div>
            })}
          </div>
        </div>
      })}
    </div>
  );
};

export default Schedule;
