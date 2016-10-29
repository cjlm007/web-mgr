import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
// import {initEnvironment} from '../actions/EnvironmentActions'
// import {initNavigator} from '../actions/NavigatorActions'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  // height: PropTypes.number,
  // isMobile: PropTypes.bool,
  // path: PropTypes.array.isRequired,
  // width: PropTypes.number,
  // inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

class App extends Component {
  componentDidMount() {
    // const {dispatch} = this.props
    // dispatch(initEnvironment())
    // dispatch(initNavigator())
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = propTypes


function mapStateToProps(state, ownProps) {
  // const {environment, navigator} = state
  // const {height, isMobile, width} = environment
  // const {path} = navigator.route
  // const errorMessage = state.errorMessage
  // const inputValue = ownProps.location.pathname.substring(1)

  return {
    // height,
    // isMobile,
    // path,
    // width,
    // errorMessage,
    // inputValue
  }
}


export default connect(mapStateToProps)(App)