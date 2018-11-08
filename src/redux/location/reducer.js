import { INDEX_SCENE } from './action'

const initialState = {
  locations: '/',
}

const locationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INDEX_SCENE:
      return {
        ...state,
        locations: payload,
      }

    default:
      return state
  }
}

export default locationReducer
