import axios from 'axios';
import {
    POST_ENQUIRIES_SUCCESS, 
    POST_ENQUIRIES_FAILURE,
    BASE_URL
    
} from '../constants.js'

const postEnquiriesSuccess = user_data => {
    return {
        type: POST_ENQUIRIES_SUCCESS,
        data : user_data
    }
}

const postEnquiriesFailure = error => {
    return {
        type: POST_ENQUIRIES_FAILURE,
        error : error
    }
}

export const postEnquiries = (payload) =>{
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/api/enquiries`, payload, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(postEnquiriesSuccess(res.data));
            
        })
        .catch(error =>{
            //error.message is the error description
            console.log("error", error);
            const errorMsg = error.response.data.errors;
            dispatch(postEnquiriesFailure(errorMsg));
        })
    }
}
