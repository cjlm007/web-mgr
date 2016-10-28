import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {createHistory} from 'history'
import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools'
import {reduxReactRouter} from 'redux-router'
import rootReducer from '../reducers/index'
import routes from '../routes'

export default function configureStore(initialState) {
  let createStoreWithMiddleware

  const logger = createLogger()
  const middleware = applyMiddleware(thunk, logger)

  createStoreWithMiddleware = compose(
    middleware,
    reduxReactRouter({routes, createHistory}),
    DevTools.instrument()
  )

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
