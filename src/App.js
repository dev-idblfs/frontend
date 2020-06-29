import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import login from "./components/login";
import Signup from "./components/signup";

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    )
  }
}



export default App;
