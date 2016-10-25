import {combineReducers} from 'redux'

import authed from './auth'
import entities from '../reducers/entities'
import environment from '../reducers/environment'
import navigator from '../reducers/navigator'

const rootReducer = combineReducers({
  authed,
  entities,
  environment,
  navigator
})

export default rootReducer
