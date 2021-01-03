import React, {FunctionComponent} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from '../home-page/homePage';
import './App.scss';

export const App: FunctionComponent = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path = '/home'>
            <HomePage/>
          </Route>
          <Route path = '*'>
            <div>404 not found</div>
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

