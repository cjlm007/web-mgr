import {createReducer} from '../utils'
import {types} from '../constants/ActionTypes'

const initialState = {
  isMobile: false,
  height: null,
  width: null,
}

export default createReducer(initialState, {
  [types.CHANGE_IS_MOBILE]: (state, payload) => {
    return Object.assign({}, state, {
      isMobile: payload.isMobile,
    })
  },
  [types.CHANGE_WIDTH_AND_HEIGHT]: (state, payload) => {
    return Object.assign({}, state, {
      height: payload.height,
      width: payload.width,
    })
  }
})
