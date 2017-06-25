import reducer from './people'
import * as types from '../constants/people'

describe('people reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      people: [],
      gifts: []
    })
  })

  it('should handle ADD_PERSON', () => {
    expect(
      reducer(undefined, {
        type: types.ADD_PERSON,
        person: {
          url: 'test',
          name: 'Test User'
        }
      })
    ).toEqual({
      people: [
        {
          id: 0,
          url: 'test',
          name: 'Test User'
        }
      ],
      gifts: []
    })

    expect(
      reducer(
        {
          people: [
            {
              id: 0,
              url: 'test',
              name: 'Test User'
            }
          ],
          gifts: []
        },
        {
          type: types.ADD_PERSON,
          person: {
            url: 'test2',
            name: 'Test User 2'
          }
        }
      )
    ).toEqual(
      {
        people: [
          {
            id: 1,
            url: 'test2',
            name: 'Test User 2'
          },
          {
            id: 0,
            url: 'test',
            name: 'Test User'
          }
        ],
        gifts: []
      }
      )
  })
})
