import axios from 'axios';
import {
    POST_DESTINATION_SUCCESS,
    POST_DESTINATION_FAILURE,
    GET_DESTINATION_SUCCESS,
    GET_DESTINATION_FAILURE,
    BASE_URL

} from '../constants.js'

const postDestinationSuccess = user_data => {
    return {
        type: POST_DESTINATION_SUCCESS,
        data: user_data
    }
}

const postDestinationFailure = error => {
    return {
        type: POST_DESTINATION_FAILURE,
        error: error
    }
}

const getDestinationSuccess = destination => {
    return {
        type: GET_DESTINATION_SUCCESS,
        data: destination
    }
}

const getDestinationFailure = error => {
    return {
        type: GET_DESTINATION_FAILURE,
        error: error
    }
}


export const getDestination = (payload) => {
    return async (dispatch) => {
        await axios.get(`${BASE_URL}/api/destination`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log("getting destination", res.data);
                dispatch(getDestinationSuccess(res.data.data));

            })
            .catch(error => {
                console.warn("GET DESTINATION ERROR:", error);
                dispatch(getDestinationFailure(error));

            })
    }
}


export const postDestination = (payload) => {
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/api/destination`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                dispatch(postDestinationSuccess(res.data));

            })
            .catch(error => {
                //error.message is the error description
                console.log("error", error);
                const errorMsg = error.response.data.errors;
                dispatch(postDestinationFailure(errorMsg));
            })
    }
}
