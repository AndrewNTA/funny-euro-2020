import React from 'react';
import banner from '../../static/images/banner.jpeg';
import MenuBar from '../MenuBar';
import Schedule from '../Schedule';
import firebase from '../../core/firebase';
import './styles.css';

const Home = () => {

  const createTodo = () => {
    const todoRef = firebase.database().ref('test');
    const todo = {
      title: 'test',
      complete: false,
      array: ['anh', 'tuan'],
      array2: [1,2,3,4],
      obj: {
        test: 'hello',
        anh: [
          { x: 1},
          {y: 2},
        ]
      }
    };
    console.log('todo ==>', todo);
    todoRef.push(todo)
  };

  return (
    <div className="app">
      <MenuBar/>
      <img src={banner} className="app-banner" alt="banner" />
      <div onClick={createTodo}>click me</div>
      <Schedule/>
    </div>
  );
};

export default Home;
