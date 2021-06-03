import React, { useState } from 'react';
import t from '../assets/scss/client/tourSingle.module.scss'

const Accordion = (props) => {
    const [on, setOn] = useState(false);

    const isToggle = () =>{
        setOn(!on);
    }

    return (
        <React.Fragment>
            <div>{on && props.children}</div>
            <span className={t.seeMore} onClick={isToggle}>{on ? 'See Less' : 'See More'}</span>
        </React.Fragment>
    )
}

export default Accordion
