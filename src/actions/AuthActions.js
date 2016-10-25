import Cookies from 'js-cookie'
import * as types from '../constants/ActionTypes'

const COOKIE_PATH = 'user_uuid'

function authUser(accessToken) {
  return dispatch =>
    dispatch(fetchAuthedUser(accessToken))
}

function fetchAuthedUser(accessToken) {
  return dispatch =>
    fetch(`//api.soundcloud.com/me?oauth_token=${accessToken}`)
      .then(response => response.json())
      .then(json => dispatch(receiveAuthedUserPre(accessToken, json)))
      .catch(err => {
        throw err
      })
}

function receiveAccessToken(accessToken) {
  return {
    type: types.RECEIVE_ACCESS_TOKEN,
    accessToken,
  }
}

function receiveAuthedUser(user) {
  return {
    type: types.RECEIVE_AUTHED_USER,
    user,
  }
}

function receiveAuthedUserPre(accessToken, user) {
  return dispatch => {
    dispatch(receiveAccessToken(accessToken))
    dispatch(receiveAuthedUser(user))
  }
}

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_PATH)
    if (accessToken) {
      return dispatch(authUser(accessToken, false))
    }
    return null;
  }
}
