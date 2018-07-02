import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import postReducer from './postReducer'
import authReducer from './auth_reducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  post: postReducer,
  form,
  auth: authReducer
})

export default rootReducer