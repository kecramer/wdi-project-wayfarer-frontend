import { combineReducers } from 'redux'
import cities from './cityReducer'
import posts from './postReducer'
import profiles from './profileReducer'
import auth from './auth_reducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  cities,
  posts,
  profiles,
  auth
})

export default rootReducer
