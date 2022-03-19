import {
    UPDATE_SHARE_YOUR_TOUR,
    UPDATE_SHARE_YOUR_TOUR_DETAILS,
    UPDATE_SHARE_YOUR_TOUR_ITINERARY,
    UPDATE_SHARE_YOUR_TOUR_GALLERY,
    POST_TOUR_SUCCESS,
    POST_TOUR_FAILURE,
    GET_TOUR_SUCCESS,

} from '../constants.js'

const initialState = {
    loading: true,
    data: {},
    errors: [],
    share_your_tour: {
        title: "FROM HIGHLANDS TO ISLANDS — 12D & 11N",
        days: "15 days",
        departure: "Manila",
        arrival: "Siargao",
        details: [
            {
                id: "1",
                title: "Tips",
                data: [
                    "Best season to experience the island and its beaches are from December to May, the dry season in the Philippines.",
                    "Bring beach necessities such as swimsuit, rashguard, shirts, shorts, slippers, eyewear such as shades and goggles, towels, and a hat or cap. ",
                    "Wear sunblock so you can avoid getting sunburnt by the blazing heat of the sun.",
                    "Drinking is not allowed on White Beach, which is why beachfront parties are banned. You can only drink alcoholic beverages inside the approved bars. ",
                    "Take only memories and leave only footprints"
                ],
            }
        ],
        itinerary: [
            {
                id: 1,
                title: 'Starting Point',
                description: 'Stop: 60 minutes - Admission Included',
                content: 'Breakfast. Prepare for a 3-hour journey that passes through the countryside scenery of Puerto Princesa until your reach the town of Taytay.'
            }, {
                id: 2,
                title: 'Manila - Puerto Princesa 2',
                description: 'Stop: 60 minutes - Admission Included',
                content: 'Breakfast. Prepare for a 3-hour journey that passes through the countryside scenery of Puerto Princesa until your reach the town of Taytay.'
            }, {
                id: 3,
                title: 'Manila - Puerto Princesa 3',
                description: 'Stop: 60 minutes - Admission Included',
                content: 'Breakfast. Prepare for a 3-hour journey that passes through the countryside scenery of Puerto Princesa until your reach the town of Taytay.'
            }, {
                id: 4,
                title: 'Manila - Puerto Princesa 4',
                description: 'Stop: 60 minutes - Admission Included',
                content: 'Breakfast. Prepare for a 3-hour journey that passes through the countryside scenery of Puerto Princesa until your reach the town of Taytay.'
            }, {
                id: 5,
                title: 'End Point',
                description: 'Stop: 60 minutes - Admission Included',
                content: 'Breakfast. Prepare for a 3-hour journey that passes through the countryside scenery of Puerto Princesa until your reach the town of Taytay.'
            },
        ],
        gallery: [
            {
                id: 1,
                image: "http://127.0.0.1:8000/api/storage/temp-img.png",
                file_name: "temp_img",
                file_type: "image/png",
                sort_order: 1
            }, {
                id: 2,
                image: "http://127.0.0.1:8000/api/storage/temp-img.png",
                file_name: "temp_img",
                file_type: "image/png",
                sort_order: 2
            }, {
                id: 3,
                image: "http://127.0.0.1:8000/api/storage/temp-img.png",
                file_name: "temp_img",
                file_type: "image/png",
                sort_order: 3
            }, {
                id: 4,
                image: "http://127.0.0.1:8000/api/storage/temp-img.png",
                file_name: "temp_img",
                file_type: "image/png",
                sort_order: 4
            }, {
                id: 5,
                image: "http://127.0.0.1:8000/api/storage/temp-img.png",
                file_name: "temp_img",
                file_type: "image/png",
                sort_order: 5
            }, {
                id: 6,
                image: "http://127.0.0.1:8000/api/storage/temp-img.png",
                file_name: "temp_img",
                file_type: "image/png",
                sort_order: 6
            }
        ]
    },
    get_all_tours: []
}

const tourReducer = (state = initialState, action) => {
    console.log("here in reducer", action.data);
    switch (action.type) {
        case UPDATE_SHARE_YOUR_TOUR:
            return {
                ...state,
                loading: false,
                share_your_tour: action.data

            }
        case UPDATE_SHARE_YOUR_TOUR_DETAILS:
            return {
                ...state,
                loading: false,
                share_your_tour: {
                    ...state.share_your_tour,
                    details: action.data
                }
            }
        case UPDATE_SHARE_YOUR_TOUR_GALLERY:
            return {
                ...state,
                loading: false,
                share_your_tour: {
                    ...state.share_your_tour,
                    gallery: action.data
                }
            }
        case UPDATE_SHARE_YOUR_TOUR_ITINERARY:

            return {
                ...state,
                loading: false,
                share_your_tour: {
                    ...state.share_your_tour,
                    itinerary: action.data
                }
            }
        case GET_TOUR_SUCCESS:
            return {
                ...state,
                loading: false,
                get_all_tours: action.data
            }
        default:
            return state
    }
}

export default tourReducer;