import {
	POST_USERS_LOGIN_SUCCESS,
	POST_USERS_LOGIN_FAILURE,
	POST_USERS_REGISTER_SUCCESS,
	POST_USERS_REGISTER_FAILURE,
	GET_USERS_SUCCESS,
	GET_COUNTRIES_SUCCESS,
	GET_COUNTRIES_FAILURE
} from '../constants.js'

const initialState = {
	loading: true,
	data: {},
	error: [],
	registration: {},
	user_users: [],
	countries: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_USERS_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.data,
				error: []

			}
		case POST_USERS_LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				data: []

			}
		case POST_USERS_REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				registration: action.data,
				error: []

			}
		case POST_USERS_REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				registration: []

			}
		case GET_COUNTRIES_SUCCESS:
			return {
				...state,
				loading: false,
				countries: action.countries,
				error: []

			}
		case GET_COUNTRIES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				countries: []

			}
		case GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				user_users: action.user_users,
				error: []

			}

		default:
			return state
	}
}

export default usersReducer;