import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Component } from './components/Chart'

function App() {
  const [country, setCountry] = useState("Russia")

  const CountryButton = () => {
    return (
      <select className = "countrySelect" value = {country} onChange = {(e) => setCountry(e.target.value)}>
        <option value = 'Russia'>Russia</option>
        <option value = 'Germany'>Germany</option>
        <option value = 'Italy'>Italy</option>
        <option value = 'Ukraine'>Ukraine</option>
        <option value = 'Sweden'>Sweden</option>
      </select>
    )
  }
  
  const IndexPage = () => {
    return(
      <section className = "box">
        <div className = "text">SHOCKING NEWS!!! Russian scientists reveal...</div>
        <CountryButton/>
        <Link to="/chart">Bell curve of intellect</Link>
      </section>
    )
  }

  return (
    <Switch>
      <Route
        path="/chart"
        render={() => (<Component 
          filename = "covid_19_clean_complete.csv" 
          country = {country}
          width = "800"
          height = "750"
          />)}
      />
      <Route exact path="/" component = {IndexPage}>
      </Route>
    </Switch>
  );
}

export default App;
