import { combineReducers } from 'redux'

import authed from './auth'
import environment from '../reducers/environment';
import navigator from '../reducers/navigator';

const todoApp = combineReducers({
  authed,
  environment,
  navigator
})

export default todoApp
