import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../views/home";
import About from "../views/About";
import Detail from "../views/Detail";
import ReducerHookExample from '../views/useReducerExample';
import './idex.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/reducer-example">Reducer Example</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/reducer-example">
              <ReducerHookExample />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

