import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import tp from '../../../assets/scss/user/contributor/contributorPackage.module.scss';
import CkEditor from '../../../component/ui/CkEditor';

// Component
import TextField from '../../../component/ui/Inputs/TextField';

const TourItinerary = (props) =>{
    const [tourTitle, setTourTitle] = useState();
    const [showModal, setShowModal] = useState(true);
    const [style, setStyle] = useState(false);

    const toggleAccordion = () => {
        setShowModal(!showModal);
    }

    const setTitle = (e) => {
        setTourTitle(e.target.value);
    }

    const handleMouseEnter = () => {
        setStyle(true);
    }
    const handleMouseLeave = ()=> {
        setStyle(false)
    }
    return (
        <>
            <div className={tp.details_container}>
                <div className="accordion" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div 
                        className={style ? 'remove_btn' : 'hide'}
                        onClick={props.removeDetail}
                    ><FaTimes/></div>
                    <div className="accordion_header" onClick={toggleAccordion}>
                        <h1>{tourTitle}</h1>
                    </div>
                    <div className={showModal ? 'accordion_body' : 'toggle_close'} id="1">
                        <TextField
                            className="form-control"
                            type="text"
                            size="lg"
                            placeholder="Title"
                            name="sharedBy"
                            width="50"
                            // onChange={handleChangeTextEditor}
                            id="shared_by"
                            onChange={setTitle}
                        />
                        <CkEditor 
                            description="Insert itineraries here ..."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourItinerary
