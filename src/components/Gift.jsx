import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Gift extends Component {
  render() {
    return (
      <li onClick={() => this.props.clickHandler(this.props.gift.id)}>
        {this.props.gift.name}
        {this.props.gift.url ? (
          <a href={this.props.gift.url} target='_blank'>↗</a>
        ) : ''}
      </li>
    )
  }
}

Gift.propTypes = {
  gift: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    taken: PropTypes.bool.isRequired,
    url: PropTypes.string
  }),
  clickHandler: PropTypes.func.isRequired
}

export default Gift
