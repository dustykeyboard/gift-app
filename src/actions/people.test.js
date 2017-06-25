import * as actions from './people'
import * as types from '../constants/people'

describe('actions', () => {
  it('should create an action to add a person', () => {
    const person = {
      url: 'user',
      name: 'Test User'
    }
    const expectedAction = {
      type: types.ADD_PERSON,
      person
    }
    expect(actions.addPerson(person)).toEqual(expectedAction)
  })
})
