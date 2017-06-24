import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gift from './Gift'
import Person from './Person'

class Gifts extends Component {
  render() {
    return (
      <div>
        <h1>
          <span onClick={this.props.goBack}>&larr;</span>
          Gifts for {this.props.person.name}
        </h1>
        {this.props.giftsForPerson.map(gift => (
          <Gift
            key={gift.id}
            gift={gift}
            clickHandler={this.props.goBack}
          />
        ))}
      </div>
    )
  }
}

Gifts.propTypes = {
  person: Person.propTypes.person,
  giftsForPerson: PropTypes.arrayOf(Gift.propTypes.gift).isRequired,
  goBack: PropTypes.func.isRequired
}

export default Gifts
