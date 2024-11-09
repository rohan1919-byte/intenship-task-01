import React from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ProfilePage from './components/profile/profilePage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
