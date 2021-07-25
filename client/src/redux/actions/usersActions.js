import axios from 'axios';
import {
    POST_USERS_LOGIN_SUCCESS, 
    POST_USERS_LOGIN_FAILURE,
    POST_USERS_REGISTER_SUCCESS,
    POST_USERS_REGISTER_FAILURE,
    GET_USERS_SUCCESS,
    BASE_URL
    
} from '../constants.js'

const postUsersLoginSuccess = user_data => {
    return {
        type: POST_USERS_LOGIN_SUCCESS,
        data : user_data
    }
}

const postUsersLoginFailure = error => {
    return {
        type: POST_USERS_LOGIN_FAILURE,
        error : error
    }
}

const postUsersRegistrationSuccess = user_data => {
    return {
        type: POST_USERS_REGISTER_SUCCESS,
        data : user_data
    }
}

const postUsersRegistrationFailure = error => {
    return {
        type: POST_USERS_REGISTER_FAILURE,
        error : error
    }
}

const getUsersSuccess = users => {
    return {
        type: GET_USERS_SUCCESS,
        admin_users : users
    }
}

export const adminGetUsers = (payload) =>{
    return async (dispatch) => {
        await axios.get(`${BASE_URL}/api/users`, payload, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(getUsersSuccess(res.data));
            
        })
        .catch(error =>{
            //error.message is the error description
            console.log("error get users", error);
            // const errorMsg = error.response.data;
            // dispatch(postUsersRegistrationFailure(errorMsg));
        })
    }
}


export const postUsersRegistration = (payload) =>{
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/api/register`, payload, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(postUsersRegistrationSuccess(res));
            
        })
        .catch(error =>{
            //error.message is the error description
            console.log("error", error);
            const errorMsg = error.response.data;
            dispatch(postUsersRegistrationFailure(errorMsg));
        })
    }
}

export const postUsersLogin = (payload) =>{
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/api/login`, payload, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(postUsersLoginSuccess(res.data));
            
        })
        .catch(error =>{
            //error.message is the error description
            console.log("error", error);
            const errorMsg = error.response.data;
            dispatch(postUsersLoginFailure(errorMsg));
        })
    }
}
