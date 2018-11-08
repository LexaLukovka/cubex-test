import Auth from '../../services/api/Auth'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const LOGOUT_USER = 'LOGIN_USER'

export const OPEN_AUTH = 'OPEN_AUTH'
export const CLOSE_AUTH = 'CLOSE_AUTH'

export const register = (form) => ({
  type: REGISTER_USER,
  payload: Auth.register(form),
})

export const login = (form) => ({
  type: LOGIN_USER,
  payload: Auth.login(form),
})

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_USER,
  })
  localStorage.setItem('user', JSON.stringify(null))
}

export const openAuth = (id) => ({
  type: OPEN_AUTH,
  payload: id,
})

export const closeAuth = () => ({
  type: CLOSE_AUTH,
})
