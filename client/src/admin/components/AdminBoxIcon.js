import React, { Component } from 'react'
import { 
    FaChartPie ,
    FaMapMarkedAlt,
    FaPlane,
    FaComments,
    FaFolderOpen,
    FaRegCalendarAlt,
    FaMoneyBill,
    FaNewspaper,
    FaRegFileAlt,
    FaPercent,
    FaConciergeBell,
    FaWpforms,
    FaPaintBrush,
    FaBookOpen,
    FaUserAlt,
    FaMapMarkerAlt,
    FaWrench,
    FaCommentAlt
} from "react-icons/fa";

export default class AdminBoxIcon extends Component {
    components = {
        FaChartPie: <FaChartPie/>,
        FaMapMarkedAlt: <FaMapMarkedAlt />,
        FaPlane: <FaPlane />,
        FaComments : <FaComments/>,
        FaFolderOpen: <FaFolderOpen/>,
        FaRegCalendarAlt: <FaRegCalendarAlt/>,
        FaMoneyBill: <FaMoneyBill />,
        FaNewspaper: <FaNewspaper />,
        FaRegFileAlt: <FaRegFileAlt />,
        FaPercent: <FaPercent />,
        FaConciergeBell: <FaConciergeBell />,
        FaWpforms: <FaWpforms/>,
        FaPaintBrush: <FaPaintBrush/>,
        FaBookOpen: <FaBookOpen />,
        FaUserAlt: <FaUserAlt/>,
        FaMapMarkerAlt: <FaMapMarkerAlt />,
        FaWrench : <FaWrench />,
        FaCommentAlt: <FaCommentAlt/>
    };
    
    render() {
        return (
            <React.Fragment>
                {this.components[this.props.icon] }
            </React.Fragment>
        )
    }
}


