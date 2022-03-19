import {
    POST_DESTINATION_SUCCESS,
    POST_DESTINATION_FAILURE,
    GET_DESTINATION_SUCCESS,
    GET_DESTINATION_FAILURE,
} from '../constants.js'

const initialState = {
    loading: true,
    data: {},
    errors: [],
    get_destination: [],
    get_destination_error: []
}

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_DESTINATION_SUCCESS:
            return {
                loading: false,
                data: action.data,
                errors: {}

            }
        case POST_DESTINATION_FAILURE:
            return {
                loading: false,
                errors: action.error,
                data: []

            }
        case GET_DESTINATION_SUCCESS:
            return {
                ...state,
                loading: false,
                get_destination: action.data,
                errors: {}

            }
        case GET_DESTINATION_FAILURE:
            return {
                loading: false,
                get_destination_error: action.error,
                get_destination: []

            }
        default:
            return state
    }
}

export default destinationReducer;