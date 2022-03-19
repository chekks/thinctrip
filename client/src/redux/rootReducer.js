import { combineReducers } from 'redux'
import usersReducers from './reducers/usersReducers'
import enquiriesReducers from './reducers/enquiriesReducers'
import menuReducers from './reducers/menuReducers'
import destinationReducers from './reducers/destinationReducers'
import tourReducers from './reducers/tourReducers'

const rootReducer = combineReducers({
    users: usersReducers,
    enquiries: enquiriesReducers,
    menu: menuReducers,
    destination: destinationReducers,
    tour: tourReducers

})

export default rootReducer;