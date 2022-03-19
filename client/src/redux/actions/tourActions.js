import axios from 'axios';
import {
    UPDATE_SHARE_YOUR_TOUR,
    UPDATE_SHARE_YOUR_TOUR_DETAILS,
    UPDATE_SHARE_YOUR_TOUR_ITINERARY,
    UPDATE_SHARE_YOUR_TOUR_GALLERY,
    POST_TOUR_SUCCESS,
    POST_TOUR_FAILURE,
    GET_TOUR_SUCCESS,
    BASE_URL

} from '../constants.js'

const postTourSuccess = menu => {
    return {
        type: POST_TOUR_SUCCESS,
        data: menu
    }
}

const postTourFailure = error => {
    return {
        type: POST_TOUR_FAILURE,
        error: error
    }
}

const getTourSuccess = menu => {
    return {
        type: GET_TOUR_SUCCESS,
        data: menu
    }
}

export const updateShareYourTour = data => {
    return {
        type: UPDATE_SHARE_YOUR_TOUR,
        data: data
    }
}

export const updateShareYourTourDetails = data => {
    console.log("action.data", data);
    return {
        type: UPDATE_SHARE_YOUR_TOUR_DETAILS,
        data: data
    }
}

export const updateShareYourTourGallery = data => {
    console.log("action.data", data);
    return {
        type: UPDATE_SHARE_YOUR_TOUR_GALLERY,
        data: data
    }
}


export const updateShareYourTourItinerary = data => {
    console.log("action.data", data);
    return {
        type: UPDATE_SHARE_YOUR_TOUR_ITINERARY,
        data: data
    }
}


export const addUpdateShareYourTour = payload => {
    return async (dispatch) => {
        let params = [];
        await axios.post(`${BASE_URL}/api/tour`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // console.log("getting menu", res.data);
                dispatch(postTourSuccess(res.data.data));

            })
            .catch(error => {
                // console.warn("GET MENU ERROR:", error);
                // dispatch(postTourFailure(error));

            })
    }
}

export const getAllTours = () => {
    return async (dispatch) => {
        await axios.get(`${BASE_URL}/api/tour/get_all`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                // console.log("getting menu", res.data);
                dispatch(getTourSuccess(res.data));

            })
            .catch(error => {
                // console.warn("GET MENU ERROR:", error);
                // dispatch(postTourFailure(error));

            })
    }

}
