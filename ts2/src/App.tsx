import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { MyD3Component, Component } from './components/Chart'


function App() {

  return (
    <Switch>
      <Route
        path="/component"
        render={() => (<MyD3Component data={[1,2,3]}/>)}
      />
      <Route
        path="/chart"
        render={() => (<Component filename = "covid_19_clean_complete.csv" country = "Russia"/>)}
      />
    </Switch>
  );
}

export default App;
