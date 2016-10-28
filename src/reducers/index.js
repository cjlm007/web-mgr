import {routerStateReducer} from 'redux-router';
import {combineReducers} from 'redux'

import auth from './auth'
import entities from '../reducers/entities'
// import environment from '../reducers/environment'
// import navigator from '../reducers/navigator'

const rootReducer = combineReducers({
  auth,
  entities,
  // environment,
  // navigator,
  router: routerStateReducer,
})

export default rootReducer
