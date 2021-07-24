import React, { Component } from 'react'
import { FaNewspaper } from "react-icons/fa";

import DataTable from '../component/ui/DataTable'

export default class AdminArticles extends Component {
    render() {
        return (
            <React.Fragment>
                <DataTable/>
            </React.Fragment>
        )
    }
}
