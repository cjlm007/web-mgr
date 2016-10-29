import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import {loginUserSuccess} from './actions/AuthActions';

const store = configureStore(window.__INITIAL_STATE__)

let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginUserSuccess(token));
}

render(
  <Root store={store}/>,
  document.getElementById('root')
)
