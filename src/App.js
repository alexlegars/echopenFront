import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/home';
import './App.css';
import './css/app.css';
import Layout from './layout/layout'

export default class App extends React.Component {


  render() {
    return (
        <div>
            <Route path="/" component={Layout}/>
            <Route path="/:locale?" component={HomePage}/>
        </div>
    );
  }
}

