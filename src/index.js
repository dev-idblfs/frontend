import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

const _root = document.getElementById("root");
const history = createBrowserHistory();

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Fragment>, _root
);
