import React, { Component } from 'react'
import { FaNewspaper } from "react-icons/fa";

import DataTable from '../component/ui/DataTable'
import AdminHeader from './components/AdminHeader'

export default class AdminArticles extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminHeader
                    name="Testimonials"
                    description="Clients say it best...real feedback from real clients!"
                />
                <DataTable/>
            </React.Fragment>
        )
    }
}
