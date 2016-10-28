import {createReducer} from '../utils'
import {types} from '../constants/ActionTypes'

const initialState = {
  route: {
    path: ['stars'],
    query: {
      q: 'house'
    }
  }
}

export default createReducer(initialState, {
  [types.CHANGE_PATH]: (state, payload) => {
    return Object.assign({}, state, {
      route: payload.route,
    })
  }
})
