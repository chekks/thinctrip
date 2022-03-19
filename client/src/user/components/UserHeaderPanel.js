import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { SidePanel, HeaderBg, TourPrice } from '../../mainStyles'
import "../../assets/scss/client/headerPanel.scss"
import "../../assets/scss/user/contributor/contributorShareYourTour.scss"
import { updateShareYourTour } from '../../redux'

// import '../assets/scss/function.scss'

//Component
import Currency from "../../component/Currency"
import EnquiryForm from '../../component/forms/EnquiryForm'
import GuideWidget from '../../component/widgets/GuideWidget'
import UserBoxIcon from './UserBoxIcon'
import { getDestination } from '../../redux'


const PageContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    justify-content: ${props => props.review ? "center" : "space-between"};
    bottom: ${props => props.review ? "30px" : "0"};

    ${props => props.review ?
        `flex-direction: column;
        align-items: center;
        height: 100%;`
        : ``}

    z-index: 9;

    h1{
        color: #fff;
        z-index: 6;
        font-size: 28px;
        font-weight: 500;
    }
    
    ${props => props.review ?
        `p{
            color: #ffffffc7;
            font-size: 14px;
            font-weight: 200;
            letter-spacing: 4px;
            border-bottom: 1px solid #ffffffc7;
        }`
        : ``}
`;

const UserHeaderPanel = (props) => {
    const dispatch = useDispatch();
    const [scroll, setScroll] = useState(false);
    const share_your_tour_data = useSelector((state) => state.tour.share_your_tour);

    useEffect(() => {
        //window.addEventListener("button", showButton);
        window.addEventListener("scroll", onScroll);
        dispatch(getDestination());
        return () => {

        }
    }, [])

    const onScroll = () => {
        if (window.scrollY >= 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const editInput = () => {
        document.getElementById("contributor_header_title").classList.remove("d-none");
        let input = document.getElementById("contributor_header_input");
        input.classList.add("d-none");
        document.getElementById("header_check_icon").classList.remove("d-none");
        document.getElementById("header_pen_icon").classList.add("d-none");
    }

    const submitChange = () => {
        document.getElementById("contributor_header_title").classList.add("d-none");
        let input = document.getElementById("contributor_header_input");
        input.classList.remove("d-none");
        document.getElementById("header_check_icon").classList.add("d-none");
        document.getElementById("header_pen_icon").classList.remove("d-none");
    }

    const setTitle = () => {

    }

    const setShareYourTourData = (event, key) => {
        let share_your_tour_data_ = share_your_tour_data;

        dispatch(updateShareYourTour({
            ...share_your_tour_data_,
            [key]: event.target.value
        }));
    }


    const HeaderContent = () => {
        if (props.type == 'tour') {
            return ([
                <PageContent className="contributor_header_panel">
                    <div className="header_container">
                        <div>
                            <h1 id="contributor_header_input">{props.title}</h1>
                            <input type="text" value={props.title} className="cr_header_title d-none" id="contributor_header_title" onChange={(event) => setShareYourTourData(event, "title")} />
                        </div>
                        <div className="">
                            <div id="header_pen_icon" className="contributor_header_icon" onClick={editInput}><UserBoxIcon icon="FaPen" /></div>
                            <div id="header_check_icon" className="contributor_header_icon d-none" onClick={submitChange}><UserBoxIcon icon="FaCheck" /></div>
                        </div>
                    </div>
                </PageContent>
            ])
        } else if (props.type == 'review') {
            return ([
                <PageContent review>
                    <h1>{props.title}</h1>
                    <p>By: Cheska Rivano</p>
                </PageContent>
            ])
        } else {
            return ([
                <PageContent>
                    <h1>{props.title}</h1>
                </PageContent>
            ])
        }
    }

    return (
        <React.Fragment>
            <HeaderBg src={props.bg} className="header_panel_container header_bg_default">
                <div className="header_panel">
                    {HeaderContent()}
                </div>
            </HeaderBg>
        </React.Fragment>
    )
}

export default UserHeaderPanel