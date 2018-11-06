import people from '../../people.json'

export const LOAD_PEOPLE = 'LOAD_PEOPLE'
export const LOAD_PEOPLE_PENDING = 'LOAD_PEOPLE_PENDING'
export const LOAD_PEOPLE_REJECTED = 'LOAD_PEOPLE_REJECTED'
export const LOAD_PEOPLE_FULFILLED = 'LOAD_PEOPLE_FULFILLED'

export const SEARCH = 'SEARCH'
export const FIND_PEOPLE = 'FIND_PEOPLE'

export const load = () => dispatch => {
  dispatch({
    type: LOAD_PEOPLE_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_PEOPLE_FULFILLED,
    payload: people,
  }), 1000)
}

export const search = (value) => ({
  type: SEARCH,
  payload: value,
})

export const find = (index) => ({
  type: FIND_PEOPLE,
  payload: index,
})
