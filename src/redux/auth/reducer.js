/* eslint-disable no-underscore-dangle */
import {
  CLOSE_AUTH,

  LOGIN_USER_FULFILLED,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,

  LOGOUT_USER,
  OPEN_AUTH,

  REGISTER_USER_FULFILLED,
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
} from './action'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  errors: [],
  error: false,
  loading: false,
  isOpen: false,
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

    case OPEN_AUTH: {
      const { user, isOpen } = state
      return {
        ...state,
        isOpen: isOpen ? (user._id !== payload) : true,
      }
    }

    case CLOSE_AUTH:
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

export default authReducer
