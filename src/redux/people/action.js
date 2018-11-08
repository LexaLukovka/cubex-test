import People from '../../services/api/People'

export const LOAD_PEOPLE = 'LOAD_PEOPLE'
export const LOAD_PEOPLE_PENDING = 'LOAD_PEOPLE_PENDING'
export const LOAD_PEOPLE_REJECTED = 'LOAD_PEOPLE_REJECTED'
export const LOAD_PEOPLE_FULFILLED = 'LOAD_PEOPLE_FULFILLED'

export const PEOPLE_FIND = 'PEOPLE_FIND'
export const PEOPLE_FIND_REJECTED = 'PEOPLE_FIND_REJECTED'
export const PEOPLE_FIND_FULFILLED = 'PEOPLE_FIND_FULFILLED'

export const CREATE_PERSON = 'CREATE_PERSON'
export const CREATE_PERSON_PENDING = 'CREATE_PERSON_PENDING'
export const CREATE_PERSON_REJECTED = 'CREATE_PERSON_REJECTED'
export const CREATE_PERSON_FULFILLED = 'CREATE_PERSON_FULFILLED'


export const DELETE_PERSON = 'DELETE_PERSON'
export const DELETE_PERSON_PENDING = 'DELETE_PERSON_PENDING'
export const DELETE_PERSON_REJECTED = 'DELETE_PERSON_REJECTED'
export const DELETE_PERSON_FULFILLED = 'DELETE_PERSON_FULFILLED'

export const SEARCH = 'SEARCH'
export const CLOSE_CURRENT = 'CLOSE_CURRENT'
export const ADD_PICTURE = 'ADD_PICTURE'

export const load = () => ({
  type: LOAD_PEOPLE,
  payload: People.all(),
})

export const create = (form) => ({
  type: CREATE_PERSON,
  payload: People.create(form),
})

export const deletePerson = (id) => async dispatch => {
  await dispatch({
    type: DELETE_PERSON,
    payload: People.delete(id),
  })

  dispatch(load())
}

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

export const addPictures = ({ ...picture }) => ({
  type: ADD_PICTURE,
  payload: picture,
})
