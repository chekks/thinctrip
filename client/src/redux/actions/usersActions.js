import axios from 'axios';
import {
    POST_USERS_LOGIN_SUCCESS,
    POST_USERS_LOGIN_FAILURE,
    POST_USERS_REGISTER_SUCCESS,
    POST_USERS_REGISTER_FAILURE,
    GET_USERS_SUCCESS,
    BASE_URL,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAILURE

} from '../constants.js'



const postUsersLoginSuccess = user_data => {
    return {
        type: POST_USERS_LOGIN_SUCCESS,
        data: user_data
    }
}

const postUsersLoginFailure = error => {
    return {
        type: POST_USERS_LOGIN_FAILURE,
        error: error
    }
}

const postUsersRegistrationSuccess = user_data => {
    return {
        type: POST_USERS_REGISTER_SUCCESS,
        data: user_data
    }
}

const postUsersRegistrationFailure = error => {
    return {
        type: POST_USERS_REGISTER_FAILURE,
        error: error
    }
}

const getUsersSuccess = users => {
    return {
        type: GET_USERS_SUCCESS,
        user_users: users
    }
}

const getCountriesSuccess = countries => {
    console.log("here in side get ZCoukalsd");
    return {
        type: GET_COUNTRIES_SUCCESS,
        countries: countries
    }
}

export const userGetUsers = (payload) => {
    return async (dispatch) => {
        await axios.get(`${BASE_URL}/api/users`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                dispatch(getUsersSuccess(res.data));

            })
            .catch(error => {
                //error.message is the error description
                console.log("error get users", error);
                // const errorMsg = error.response.data;
                // dispatch(postUsersRegistrationFailure(errorMsg));
            })
    }
}


export const postUsersRegistration = (payload) => {
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/api/register`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                dispatch(postUsersRegistrationSuccess(res));

            })
            .catch(error => {
                //error.message is the error description
                console.log("error", error);
                const errorMsg = error.response.data;
                dispatch(postUsersRegistrationFailure(errorMsg));
            })
    }
}

export const postUsersRegistrationContributor = (payload) => {
    console.log("postUsersRegistrationContributor", payload);
    return async (dispatch) => {
        console.log("postUsersRegistrationContributor1", payload);
        await axios.post(`${BASE_URL}/api/register-contributor`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                dispatch(postUsersRegistrationSuccess(res));

            })
            .catch(error => {
                //error.message is the error description
                console.log("error", error);
                const errorMsg = error.response.data;
                dispatch(postUsersRegistrationFailure(errorMsg));
            })
    }
}

export const postUsersLogin = (payload) => {
    return async (dispatch) => {
        await axios.post(`${BASE_URL}/api/login`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                dispatch(postUsersLoginSuccess(res.data));

            })
            .catch(error => {
                //error.message is the error description
                console.log("error", error);
                const errorMsg = error.response.data;
                dispatch(postUsersLoginFailure(errorMsg));
            })
    }
}

export const getCountries = (payload) => {
    return async (dispatch) => {
        await axios.get(`${BASE_URL}/api/users/country`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log("countryies res.data", res.data.countries);
                dispatch(getCountriesSuccess(res.data.countries));

            })
            .catch(error => {
                //error.message is the error description
                console.log("error get users", error);
                // const errorMsg = error.response.data;
                // dispatch(postUsersRegistrationFailure(errorMsg));
            })
    }
}
