import {
  LOGIN_USER_FULFILLED,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,

  REGISTER_USER_PENDING,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,

  LOGOUT_USER,
} from './action'

const initialState = {
  user: null,
  errors: [],
  error: false,
  loading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_PENDING:
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
      }

    case REGISTER_USER_FULFILLED:
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        user: payload,
        loading: false,
      }

    case REGISTER_USER_REJECTED:
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,

      }

    case LOGOUT_USER:
      return { ...state, user: null }

    default:
      return state
  }
}

export default authReducer
