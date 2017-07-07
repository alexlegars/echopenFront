import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/home';
import './App.css';
import './css/app.css';

export default class App extends React.Component {


  render() {
    return (
        <div>
            <Route path="/:locale?" component={HomePage}/>
        </div>
    );
  }
}

