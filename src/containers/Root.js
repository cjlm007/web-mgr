import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import routes from '../routes'
import DevTools from './DevTools'
import {ReduxRouter} from 'redux-router'

const Root = ({store}) => (
  <Provider store={store}>
    <div>
      <ReduxRouter>
        {routes}
      </ReduxRouter>
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
