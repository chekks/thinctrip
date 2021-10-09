import axios from 'axios';
import {
    POST_ENQUIRIES_SUCCESS, 
    POST_ENQUIRIES_FAILURE,
    GET_ENQUIRIES_SUCCESS, 
    GET_ENQUIRIES_FAILURE,
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

const getEnquiriesSuccess = enquiries => {
    return {
        type: GET_ENQUIRIES_SUCCESS,
        data : enquiries
    }
}

const getEnquiriesFailure = error => {
    return {
        type: GET_ENQUIRIES_FAILURE,
        error : error
    }
}


export const getEnquiries = (payload) =>{
    return async (dispatch) => {
        await axios.get(`${BASE_URL}/api/enquiries`, payload, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log("getting enquiries", res.data);
            dispatch(getEnquiriesSuccess(res.data.data));
            
        })
        .catch(error => {
            console.warn("GET ENQUIRIES ERROR:", error);
            dispatch(getEnquiriesFailure(error));
            
        })
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
