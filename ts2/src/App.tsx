import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { MyD3Component, Component } from './components/Chart'


function App() {

  return (
    <Switch>
      <Route
        path="/chart"
        render={() => (<MyD3Component data={[1,2,3]}/>)}
      />
      <Route
        path="/component"
        render={() => (<Component filename = "covid_19_data.csv" />)}
      />
    </Switch>
  );
}

export default App;
