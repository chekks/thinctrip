import {
	POST_ENQUIRIES_SUCCESS, 
	POST_ENQUIRIES_FAILURE,
	GET_ENQUIRIES_SUCCESS, 
	GET_ENQUIRIES_FAILURE,
} from '../constants.js'

const initialState = {
    loading: true,
    data: {},
    errors: [],
	get_enquiries: [],
	get_enquiries_error: []
}

const enquiriesReducer = (state = initialState, action)=>{
    switch(action.type){
			case POST_ENQUIRIES_SUCCESS:
				return {
					loading: false,
					data: action.data,
					errors: {}

				}
			case POST_ENQUIRIES_FAILURE:
				return {
					loading: false,
					errors: action.error,
					data: []

				}
			case GET_ENQUIRIES_SUCCESS:
				return {
					...state,
					loading: false,
					get_enquiries: action.data,
					errors: {}

				}
			case GET_ENQUIRIES_FAILURE:
				return {
					loading: false,
					get_enquiries_error: action.error,
					get_enquiries: []

				}
			default: 
				return state 
	}
}

export default enquiriesReducer;