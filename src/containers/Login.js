import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/AuthActions'

const propTypes = {
  auth: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
}

class Login extends Component {
  constructor(props) {
    super(props);

    const redirectRoute = this.props.location.query.next || '/login';
    this.state = {
      username: '',
      password: '',
      redirectTo: redirectRoute
    };
  }

  login(e) {
    e.preventDefault();

    this.props.dispatch(
      loginUser(this.state.username, this.state.password, this.state.redirectTo)
    )
  }

  handleFieldsChange(field, event) {
    const state = {}
    state[field] = event.target.value
    this.setState(state)
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        {
          this.props.statusText ?
          <div className='alert alert-info'>
            {this.props.statusText}
          </div> : ''
        }
        <form role='form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control input-lg'
              value={this.state.username}
              onChange={this.handleFieldsChange.bind(this, 'username')}
              placeholder='User name'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control input-lg'
              value={this.state.password}
              onChange={this.handleFieldsChange.bind(this, 'password')}
              placeholder='Password'
            />
          </div>
          <button
            type='submit'
            className='btn btn-lg'
            disabled={this.props.isAuthenticating}
            onClick={this.login.bind(this)}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

Login.propTypes = propTypes

function mapStateToProps(state) {
  const {auth} = state
  // const {height, isMobile} = environment

  return {
    isAuthenticating: auth.isAuthenticating,
    statusText: auth.statusText
    // height,
    // isMobile,
  }
}

export default connect(mapStateToProps)(Login)
