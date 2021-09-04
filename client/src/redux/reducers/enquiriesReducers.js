import {
	POST_ENQUIRIES_SUCCESS, 
	POST_ENQUIRIES_FAILURE,
} from '../constants.js'

const initialState = {
    loading: true,
    data: {},
    errors: [],
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
			default: 
				return state 
	}
}

export default enquiriesReducer;