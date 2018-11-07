import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import peopleReducer from './people/reducer'

const reducers = combineReducers({
  authReducer,
  peopleReducer,
})

export default reducers
