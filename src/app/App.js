import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './views/home';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" >
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
  }
}

export default App