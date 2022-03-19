import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Routes from '../../../Routes'
import UserSidebar from '../../components/sidebar/UserSidebar'
import UserSidepanel from '../../components/UserSidepanel'
import UserHeaderPanel from '../../components/UserHeaderPanel'
import { updateShareYourTour, addUpdateShareYourTour } from '../../../redux'

import "../../../assets/scss/user/contributor/contributorShareYourTour.scss"
import "../../../assets/scss/user/userMain.scss"
import "../../../assets/scss/client/tourSingle.scss"
import "../../../assets/scss/client/headerPanel.scss"

import {
    thumbData,
    articleData,
} from '../../../component/Data'

import Gallery from '../../../component/Gallery'
import Review from '../../../component/reviews/Review'
import TourSlider from '../../../component/TourSlider'
import Article from '../../../component/Article'

//Icons
import {
    FaRegClock,
    FaCalendarAlt,
    FaTicketAlt,
    FaUser,
    FaMapSigns,
    FaRegFileAlt,
    FaCameraRetro,
    FaPlaneDeparture,
    FaPlaneArrival,
    FaCommentAlt
} from 'react-icons/fa'

import UserBoxIcon from '../../components/UserBoxIcon'
import TourDetails from '../../../pages/tour/TourDetails'
import ContributorTourDetails from './ContributorTourDetails'
import ContributorTourItinerary from './ContributorTourItinerary'
import ContributorTourGallery from './ContributorTourGallery'
import Select from '../../../component/ui/Inputs/Select'
import Button from '../../../component/ui/Button'



const ShareYourTour = (props) => {

    const destination = useSelector((state) => state.destination.get_destination);
    const share_your_tour_data = useSelector((state) => state.tour.share_your_tour);
    const dispatch = useDispatch();

    useEffect(() => {
        //window.addEventListener("button", showButton);

        return () => {

        }
    }, [])

    const submitShareYourTour = () => {
        dispatch(addUpdateShareYourTour(share_your_tour_data));
        setTimeout(() => {
            window.location.href = "/contributor/submitted-tours";
        }, 1000);
    }

    const editInput = (event) => {
        let temp_id = event.target.id;
        let id_split = temp_id.split("_");
        let id = id_split[0] + "_" + id_split[1];


        //IF arrival or departure enable switch button
        let withSwitchArr = ['arrival', 'departure'];
        if (withSwitchArr.some(btn => temp_id.includes(btn))) {
            console.log("asdasdasd:", id + "_switch_icon");
            document.getElementById(id + "_switch_icon").classList.remove("d-none");
        }
        //END IF

        document.getElementById(temp_id).classList.add("d-none");
        document.getElementById(id + "_input").classList.remove("d-none");
        document.getElementById(id + "_text").classList.add("d-none")
        document.getElementById(id + "_submit").classList.remove("d-none");
        document.getElementById(id + "_check_icon").classList.remove("d-none");
        document.getElementById(id + "_pen_icon").classList.add("d-none");
    }

    const submitChange = (event) => {
        let temp_id = event.target.id;
        let id_split = temp_id.split("_");
        let id = id_split[0] + "_" + id_split[1];

        //IF arrival or departure enable switch button
        let withSwitchArr = ['arrival', 'departure'];
        if (withSwitchArr.some(btn => temp_id.includes(btn))) {
            console.log("asdasdasd:", id + "_switch_icon");
            document.getElementById(id + "_switch_icon").classList.add("d-none");
        }
        //END IF

        document.getElementById(temp_id).classList.add("d-none");
        document.getElementById(id + "_input").classList.add("d-none");
        document.getElementById(id + "_text").classList.remove("d-none")
        document.getElementById(id + "_edit").classList.remove("d-none");
        document.getElementById(id + "_check_icon").classList.add("d-none");
        document.getElementById(id + "_pen_icon").classList.remove("d-none");
    }


    console.log("destination1234", share_your_tour_data);
    //const [days, setDay] = useState("15days");
    const [departure, setDeparture] = useState("Manila");
    const [arrival, setArrival] = useState("Siargao");

    const setShareYourTourData = (event, key) => {
        let share_your_tour_data_ = share_your_tour_data;

        dispatch(updateShareYourTour({
            ...share_your_tour_data_,
            [key]: event.target.value
        }));
    }

    // const setNewDays = (event) => {
    //     setDay(event.target.value);
    // }

    const setNewDeparture = event => {
        setDeparture(event.target.value);
    }

    const setNewArrival = event => {
        setArrival(event.target.value);
    }

    const switchArrivalDeparture = event => {
        let share_your_tour_data_ = share_your_tour_data;
        dispatch(updateShareYourTour({
            ...share_your_tour_data_,
            arrival: share_your_tour_data_.departure,
            departure: share_your_tour_data_.arrival
        }));
    }

    return (
        <React.Fragment>
            <div className="user_main">
                <UserSidebar />
                <div className="user_wrapper">
                    <div className="user_container">
                        <div className="share_your_tour_container">
                            <UserHeaderPanel
                                type="tour"
                                title={share_your_tour_data.title}
                                bg="https://staging.thinctrip.com/wp-content/uploads/2019/09/bg_1.jpg"
                            />
                            <div className="tour_single">
                                {/* ************* Tour Info ************* */}
                                <div className="tour_header">
                                    <div className="tour_info user_tour_info">
                                        <ul>
                                            <li>
                                                <FaRegClock /><div id="cr_days_text">{share_your_tour_data.days}</div>
                                                <input type="text" value={share_your_tour_data.days} className="cr_input d-none form-control" id="cr_days_input" name="days" onChange={(event) => setShareYourTourData(event, "days")} />
                                                <div className="contributor_header_details_icon" >
                                                    <div
                                                        id="cr_days_edit"
                                                        className="contributor_header_foreground"
                                                        onClick={editInput}
                                                    ></div>
                                                    <div id="cr_days_pen_icon"><UserBoxIcon icon="FaPen" /></div>

                                                    <div
                                                        id="cr_days_submit"
                                                        className="contributor_header_foreground d-none"
                                                        onClick={submitChange}
                                                    ></div>
                                                    <div id="cr_days_check_icon" className="d-none"><UserBoxIcon icon="FaCheck" id="" onClick={submitChange} /></div>

                                                </div>
                                            </li>
                                            {/* <li>
                                                <FaPlaneDeparture />Siargao
                                                <div id="header_departure_pen_icon" className="contributor_header_details_icon"><UserBoxIcon icon="FaPen" /></div>
                                                <div id="header_departure_check_icon" className="contributor_header_details_icon d-none" ><UserBoxIcon icon="FaCheck" /></div>
                                            </li> */}
                                            <li>
                                                <FaPlaneDeparture /><div id="cr_departure_text">{share_your_tour_data.departure}</div>
                                                <Select name="cr_departure_input" id="cr_departure_input" className="cr_input d-none" onChange={(event) => setShareYourTourData(event, "departure")}>
                                                    {
                                                        destination.map((des) => {
                                                            if (des.name != share_your_tour_data.arrival) {
                                                                return <option
                                                                    selected={des.name == share_your_tour_data.departure}
                                                                    value={des.name}>{des.name}</option>
                                                            }
                                                        })
                                                    }
                                                </Select>
                                                <div className="contributor_header_details_icon" >
                                                    <div
                                                        id="cr_departure_edit"
                                                        className="contributor_header_foreground"
                                                        onClick={editInput}
                                                    ></div>
                                                    <div id="cr_departure_pen_icon"><UserBoxIcon icon="FaPen" /></div>

                                                    <div
                                                        id="cr_departure_submit"
                                                        className="contributor_header_foreground d-none"
                                                        onClick={submitChange}
                                                    ></div>
                                                    <div id="cr_departure_check_icon" className="d-none"><UserBoxIcon icon="FaCheck" id="" onClick={submitChange} /></div>

                                                </div>
                                                <div className="cr_header_switch_departure_icon contributor_header_details_icon d-none"
                                                    onClick={switchArrivalDeparture}
                                                    id="cr_departure_switch_icon">
                                                    <div ><UserBoxIcon icon="FaSwitch" /></div>
                                                </div>
                                            </li>
                                            <li><FaCalendarAlt />December 31, 2019</li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <FaUser />Tour Provider: Cedric Tenorio
                                            </li>
                                            <li>
                                                <FaPlaneArrival /><div id="cr_arrival_text">{share_your_tour_data.arrival}</div>

                                                <Select
                                                    name="cr_arrival"
                                                    className="cr_input d-none"
                                                    id="cr_arrival_input"
                                                    onChange={(event) => setShareYourTourData(event, "arrival")}>
                                                    {
                                                        destination.map((des) => {
                                                            if (des.name != share_your_tour_data.departure) {
                                                                return <option
                                                                    selected={des.name == share_your_tour_data.arrival}
                                                                    value={des.name}>{des.name}</option>
                                                            }
                                                        })
                                                    }
                                                </Select>

                                                <div className="contributor_header_details_icon" >
                                                    <div
                                                        id="cr_arrival_edit"
                                                        className="contributor_header_foreground"
                                                        onClick={editInput}
                                                    ></div>
                                                    <div id="cr_arrival_pen_icon"><UserBoxIcon icon="FaPen" /></div>


                                                    <div
                                                        id="cr_arrival_submit"
                                                        className="contributor_header_foreground d-none"
                                                        onClick={submitChange}
                                                    ></div>
                                                    <div id="cr_arrival_check_icon" className="d-none"><UserBoxIcon icon="FaCheck" id="" onClick={submitChange} /></div>

                                                </div>

                                                <div className="cr_header_switch_arrival_icon contributor_header_details_icon d-none"
                                                    onClick={switchArrivalDeparture}
                                                    id="cr_arrival_switch_icon">
                                                    <div ><UserBoxIcon icon="FaSwitch" /></div>
                                                </div>
                                            </li>
                                            <li><FaTicketAlt />Package # : 005</li>
                                        </ul>
                                    </div>

                                    <div className="tour_menu--wrapper user_tour_menu--wrapper">
                                        <ul className="tour_menu">
                                            <li>Details</li>
                                            <li>Gallery</li>
                                            <li>Itinerary</li>
                                            <li>Map</li>
                                            <li>Reviews</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="tour_wrapper user_tour_wrapper">
                                    <div className="tour_content">

                                        {/* ************* Tour Details ************* */}
                                        <div className="tour_details">
                                            <ContributorTourDetails
                                                title="Tour Details"
                                                icon={<FaRegFileAlt />}
                                            />
                                        </div>

                                        {/* ************* Itinerary ************* */}
                                        <div className="tour_itinerary">
                                            <ContributorTourItinerary
                                                title="Itinerary"
                                                icon={<FaMapSigns />}
                                            />
                                        </div>

                                        {/* ************* Gallery ************* */}
                                        <div className="tour_gallery">
                                            <ContributorTourGallery
                                                title="Gallery"
                                                icon={<FaCameraRetro />}
                                            />
                                        </div>

                                        <Button onClick={submitShareYourTour} variant="primary" className="">SAVE</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <UserSidepanel />
        </React.Fragment>
    )
}

export default ShareYourTour