import React, { Component } from 'react'
import { FaNewspaper } from "react-icons/fa";
import Button from '../../component/ui/Button';
import tp from '../../assets/scss/admin/adminTour.module.scss';

import DataTable from '../../component/ui/DataTable'
import AdminHeader from '../components/AdminHeader'

import { FaPlus, FaFileCsv } from 'react-icons/fa'

export default class TourPackage extends Component {
    
    render() {
        const headers = ["Package Num", "Tour Name", "Availability", "Date Created", "Status", "Actions"];
        const columns = {
            enabled : ["package_num", "tour_name", "availability", "date_created", "status", "actions"],
            disabled: []
        }

        const data = [
            {
                package_num: "# 49323",
                tour_name: "North to South - 15D & 14N",
                availability: "2021-01-02",
                date_created: "2021-01-02",
                status: "Published"
            },
            {
                package_num: "# 99018",
                tour_name: "FROM HIGHLANDS TO ISLANDS — 12D & 11N",
                availability: "2021-01-02",
                date_created: "2021-01-02",
                status: "Published"
            }
        ];

        const actions = [
            {
                type: "edit",
                action : ""
            },
            {
                type: "delete",
                action : ""
            },
        ];
        
        return (
            <React.Fragment>
                <AdminHeader
                    name="Tour Packages"
                    description="Clients say it best...real feedback from real clients!"
                />

                <div className={tp.action}>
                    <Button 
                        type="button" 
                        variant="flat" 
                        size="default"
                        disabled={false}
                        >
                        Export <FaFileCsv/> 
                    </Button>

                    <Button 
                        type="button" 
                        variant="flat" 
                        size="default"
                        disabled={false}
                        >
                        Add New <FaPlus/> 
                    </Button>
                </div>

                <DataTable
                    headers = {headers}
                    data = {data}
                    columns = {columns}
                    actions = {actions}
                />
            </React.Fragment>
        )
    }
}
