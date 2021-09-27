//importing react components and libraries
import React from "react"
import Nav from "./components/Nav"
import About from "./components/About"
import Shop from "./components/Shop"
import Home from "./components/Home"

import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

// importing css 
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop/" exact component={Shop}/>
          <Route path="/shop/:itemid" component={Shop}/>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
