/* eslint-disable class-methods-use-this,no-return-await */
import Http from '../Http'

class People {
  all() {
    return Http.get('/people/')
  }

  find(id) {
    return Http.get(`/people/${id}`)
  }

  create(form) {
    return Http.post('/people', form)
  }

  delete(id) {
    return Http.delete(`/people/${id}`)
  }
}

export default new People()
