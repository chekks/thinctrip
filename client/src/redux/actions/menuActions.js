import axios from 'axios';
import LocalStorage from '../../helpers/LocalStorage.js';
import {
    GET_MENU_SUCCESS,
    GET_MENU_FAILURE,
    BASE_URL

} from '../constants.js'

const getMenuSuccess = menu => {
    return {
        type: GET_MENU_SUCCESS,
        data: menu
    }
}

const getMenuFailure = error => {
    return {
        type: GET_MENU_FAILURE,
        error: error
    }
}


export const getMenu = (user_role) => {
    return async (dispatch) => {
        let email = LocalStorage.get('email');
        let user_role = LocalStorage.get('user_role');
        let params = `email=${email}&user_role=${user_role}`;
        await axios.get(`${BASE_URL}/api/menu?${params}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log("getting menu", res.data);
                dispatch(getMenuSuccess(res.data.data));

            })
            .catch(error => {
                console.warn("GET MENU ERROR:", error);
                dispatch(getMenuFailure(error));

            })
    }
}
