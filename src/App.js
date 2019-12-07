import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Landing, Login } from "./pages";

import "./style.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
