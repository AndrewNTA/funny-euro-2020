import React from 'react';
import banner from '../../static/images/banner.jpeg';
import MenuBar from '../MenuBar';
import Schedule from '../Schedule';
import firebase from '../../core/firebase';
import './styles.css';

const Home = () => {

  const exampleFunction = () => {
    // const betRecordsRef = firebase.database().ref('BetRecords');

    // const betRecordsRef = firebase.database().ref('BetRecords').child('id');
    // betRecordsRef.remove();
    // betRecordsRef.update({ data: '' });

    // betRecordsRef.on('value', snapshot => {
    //   const records = snapshot.val();
    //   console.log('record ==>', records);
    // });

    // betRecordsRef.push(data)
  };

  return (
    <div className="app">
      <MenuBar/>
      <img src={banner} className="app-banner" alt="banner" />
      <Schedule/>
    </div>
  );
};

export default Home;
