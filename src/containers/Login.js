import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

const propTypes = {
  authed: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
}

class Login extends Component {
  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <h3>Log in to view protected content!</h3>
      </div>
    )
  }
}

Login.propTypes = propTypes

function mapStateToProps(state) {
  const {authed, environment} = state
  const {height, isMobile} = environment

  return {
    authed,
    height,
    isMobile,
  }
}

export default connect(mapStateToProps)(Login)
