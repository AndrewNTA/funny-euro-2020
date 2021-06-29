import React from 'react';
import { data } from './data';
import './styles.css';

const Schedule = () => {
  return (
    <div className="container-schedule">
      {data.map(value => {
        return <div key={value.date}>
          <div className="date">{value.date}</div>
          <div className="round">{value.round}</div>
          <div>
            {value.matches.map(match => {
              return <div className="row" key={match.id}>
                <div className="main-row">
                  <div className="team">
                    <span className="team-name">{match.team1.name}</span>
                    <img alt="flag" src={match.team1.flag} className="team-flag"/>
                  </div>
                  <div className="result">
                    {match.isFinished ? <div className="result">
                      <span className="score">{match.team1.score}</span>
                      {match.isPen && <span className="pen">{`(${match.team1.pen})`}</span>}
                      <span className="divider">-</span>
                      <span className="score">{match.team2.score}</span>
                      {match.isPen && <span className="pen">{`(${match.team2.pen})`}</span>}
                    </div> : <div className="time">
                      {match.time}
                    </div>}
                  </div>
                  <div className="team">
                    <img alt="flag" src={match.team2.flag} className="team-flag"/>
                    <span className="team-name">{match.team2.name}</span>
                  </div>
                </div>
                <div className="arrow">
                  <div className="arrow-btn"/>
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
