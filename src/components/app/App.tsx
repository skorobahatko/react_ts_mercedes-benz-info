import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { store } from '../../store'
import { Provider } from 'react-redux';
import { HomePage } from '../home-page';
import { SelfPage } from '../self-page';
import './App.scss';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path = '/home'>
            <HomePage/>
          </Route>
          <Route path = '/self'>
            <SelfPage/>
          </Route>
          <Redirect from = '/' to = '/home'/>
          <Route path = '*'>
            <div>404 not found</div>
          </Route>
        </Switch>
      </Router>
      </Provider>
    </React.StrictMode>
  );
}

