import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Match from './containers/Match';

import history from './history';
import store from './configureStore';

const App = () => {
  return (
    <ToastProvider>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/match/:dateId/:matchId" exact component={Match}/>
          </Switch>
        </Router>
      </Provider>
    </ToastProvider>
  );
};

export default App;
