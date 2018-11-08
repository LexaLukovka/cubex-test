import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import peopleReducer from './people/reducer'
import locationReducer from './location/reducer'

const reducers = combineReducers({
  authReducer,
  peopleReducer,
  locationReducer,
})

export default reducers
