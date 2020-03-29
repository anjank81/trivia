import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './Container/loginContainer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Team from './Components/Team';

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/header" component={Header} />
        </Switch>
    </div>
  );
}

export default App;
