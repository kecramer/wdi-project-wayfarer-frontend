import { combineReducers } from 'redux'
import cities from './cityReducer'
import posts from './postReducer'
import profiles from './profileReducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  cities
})

export default rootReducer
