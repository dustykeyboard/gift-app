import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gift from './Gift'
import Person from './Person'

class Gifts extends Component {
  render() {
    return (
      <div className='page'>
        <div className='page_meta'>
          <h2 className='page_name'>
            {this.props.person.name}
          </h2>
          <span className='actions'>
            <span onClick={this.props.goBack} className='clickable'>&times;</span>
          </span>
        </div>
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
