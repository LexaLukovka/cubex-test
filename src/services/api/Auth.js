/* eslint-disable class-methods-use-this,no-underscore-dangle */
import JWT from 'jwt-decode'
import Http from '../Http'

class Auth {
  async register(credentials) {
    const { token, refreshToken } = await Http.post('/register', credentials)
    const user = JWT(token)._doc

    localStorage.setItem('user', JSON.stringify(user))

    return { token, refreshToken, ...user }
  }

  async login(credentials) {
    const { token, refreshToken } = await Http.post('/login', credentials)
    const user = JWT(token)._doc

    localStorage.setItem('user', JSON.stringify(user))

    return { token, refreshToken, ...user }
  }
}

export default new Auth()
