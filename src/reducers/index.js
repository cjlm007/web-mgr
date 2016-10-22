import { combineReducers } from 'redux'
import authed from './auth'

const todoApp = combineReducers({
  authed
})

export default todoApp
