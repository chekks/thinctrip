import React, { useState } from 'react'
import tp from '../../../assets/scss/user/contributor/contributorPackage.module.scss';
import CkEditor from '../../../component/ui/CkEditor';

// Component
import TextField from '../../../component/ui/Inputs/TextField';

const TourDetails = () => {
    const [tourTitle, setTourTitle] = useState();
    const [titleText, settitleText] = useState();
    const [showModal, setShowModal] = useState(true);

    const toggleAccordion = () => {
        setShowModal(!showModal);
    }

    const setTitle = (e) => {
        setTourTitle(e.target.value);
    }
    return (
        <>
            <div className={tp.details_container}>
                <div className="accordion">
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
                        <CkEditor />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourDetails
