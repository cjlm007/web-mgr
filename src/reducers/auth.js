import {createReducer} from '../utils'
import * as types from '../constants/ActionTypes'
import jwtDecode from 'jwt-decode'

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
}

export default createReducer(initialState, {
  [types.LOGIN_USER_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticating: true,
      statusText: null
    })
  },
  [types.LOGIN_USER_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: true,
      token: payload.token,
      userName: jwtDecode(payload.token).userName,
      statusText: 'You have been successfully logged in.'
    })

  },
  [types.LOGIN_USER_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticating: false,
      isAuthenticated: false,
      token: null,
      userName: null,
      statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
    })
  },
  [types.LOGOUT_USER]: (state, payload) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      token: null,
      userName: null,
      statusText: 'You have been successfully logged out.'
    })
  }
})
