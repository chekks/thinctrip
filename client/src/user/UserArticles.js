import React, { Component } from 'react'
import { FaNewspaper } from "react-icons/fa";

import DataTable from '../component/ui/DataTable'
import UserHeader from './components/UserHeader'

export default class UserArticles extends Component {

    render() {
        const headers = ["Title", "Author", "Status", "Tour Package", "Date", "Actions"];
        const columns = {
            enabled: ["title", "author", "status", "tour_package", "date", "actions"],
            disabled: []
        }

        const data = [
            {
                id: 1,
                title: "Lorem ipsum",
                author: "John Doe",
                status: "Published",
                tour_package: "North to South - 15D & 14N",
                date: "2021-01-02"
            },
            {
                id: 2,
                title: "Lorem ipsum",
                author: "John Doe",
                status: "Published",
                tour_package: "North to South - 15D & 14N",
                date: "2021-01-02"
            }
        ];

        const actions = [
            {
                type: "edit",
                action: ""
            },
            {
                type: "delete",
                action: ""
            },
        ];

        return (
            <React.Fragment>
                <UserHeader
                    name="Testimonials"
                    description="Clients say it best...real feedback from real clients!"
                />
                <DataTable
                    headers={headers}
                    data={data}
                    columns={columns}
                    actions={actions}

                />
            </React.Fragment>
        )
    }
}
