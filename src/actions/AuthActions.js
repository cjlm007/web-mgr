import {checkHttpStatus, parseJSON} from '../utils'
import {types} from '../constants/ActionTypes'
import {pushState} from 'redux-router'
import jwtDecode from 'jwt-decode'


export function loginUserSuccess(token) {
  localStorage.setItem('token', token)
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token')
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: types.LOGIN_USER_REQUEST
  }
}

export function logout() {
  localStorage.removeItem('token')
  return {
    type: types.LOGOUT_USER
  }
}

export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logout())
    dispatch(pushState(null, '/login'))
  }
}

export function loginUser(email, password, redirect = "/") {
  return function (dispatch) {
    dispatch(loginUserRequest())
    return fetch('/auth/get_token', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        try {
          let decoded = jwtDecode(response.token)
          dispatch(loginUserSuccess(response.token))
          dispatch(pushState(null, redirect))
        } catch (e) {
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }))
        }
      })
      .catch(error => {
        dispatch(loginUserFailure(error))
      })
  }
}
