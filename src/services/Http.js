/* eslint-disable dot-notation,class-methods-use-this */
import axios from 'axios'
import to from 'util-to'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3333',
      timeout: 10000,
    })
  }

  async request(method, url, params, config) {
    const [err, response] = await to(this.instance[method](url, params, config))
    return response.data
  }

  get(url, params) {
    return this.request('get', url, params)
  }

  post(url, params, config) {
    return this.request('post', url, params, config)
  }

  delete(url, params) {
    return this.request('delete', url, params)
  }
}

export default new Http()

