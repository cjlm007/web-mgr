import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchStars} from '../actions/StarsActions';

const propTypes = {
  authed: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  stars: PropTypes.object.isRequired,
}

class Stars extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchStars());
  }

  componentWillReceiveProps(nextProps) {
  }

  renderStars() {
    const result = [];
    const {stars} = this.props
    console.log(stars)
    for (const star of stars) {
      result.push(
        <div>
          this is a star
        </div>
      )
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.renderStars()}
      </div>
    )
  }
}

Stars.propTypes = propTypes

function mapStateToProps(state) {
  const {authed, entities, environment} = state
  const {height, isMobile} = environment
  const {stars, users} = entities

  return {
    authed,
    height,
    isMobile,
    stars,
    users
  }
}

export default connect(mapStateToProps)(Stars)
