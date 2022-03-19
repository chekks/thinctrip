import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import i from '../../../assets/scss/client/itinerary.module.scss'
import '../../../assets/scss/client/itinerary.scss'
import Accordion from '../../../component/Accordion'
import GoogleMap from '../../../component/GoogleMap'
import { updateShareYourTourItinerary } from '../../../redux'

//Component
import { itineraryData } from '../../../component/Data'
import UserBoxIcon from '../../components/UserBoxIcon'

const ContributorTourItinerary = (props) => {
    const share_your_tour_data = useSelector((state) => state.tour.share_your_tour);
    const itinerary = useSelector((state) => state.tour.share_your_tour.itinerary);
    const itinerary_length = itinerary.length;

    const dispatch = useDispatch();

    const formatIcon = (index) => {
        if (index == 0) {
            return <UserBoxIcon icon="FaPlaneDeparture" />;
        } else if (index + 1 == itinerary_length) {
            return <UserBoxIcon icon="FaPlaneArrival" />;
        } else {
            return index;
        }
    }

    useEffect(() => {
        return () => {
        }
    }, []);

    const editInput = (event) => {
        let temp_id = event.target.id;
        let id_split = temp_id.split("_");
        let id = id_split[0] + "_" + id_split[1] + "_" + id_split[2];
        let index = id_split[1];
        //console.log("id", id);
        console.log("the id", id);
        //document.getElementById(temp_id).classList.add("d-none");
        let arr = ["title", "description", "content"];


        if (document.getElementById("cr_itinerary_accordion_" + index).innerHTML == "See More") {
            document.getElementById("cr_itinerary_accordion_" + index).click();
        }

        setTimeout(() => {
            arr.map((data) => {
                document.getElementById(`cr_${data}_${index}_input`).classList.remove("d-none");
                document.getElementById(`cr_${data}_${index}_text`).classList.add("d-none")
            })
        }, 300);

        document.getElementById(`cr_${index}_submit`).classList.remove("d-none");
        document.getElementById(`cr_${index}_check_icon`).classList.remove("d-none");
        document.getElementById(`cr_${index}_pen_icon`).classList.add("d-none");
    }

    const setItinerary = (event, key) => {
        let name_split = event.target.name.split("_");
        let id = parseInt(name_split[2]);
        console.log("setting iterner", id);
        let temp_itinerary = [...itinerary];
        temp_itinerary[id][key] = event.target.value;
        // console.log("new details", temp_itinerary);

        dispatch(updateShareYourTourItinerary(temp_itinerary));
    }

    const submitChange = (event) => {
        let temp_id = event.target.id;
        let id_split = temp_id.split("_");
        let id = id_split[0] + "_" + id_split[1] + "_" + id_split[2];
        let index = id_split[1];
        //console.log("id", id);
        console.log("the id", id);
        //document.getElementById(temp_id).classList.add("d-none");
        let arr = ["title", "description", "content"];


        if (document.getElementById("cr_itinerary_accordion_" + index).innerHTML == "See More") {
            document.getElementById("cr_itinerary_accordion_" + index).click();
        }

        setTimeout(() => {
            arr.map((data) => {
                document.getElementById(`cr_${data}_${index}_input`).classList.add("d-none");
                document.getElementById(`cr_${data}_${index}_text`).classList.remove("d-none")
            })
        }, 300);

        document.getElementById(`cr_${index}_submit`).classList.add("d-none");
        document.getElementById(`cr_${index}_check_icon`).classList.add("d-none");
        document.getElementById(`cr_${index}_pen_icon`).classList.remove("d-none");


    }

    const moveItinerary = (event) => {
        console.log("mve itinerary:", event.target.id);
        let id_split = event.target.id.split("_");
        let id = parseInt(id_split[2]);
        let check_element = id_split[1];
        let toElement = check_element == "up" ? id - 1 : id + 1;

        const temp_itinerary = [...itinerary];
        let element = temp_itinerary[id];
        temp_itinerary.splice(id, 1);
        temp_itinerary.splice(toElement, 0, element);


        dispatch(updateShareYourTourItinerary(temp_itinerary));

    }

    return (
        <React.Fragment>
            <h1 className="mb-50 heading border-bottom flex-left">{props.icon}{props.title}</h1>
            <div className={i.wrapper}>
                <ul>
                    {itinerary.map((item, index) =>
                        < li className={i.item + " itinerary_li_con"} id={`itinerary_li_con_${index}`} key={index} >
                            <div className="itinerary_up_down_con hide">
                                {
                                    index != 0 ?
                                        <div className="itinerary_up_con">
                                            <div
                                                className="itinerary_up_con--foreground"
                                                id={"itinerary_up_" + index}
                                                onClick={moveItinerary}></div>
                                            <UserBoxIcon icon="FaArrowUp"></UserBoxIcon>
                                        </div> : ""
                                }
                                {
                                    itinerary.length != index + 1 ?
                                        <div className="itinerary_down_con">
                                            <div
                                                className="itinerary_down_con--foreground"
                                                id={"itinerary_down_" + index}
                                                onClick={moveItinerary}></div>
                                            <UserBoxIcon icon="FaArrowDown"></UserBoxIcon>
                                        </div> : ""
                                }

                            </div>
                            <div className={i.trail}>
                                <span>
                                    {formatIcon(index)}
                                </span>
                            </div>

                            <div className={i.details}>
                                <div className="contributor_header_details_icon cr_tour_itinerary_edit_icon" >
                                    <div
                                        id={`cr_${index}_edit`}
                                        className="contributor_header_small_foreground"
                                        onClick={editInput}
                                    ></div>
                                    <div id={`cr_${index}_pen_icon`} ><UserBoxIcon icon="FaPen" /></div>
                                    <div id={`cr_${index}_submit`}
                                        className="contributor_header_small_foreground d-none"
                                        onClick={submitChange}
                                    ></div>
                                    <div id={`cr_${index}_check_icon`} className="d-none"><UserBoxIcon icon="FaCheck" id="" onClick={submitChange} />
                                    </div>
                                </div>

                                <div>
                                    <h4 id={`cr_title_${index}_text`}>{item.title}</h4>
                                    <input
                                        type="text"
                                        value={item.title}
                                        className="cr_input form-control d-none"
                                        name={`cr_title_${index}`}
                                        id={`cr_title_${index}_input`}
                                        onChange={(event) => setItinerary(event, "title")}
                                    />
                                </div>
                                <div>
                                    <p id={`cr_description_${index}_text`}>{item.description}</p>
                                    <input
                                        type="text"
                                        value={item.description}
                                        className="cr_input form-control d-none"
                                        name={`cr_description_${index}`}
                                        id={`cr_description_${index}_input`}
                                        onChange={(event) => setItinerary(event, "description")}
                                    />
                                </div>

                                <Accordion
                                    toggle_id={`cr_itinerary_accordion_${index}`}>
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/e0/2b/c0/white-beach-puerto-galera.jpg" />
                                    <div>
                                        <p id={`cr_content_${index}_text`}>{item.content}</p>
                                        <textarea
                                            type="text"
                                            value={item.content}
                                            className="cr_input form-control d-none"
                                            name={`cr_content_${index}`}
                                            id={`cr_content_${index}_input`}
                                            rows="5"
                                            onChange={(event) => setItinerary(event, "content")}></textarea>
                                    </div>
                                </Accordion>
                            </div>
                        </li>
                    )}
                </ul>

                <div className={i.map}>
                    {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12pO_Q4yf2Ff3YSsmBeJYiK6ztKpkOasW" width="380" height="480"></iframe> */}
                    <GoogleMap />
                </div>
            </div>
        </React.Fragment >
    )
}

export default ContributorTourItinerary