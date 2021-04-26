import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import axios from 'axios'

function App() {

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allbeers" component={AllBeers} />
        <Route exact path="/beer/:beerId" component={BeerDetails} />
        <Route exact path="/randombeer" component={RandomBeer} />
        <Route exact path="/newbeer" component={NewBeer} />
      </Switch>

    </div>
  );
}

export default App;
