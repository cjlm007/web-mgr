import React from 'react'
import {Route} from 'react-router'
import App from "./containers/App";
import Login from "./containers/Login";
import NotFound from "./components/NotFound";

export default(
  <Route path='/' component={App}>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFound} />
  </Route>
);
