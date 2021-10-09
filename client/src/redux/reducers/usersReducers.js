import {
	POST_USERS_LOGIN_SUCCESS,
	POST_USERS_LOGIN_FAILURE,
	POST_USERS_REGISTER_SUCCESS,
	POST_USERS_REGISTER_FAILURE,
	GET_USERS_SUCCESS
} from '../constants.js'

const initialState = {
	loading: true,
	data: {},
	error: [],
	registration: {},
	user_users: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_USERS_LOGIN_SUCCESS:
			return {
				loading: false,
				data: action.data,
				error: []

			}
		case POST_USERS_LOGIN_FAILURE:
			return {
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
				loading: false,
				error: action.error,
				registration: []

			}
		case GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				user_users: action.user_users

			}
		default:
			return state
	}
}

export default usersReducer;