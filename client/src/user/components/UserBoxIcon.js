import React, { Component } from 'react'
import {
    FaChartPie,
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
    FaCommentAlt,
    FaIdCard,
    FaFileInvoiceDollar,
    FaRegAddressBook,
    FaEnvelopeOpenText,
    FaCloudUploadAlt
} from "react-icons/fa";

export default class UserBoxIcon extends Component {
    components = {
        FaChartPie: <FaChartPie />,
        FaMapMarkedAlt: <FaMapMarkedAlt />,
        FaPlane: <FaPlane />,
        FaComments: <FaComments />,
        FaFolderOpen: <FaFolderOpen />,
        FaRegCalendarAlt: <FaRegCalendarAlt />,
        FaMoneyBill: <FaMoneyBill />,
        FaNewspaper: <FaNewspaper />,
        FaRegFileAlt: <FaRegFileAlt />,
        FaPercent: <FaPercent />,
        FaConciergeBell: <FaConciergeBell />,
        FaWpforms: <FaWpforms />,
        FaPaintBrush: <FaPaintBrush />,
        FaBookOpen: <FaBookOpen />,
        FaUserAlt: <FaUserAlt />,
        FaMapMarkerAlt: <FaMapMarkerAlt />,
        FaWrench: <FaWrench />,
        FaCommentAlt: <FaCommentAlt />,
        FaIdCard: <FaIdCard />,
        FaFileInvoiceDollar: <FaFileInvoiceDollar />,
        FaRegAddressBook: <FaRegAddressBook />,
        FaEnvelopeOpenText: <FaEnvelopeOpenText />,
        FaCloudUploadAlt: <FaCloudUploadAlt />
    };

    render() {
        return (
            <React.Fragment>
                {this.components[this.props.icon]}
            </React.Fragment>
        )
    }
}


