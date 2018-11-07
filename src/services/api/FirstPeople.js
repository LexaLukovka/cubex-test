/* eslint-disable class-methods-use-this,no-return-await */
import Http from '../Http'

class FirstPeople {
  create(people) {
    return Http.post('/first', people)
  }
}

export default new FirstPeople()
