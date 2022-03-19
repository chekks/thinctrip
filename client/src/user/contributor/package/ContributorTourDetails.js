import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import t from '../../../assets/scss/client/tourDetails.module.scss';
import { BsCheck } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import UserBoxIcon from '../../components/UserBoxIcon';
import { updateShareYourTourDetails } from '../../../redux'


const ContributorTourDetails = (props) => {

    const details = useSelector((state) => state.tour.share_your_tour.details);
    console.log("detailsssss", details);
    const tips = [];
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
        }
    }, []);

    const addDetails = (event) => {
        let temp_details = [...details];
        let temp_details_length = temp_details.length;
        let temp_data_to_push = {
            id: temp_details_length + 1,
            title: "Title",
            data: [
                "Lorem ipsum dolor amet dolor"
            ],
        }

        temp_details.push(temp_data_to_push);

        dispatch(updateShareYourTourDetails(temp_details));
        setTimeout(() => {
            document.getElementById(`cr_${temp_data_to_push.title.toLowerCase()}_${temp_data_to_push.id}_edit`).click();
            document.getElementById(`cr_${temp_data_to_push.title.toLowerCase()}_${temp_data_to_push.id}_0_edit`).click();
        }, 300);
    }

    const editInput = (event) => {
        //console.log("edit input");
        let temp_id = event.target.id;
        let id_split = temp_id.split("_");
        let id = id_split[0] + "_" + id_split[1] + "_" + id_split[2];
        //console.log("id", id);

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
        let id = id_split[0] + "_" + id_split[1] + "_" + id_split[2];

        document.getElementById(temp_id).classList.add("d-none");
        document.getElementById(id + "_input").classList.add("d-none");
        document.getElementById(id + "_text").classList.remove("d-none")
        document.getElementById(id + "_edit").classList.remove("d-none");
        document.getElementById(id + "_check_icon").classList.add("d-none");
        document.getElementById(id + "_pen_icon").classList.remove("d-none");
    }

    const setSubDetailsTitle = (event) => {
        let name_split = event.target.name.split("_");
        let id = parseInt(name_split[1]) - 1;
        let temp_details = [...details];
        temp_details[id].title = event.target.value;
        console.log("new details", temp_details);

        dispatch(updateShareYourTourDetails(temp_details));
    }

    const setSubDetails = (event) => {
        let name_split = event.target.name.split("_");
        //title, id, index

        console.log("name_split", name_split);
        let id = parseInt(name_split[1]) - 1;
        let index = parseInt(name_split[2]);
        let temp_details = [...details];
        temp_details[id].data[index] = event.target.value;
        console.log("new details", temp_details);

        dispatch(updateShareYourTourDetails(temp_details));
    }

    const addSubDetails = (event) => {
        let temp_details = [...details];
        let id_split = event.target.id.split("_");
        //"cr", title, id
        let id = parseInt(id_split[1]) - 1;
        let temp_sub_details = temp_details[id].data;
        temp_sub_details.push("");
        // let tips_ = tips;
        dispatch(updateShareYourTourDetails(temp_details));
        setTimeout(() => {
            document.getElementById(`cr_tips_${temp_sub_details.length - 1}_edit`).click();
        }, 300);
    }

    const deleteSubDetails = (event) => {
        let temp_details = [...details];
        let id_split = event.target.id.split("_");
        let index = parseInt(id_split[2]);
        let id = parseInt(id_split[1]) - 1;
        let temp_sub_details = temp_details[id].data;
        console.log("temp_details[id]", temp_sub_details);

        temp_sub_details.splice(index, 1);

        dispatch(updateShareYourTourDetails(temp_details));
    }

    const formatTourDetailsHeader = (tour_details) => {
        let title = tour_details.title.toLowerCase();
        let id = tour_details.id;
        return <div className="cr_tour_details_header ">
            <div className="flex cr_tour_details_header_wrapper">
                <h3 id={`cr_${title}_${id}_text`} class="cr_tour_details_text">{tour_details.title} </h3>
                <input
                    type="text"
                    value={tour_details.title}
                    className="cr_input d-none form-control"
                    name={`${title}_${id}`}
                    id={`cr_${title}_${id}_input`}
                    onChange={setSubDetailsTitle}
                />
                <div className="contributor_small_icon cr_sub_details_icon" >

                    <div
                        id={`cr_${title}_${id}_edit`}
                        className="contributor_header_small_foreground"
                        onClick={editInput}
                    ></div>
                    <div id={`cr_${title}_${id}_pen_icon`}><UserBoxIcon icon="FaPen" /></div>

                    <div
                        id={`cr_${title}_${id}_submit`}
                        className="contributor_header_small_foreground d-none"
                        onClick={submitChange}
                    ></div>
                    <div id={`cr_${title}_${id}_check_icon`} className="d-none"><UserBoxIcon icon="FaCheck" id="" onClick={submitChange} /></div>

                </div>
            </div>

            <div className="contributor_small_icon contributor_add_icon" >
                <div
                    id={`${title}_${id}_add`}
                    className="contributor_header_small_foreground"
                    onClick={addSubDetails}
                ></div>
                <div id="cr_inclusive_add_icon"><UserBoxIcon icon="FaPlus" /></div>

            </div>
        </div>;
    }

    const formatTourDetailsContent = (tour_details) => {
        let title = tour_details.title.toLowerCase();
        let content = tour_details.data;
        let id = tour_details.id;
        return <ul>
            {
                content.map((data, index) => {
                    //console.log("data", data);
                    return (
                        <li>
                            <span><BsCheck /></span>
                            <div id={`cr_${title}_${index}_text`} class="cr_tour_details_text">{data}</div>
                            <input
                                type="text"
                                value={data}
                                className="cr_input d-none form-control"
                                name={`${title}_${id}_${index}`}
                                id={`cr_${title}_${index}_input`}
                                onChange={setSubDetails}
                            />
                            <div className="contributor_small_icon" >
                                <div
                                    id={`cr_${title}_${index}_edit`}
                                    className="contributor_header_small_foreground"
                                    onClick={editInput}
                                ></div>
                                <div id={`cr_${title}_${index}_pen_icon`}><UserBoxIcon icon="FaPen" /></div>

                                <div
                                    id={`cr_${title}_${index}_submit`}
                                    className="contributor_header_small_foreground d-none"
                                    onClick={submitChange}
                                ></div>
                                <div id={`cr_${title}_${index}_check_icon`} className="d-none"><UserBoxIcon icon="FaCheck" id="" onClick={submitChange} /></div>

                            </div>
                            <div className="contributor_small_icon cr_small_delete_icon" >
                                <div
                                    id={`${title}_${id}_${index}_delete`}
                                    className="contributor_header_small_foreground"
                                    onClick={deleteSubDetails}
                                ></div>
                                <div id={`cr_${title}_${index}_pen_icon`}><UserBoxIcon icon="FaTimes" /></div>

                            </div>

                        </li>
                    );
                })
            }

        </ul>
    }

    return (
        <React.Fragment>
            <div className="flex">
                <h1 className="title title-md border-b flex-left">{props.icon} {props.title}</h1>
                <div className="contributor_small_icon contributor_add_icon ml-10" >
                    <div
                        id="cr_details_add"
                        className="contributor_header_small_foreground"
                        onClick={addDetails}
                    ></div>
                    <div id="cr_inclusive_add_icon"><UserBoxIcon icon="FaPlus" /></div>

                </div>
            </div>

            {
                details.map((data) => {
                    console.log("alksdjalksjdlakjsd", data);
                    return <div className={t.details}>
                        <div className={t.includes}>
                            {formatTourDetailsHeader(data)}
                            {formatTourDetailsContent(data)}
                        </div>
                    </div>
                })
            }

        </React.Fragment>
    )
}

export default ContributorTourDetails