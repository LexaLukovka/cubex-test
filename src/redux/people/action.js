import people from '../../people.json'
import People from '../../services/api/People'
import FirstPeople from '../../services/api/FirstPeople'

export const FIRST_CREATE = 'FIRST_CREATE'
export const FIRST_CREATE_PENDING = 'FIRST_CREATE_PENDING'
export const FIRST_CREATE_REJECTED = 'FIRST_CREATE_REJECTED'
export const FIRST_CREATE_FULFILLED = 'FIRST_CREATE_FULFILLED'

export const LOAD_PEOPLE = 'LOAD_PEOPLE'
export const LOAD_PEOPLE_PENDING = 'LOAD_PEOPLE_PENDING'
export const LOAD_PEOPLE_REJECTED = 'LOAD_PEOPLE_REJECTED'
export const LOAD_PEOPLE_FULFILLED = 'LOAD_PEOPLE_FULFILLED'

export const PEOPLE_FIND = 'PEOPLE_FIND'
export const PEOPLE_FIND_PENDING = 'PEOPLE_FIND_PENDING'
export const PEOPLE_FIND_REJECTED = 'PEOPLE_FIND_REJECTED'
export const PEOPLE_FIND_FULFILLED = 'PEOPLE_FIND_FULFILLED'


export const SEARCH = 'SEARCH'
export const CLOSE_CURRENT = 'CLOSE_CURRENT'

export const firstCreate = () => dispatch => {
  dispatch({
    type: FIRST_CREATE,
    payload: FirstPeople.create({ people }),
  })

  localStorage.setItem('people', JSON.stringify(people))
}

export const load = () => ({
  type: LOAD_PEOPLE,
  payload: People.all(),
})

export const search = (value) => ({
  type: SEARCH,
  payload: value,
})

export const find = (id) => ({
  type: PEOPLE_FIND,
  payload: People.find(id),
})

export const closeCurrent = () => ({
  type: CLOSE_CURRENT,
})
