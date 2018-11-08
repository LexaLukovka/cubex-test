/* eslint-disable no-return-assign,no-underscore-dangle,no-nested-ternary */
import {
  ADD_PICTURE,
  CLOSE_CURRENT,
  CREATE_PERSON_FULFILLED,
  CREATE_PERSON_PENDING,
  CREATE_PERSON_REJECTED,
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
  form: {},
}

const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PEOPLE_PENDING:
    case CREATE_PERSON_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_PEOPLE_REJECTED:
    case PEOPLE_FIND_REJECTED:
    case CREATE_PERSON_REJECTED:
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

    case CREATE_PERSON_FULFILLED:
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
      const search = payload.toLowerCase()
      let resultSearch = state.people.filter(person => {
        const allInfo = `${Object.values(person).join(' ')}`
        return allInfo.toLowerCase().includes(search)
      })

      if (payload === '') resultSearch = [...state.people]

      return {
        ...state,
        filterPeople: resultSearch,
      }
    }

    case ADD_PICTURE:
      return {
        ...state,
        form: { ...state.form, ...payload },
      }

    default:
      return state
  }
}

export default peopleReducer
