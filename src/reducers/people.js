import { ADD_PERSON } from '../constants/people'

const initialState = {
  people: [],
  gifts: []
}

export default function people(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: [
          {
            id: state.people.reduce((maxId, person) => Math.max(person.id, maxId), -1) + 1,
            url: action.person.url,
            name: action.person.name
          },
          ...state.people
        ],
        gifts: state.gifts
      }

    default:
      return state
  }
}
