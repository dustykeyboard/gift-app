import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Person extends Component {
  render() {
    return (
      <li onClick={() => this.props.clickHandler(this.props.person.url)}>
        {this.props.person.name}
      </li>
    )
  }
}

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  clickHandler: PropTypes.func.isRequired
}

export default Person
