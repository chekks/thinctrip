import {
	GET_MENU_SUCCESS, 
	GET_MENU_FAILURE,
} from '../constants.js'

const initialState = {
    loading: true,
    data: [],
    errors: [],
}

const menuReducer = (state = initialState, action)=>{
    switch(action.type){
			case GET_MENU_SUCCESS:
				return {
					loading: false,
					data: action.data,
					errors: {}

				}
			case GET_MENU_FAILURE:
				return {
					loading: false,
					error: action.error,
					menu: []

				}
			default: 
				return state 
	}
}

export default menuReducer;