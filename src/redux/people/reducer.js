/* eslint-disable no-return-assign */
import { FIND_PEOPLE, LOAD_PEOPLE_FULFILLED, LOAD_PEOPLE_PENDING, LOAD_PEOPLE_REJECTED, SEARCH } from './action'

const initialState = {
  loading: false,
  error: null,
  people: [],
  filterPeople: [],
  currentPeople: null,
}

const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PEOPLE_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PEOPLE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case LOAD_PEOPLE_FULFILLED:
      return {
        ...state,
        loading: false,
        people: payload,
        filterPeople: payload,
      }

    case FIND_PEOPLE: {
      let currentPeople = {}
      state.people.filter((person, index) => index === payload && (currentPeople = person))
      return {
        ...state,
        currentPeople,
      }
    }

    case SEARCH: {
      let resultSearch = state.people.filter(person => {
        const allInfo = `${Object.values(person.general).join(' ')} ${Object.values(person.job).join(' ')}
         ${Object.values(person.contact).join(' ')}`
        return allInfo.toLowerCase().includes(payload)
      })

      if (payload === '') resultSearch = [...state.people]

      return {
        ...state,
        filterPeople: resultSearch,
      }
    }

    default:
      return state
  }
}

export default peopleReducer
