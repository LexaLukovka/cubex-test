import { LOAD_PEOPLE_FULFILLED, LOAD_PEOPLE_PENDING, LOAD_PEOPLE_REJECTED } from './action'

const initialState = {
  loading: false,
  error: null,
  people: [],
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
      }

    default:
      return state
  }
}

export default peopleReducer
