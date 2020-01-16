import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Input from "./components/Input";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/card" component={Card} />
            <Route path="/" component={Input} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
