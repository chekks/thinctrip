import React, { useState } from 'react';
import m from '../../../assets/scss/user/userMain.module.scss';
import tp from '../../../assets/scss/user/contributor/contributorPackage.module.scss';

// Components
import UserSidebar from '../../components/sidebar/UserSidebar'
import UserHeader from '../../components/UserHeader'
import UserSidepanel from '../../components/UserSidepanel'
import TourInfo from '../../contributor/package/TourInfo';
import TourDetails from '../../contributor/package/TourDetails';
import TourItinerary from '../../contributor/package/TourItinerary';

import {
    FaInfo,
    FaListUl,
    FaMapMarkerAlt,
    FaImages,
    FaMapMarked,
    FaPlus
} from "react-icons/fa";
import TourGallery from './TourGallery';

const Index = () => {

    const [tabMenu, setTabMenu] = useState("Info");
    const [tourDetails, setTourDetails] = useState([<TourDetails />]);
    const [tourItineraries, setTourItineraries] = useState([<TourItinerary />]);

    const selectMenu = (id) => {
        let filter = document.getElementsByClassName("tour");
        for (let i = 0; i < filter.length; i++) {
            filter[i].classList.add("hide");
        }
        let toggleClassHide = document.getElementById(id);
        toggleClassHide.classList.toggle("hide");

        setTabMenu(id.charAt(0).toUpperCase() + id.slice(1));
    }

    const removeDetails = (detailsId) => {
        setTourDetails(tourDetails.filter(item => item.key !== detailsId));
        console.log("remove", tourDetails.filter(item => item.key !== detailsId));
    }

    const addDetails = () => {
        let detailsId = "details_" + tourDetails.length;
        setTourDetails(tourDetails.concat(
            <TourDetails
                key={detailsId}
                id={detailsId}
                removeDetail={removeDetails(detailsId)}
            />
        ));    
    }

    const addItineraries = () => {
        let itineraryId = "itinerary_" + tourItineraries.length;
        setTourItineraries(tourItineraries.concat(
            <TourItinerary
                key={itineraryId}
                id={itineraryId}
                // removeItinerary={removeItineraries(itineraryId)}
            />
        )); 
    }

    return (
        <>
            <div className={m.main}>
                <UserSidebar />
                <div className={m.wrapper}>
                    <div className={m.container}>
                        <UserHeader
                            name="Create Your Tour Package"
                            description="Loren Ipsum"
                        />

                        <div className={tp.tour_container}>
                            <div className={tp.tour_tab_menu}>
                                <ul>
                                    <li onClick={() => selectMenu("info")}><FaInfo />Tour Info</li>
                                    <li onClick={() => selectMenu("details")}><FaListUl />Tour Details</li>
                                    <li onClick={() => selectMenu("itinerary")}><FaMapMarkerAlt />Itinerary</li>
                                    <li onClick={() => selectMenu("gallery")}><FaImages />Gallery</li>
                                    <li onClick={() => selectMenu("map")}><FaMapMarked />Map</li>
                                </ul>
                            </div>

                            <div className={tp.tour_wrapper}>
                                <div className={tp.tour_header}>
                                    <h3>Tour {tabMenu}</h3>
                                    <div onClick={tabMenu == "details" ? addDetails : addItineraries}>
                                        {tabMenu == "Info" || tabMenu == "Gallery" || tabMenu == "Map" ? "" : <FaPlus />}
                                    </div>
                                </div>

                                <div id="info" className="tour">
                                    <TourInfo />
                                </div>

                                <div id="details" className="hide tour">
                                    {tourDetails.map(() =>
                                        <TourDetails />
                                    )}
                                </div>

                                <div id="itinerary" className="hide tour">
                                    {tourItineraries.map(() =>
                                        <TourItinerary />
                                    )}
                                </div>

                                <div id="gallery" className="hide tour">
                                    <TourGallery />
                                </div>

                                <div id="map" className="hide tour">
                                    <h1>map</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserSidepanel />
        </>
    )
}

export default Index
