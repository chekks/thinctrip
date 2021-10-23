import React from 'react';
import tp from '../../../assets/scss/user/contributor/contributorPackage.module.scss';

// Component
import TextField from '../../../component/ui/Inputs/TextField';

const TourInfo = () => {
    return (
        <>
            <div className={tp.info_container}>
                <TextField
                    readOnly
                    className="form-control"
                    type="text"
                    size="lg"
                    placeholder="Tour Number"
                    name="sharedBy"
                    width="50"
                    // onChange={handleChangeTextEditor}
                    id="shared_by"
                />
                <TextField
                    readOnly
                    className="form-control"
                    type="text"
                    size="lg"
                    placeholder="Date Created"
                    name="sharedBy"
                    width="50"
                    // onChange={handleChangeTextEditor}
                    id="shared_by"
                />
                <TextField
                    readOnly
                    className="form-control"
                    type="text"
                    size="lg"
                    placeholder="Shared By"
                    name="sharedBy"
                    width="50"
                    // onChange={handleChangeTextEditor}
                    id="shared_by"
                />
                <TextField
                    readOnly
                    className="form-control"
                    type="text"
                    size="lg"
                    placeholder="Share-able Link"
                    name="sharedBy"
                    width="50"
                    // onChange={handleChangeTextEditor}
                    id="shared_by"
                />
            </div>
        </>
    )
}

export default TourInfo
