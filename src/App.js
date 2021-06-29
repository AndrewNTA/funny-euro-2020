import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Profile from './containers/Profile';

import history from './history';
import store from './configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/profile" exact component={Profile}/>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
