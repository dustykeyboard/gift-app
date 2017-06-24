import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Person from './Person'
import PeopleEmpty from './PeopleEmpty'

class People extends Component {
  render() {
    return (
    <div>
      <h1>People</h1>
        {this.props.people ? this.props.people.map(person => (
        <Person
          key={person.id}
          person={person}
          clickHandler={this.props.viewList}
        />
      )) : <PeopleEmpty />}
    </div>
    )
  }
}

People.propTypes = {
  people: PropTypes.arrayOf(Person.propTypes.person),
  viewList: PropTypes.func.isRequired
}

export default People
