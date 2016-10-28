import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchStars} from '../actions/StarsActions'
import forEach from 'lodash/forEach'

const propTypes = {
  auth: PropTypes.object,
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

    forEach(stars, (value, key) => {
      result.push(
        <div key={key}>
          <p>
            {value.name}
            &nbsp;=&nbsp;
            {key}
          </p>
        </div>
      )
    })

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
  const {auth, entities, environment} = state
  const {height, isMobile} = environment
  const {stars, users} = entities

  return {
    auth,
    height,
    isMobile,
    stars,
    users
  }
}

export default connect(mapStateToProps)(Stars)
