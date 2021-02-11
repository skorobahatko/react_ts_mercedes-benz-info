import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { store } from '../../store'
import { Provider } from 'react-redux';
import { HomePage } from '../home-page/HomePage';
import { CharacterCardsPage } from '../characters-page';
import { EpisodesCardsPage } from '../episodes-page';
import { LocationsCardsPage } from '../location-page';
import { CharacterSelfPage } from '../character-self-page';
import './App.scss';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path = '/home'>
            <HomePage/>
          </Route>
          <Route path = '/characters/page=:page'>
            <CharacterCardsPage/>
          </Route>
          <Route path = '/characters/:id'>
            <CharacterSelfPage/>
          </Route>
          <Route path = '/episodes/page=:page'>
            <EpisodesCardsPage/>
          </Route>
          <Route path = '/locations/page=:page'>
            <LocationsCardsPage/>
          </Route>
          <Redirect from='/' to='/home'/>
          <Route path = '*'>
            <div>404 not found</div>
          </Route>
        </Switch>
      </Router>
      </Provider>
    </React.StrictMode>
  );
}
export { App };