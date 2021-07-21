import {combineReducers} from 'redux'
import usersReducers from './reducers/usersReducers'

const rootReducer = combineReducers({
    users: usersReducers

})

export default rootReducer;