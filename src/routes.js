import React from 'react'
import {Route} from 'react-router'
import App from "./containers/App";
import Login from "./containers/Login";
import NotFound from "./components/NotFound";
import Stars from "./components/Stars";
import {requireAuthentication} from "./components/AuthenticatedComponent";

export default(
  <Route path='/' component={App}>
    <Route path='login' component={Login}/>
    <Route path='stars' component={requireAuthentication(Stars)}/>
    <Route path="*" component={NotFound} />
  </Route>
)
