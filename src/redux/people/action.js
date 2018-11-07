import people from '../../people.json'
import People from '../../services/api/People'

export const FIRST_CREATE = 'FIRST_CREATE'
export const FIRST_CREATE_PENDING = 'FIRST_CREATE_PENDING'
export const FIRST_CREATE_REJECTED = 'FIRST_CREATE_REJECTED'
export const FIRST_CREATE_FULFILLED = 'FIRST_CREATE_FULFILLED'

export const LOAD_PEOPLE = 'LOAD_PEOPLE'
export const LOAD_PEOPLE_PENDING = 'LOAD_PEOPLE_PENDING'
export const LOAD_PEOPLE_REJECTED = 'LOAD_PEOPLE_REJECTED'
export const LOAD_PEOPLE_FULFILLED = 'LOAD_PEOPLE_FULFILLED'

export const SEARCH = 'SEARCH'
export const FIND_PEOPLE = 'FIND_PEOPLE'
export const CLOSE_CURRENT = 'CLOSE_CURRENT'

export const firstCreate = () => ({
  type: FIRST_CREATE,
  payload: People.create({ people }),
})

export const load = () => ({
  type: LOAD_PEOPLE,
  payload: People.all(),
})

export const search = (value) => ({
  type: SEARCH,
  payload: value,
})

export const find = (person) => ({
  type: FIND_PEOPLE,
  payload: person,
})

export const closeCurrent = () => ({
  type: CLOSE_CURRENT,
})
