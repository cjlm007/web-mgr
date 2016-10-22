import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {initAuth} from '../actions/AuthActions';
import {initEnvironment} from '../actions/EnvironmentActions';
import {initNavigator} from '../actions/NavigatorActions';


const propTypes = {
  dispatch: PropTypes.func.isRequired,
  height: PropTypes.number,
  isMobile: PropTypes.bool,
  path: PropTypes.array.isRequired,
  width: PropTypes.number,
};

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(initAuth());
    dispatch(initEnvironment());
    dispatch(initNavigator());
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  const {environment, navigator} = state;
  const {height, isMobile, width} = environment;
  const {path} = navigator.route;

  return {
    height,
    isMobile,
    path,
    width,
  };
}


export default connect(mapStateToProps)(App);
