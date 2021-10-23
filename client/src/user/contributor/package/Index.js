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

const Index = () => {

    const [tabMenu, setTabMenu] = useState("Info");
    const [tourDetails, settourDetails] = useState();
    const [details, setDetails] = useState(['1']);

    const selectMenu = (id) => {
        console.log(id);
        let filter = document.getElementsByClassName("tour");
        for (let i = 0; i < filter.length; i++) {
            filter[i].classList.add("hide");
        }
        console.log("filter", filter);
        let toggleClassHide = document.getElementById(id);
        toggleClassHide.classList.toggle("hide");

        setTabMenu(id.charAt(0).toUpperCase() + id.slice(1));
    }

    const addDetails = (i) => {
        let d = details.concat(['']);
        console.log("details", d);
        let e = details.slice(0 + 1);
        console.log("e", e);
        setDetails(d);
    }

    console.log("tourDetails", tourDetails);

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
                                    <div onClick={addDetails}>{tabMenu == "Info" ? "" : <FaPlus />}</div>
                                </div>

                                <div id="info" className="tour">
                                    <TourInfo
                                    // id={id}
                                    // key={id}

                                    />
                                </div>

                                <div id="details" className="hide tour">
                                    {details.map((details) =>
                                        <TourDetails />
                                    )}
                                </div>

                                <div id="itinerary" className="hide tour">
                                    <TourItinerary />
                                </div>

                                <div id="gallery" className="hide tour">
                                    <h1>GALLERY</h1>
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
