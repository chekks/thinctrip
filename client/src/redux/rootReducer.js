import {combineReducers} from 'redux'
import usersReducers from './reducers/usersReducers'
import enquiriesReducers from './reducers/enquiriesReducers'
import menuReducers from './reducers/menuReducers'

const rootReducer = combineReducers({
    users: usersReducers,
    enquiries: enquiriesReducers,
    menu: menuReducers

})

export default rootReducer;