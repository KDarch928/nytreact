import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" componets={Home} />
        <Route exact path="/search" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

);

export default App;

