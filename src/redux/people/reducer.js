/* eslint-disable no-return-assign,no-underscore-dangle,no-nested-ternary */
import {
  CLOSE_CURRENT,
  FIRST_CREATE_FULFILLED,
  FIRST_CREATE_PENDING,
  FIRST_CREATE_REJECTED,
  LOAD_PEOPLE_FULFILLED,
  LOAD_PEOPLE_PENDING,
  LOAD_PEOPLE_REJECTED,
  PEOPLE_FIND_FULFILLED,
  PEOPLE_FIND_REJECTED,
  SEARCH,
} from './action'

const initialState = {
  loading: false,
  error: null,
  massages: null,
  people: [],
  filterPeople: [],
  currentPeople: null,
}

const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PEOPLE_PENDING:
    case FIRST_CREATE_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PEOPLE_REJECTED:
    case FIRST_CREATE_REJECTED:
    case PEOPLE_FIND_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case LOAD_PEOPLE_FULFILLED:
      return {
        ...state,
        loading: false,
        people: payload.people,
        filterPeople: payload.people,
      }

    case FIRST_CREATE_FULFILLED:
      return {
        ...state,
        loading: false,
        massages: payload,
      }

    case PEOPLE_FIND_FULFILLED: {
      const { currentPeople } = state
      const { person } = payload
      return {
        ...state,
        loading: false,
        currentPeople: currentPeople ? (person._id === currentPeople._id ? null : person) : person,
      }
    }

    case CLOSE_CURRENT:
      return {
        ...state,
        currentPeople: null,
      }

    case SEARCH: {
      let resultSearch = state.people.filter(person => {
        const allInfo = `${Object.values(person).join(' ')}`
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
