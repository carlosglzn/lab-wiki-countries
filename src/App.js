import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import axios from 'axios'
import React, { useState, useEffect } from 'react';


function App() {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      
      const res = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;')

      setCountries(res.data)
    }

    getCountries()

  }, [])


  return (
    <>
      <Router>
        <div style={{
          display: "flex", flexDirection: "column"}}>
          <Navbar/>
          <CountriesList countries={countries}/>
        </div>
          <Switch>
            <Route exact path="/:country" component={CountryDetails}/>
          </Switch>
        
      </Router>
    </>
  );
}

export default App;
