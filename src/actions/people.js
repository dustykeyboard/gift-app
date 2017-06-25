import * as types from '../constants/people'

export function addPerson(person) {
  return {
    type: types.ADD_PERSON,
    person
  }
}

export function viewPerson(person) {
  return {
    type: types.VIEW_PERSON,
    person
  }
}
