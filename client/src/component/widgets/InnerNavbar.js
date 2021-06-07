import React from 'react'
import i from '../../assets/scss/client/innerNavbar.module.scss'

export default function InnerNavbar(props) {

    const ulClassName = () => {
        let added_class = "";
        if(props.align_text == "center"){
            added_class = i.menu_center;
        }
        return added_class == "" ? i.menu : i.menu+ " " + added_class;
    }


    return (
        <div className={i.menuWrapper}>
            <ul className={ulClassName()}>
                <li>Details</li>
                <li>Gallery</li>
                <li>Itinerary</li>
                <li>Map</li>
                <li>Reviews</li>
            </ul>
        </div>
    )
}
