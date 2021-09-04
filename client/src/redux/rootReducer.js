import {combineReducers} from 'redux'
import usersReducers from './reducers/usersReducers'
import enquiriesReducers from './reducers/enquiriesReducers'

const rootReducer = combineReducers({
    users: usersReducers,
    enquiries: enquiriesReducers

})

export default rootReducer;