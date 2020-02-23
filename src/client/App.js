import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './console/Admin';
import Constituencywise from './console/Constituencywise';
import Trends from './Trends';
import Partywise from './console/Partywise';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Partywise} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/home" component={Partywise} />
          <Route exact path="/home/party-wise" component={Partywise} />
          <Route path="/home/constituency-wise" component={Constituencywise} />
          <Route path="/home/constituency-wise-trends" component={Trends} />
        </Switch>
      </Router>
    )
  }
}

export default App;
