import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from './Home.js';
//import './Routes.css';

class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <h1>HELLO FROM HOME!</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/new"
            render={() => (
              <div>
                <h1>HELLO FROM NEW!</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/:postId"
            render={() => (
              <div>
                <h1>HELLO FROM POST ID!</h1>
              </div>
            )}
          />
          <Route
            path="*"
            render={() => (
              <div>
                <h1>COULD NOT FIND</h1>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
