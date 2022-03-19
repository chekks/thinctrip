import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaNewspaper } from "react-icons/fa";
import Button from '../../component/ui/Button';
import tp from '../../assets/scss/user/userTour.module.scss';
import '../../assets/scss/user/userMain.module.scss';

import DataTable from '../../component/ui/DataTable';
import UserHeader from '../components/UserHeader';

import { FaPlus, FaFileCsv } from 'react-icons/fa'
import UserSidepanel from '../components/UserSidepanel';
import UserSidebar from '../components/sidebar/UserSidebar';

import { getAllTours } from '../../redux'


export default function SubmittedTours() {

    const headers = ["Tour Name", "Package Num", , "Status", "Departure", "Arrival", "Actions"];
    const columns = {
        enabled: ["title", "package_num", "departure", "arrival", "status", "actions"],
        disabled: []
    }

    const dispatch = useDispatch();
    const all_tours = useSelector((state) => state.tour.get_all_tours);
    console.log("all_tours", all_tours);

    useEffect(() => {
        //window.addEventListener("button", showButton);
        dispatch(getAllTours());
        return () => {

        }
    }, [])

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
            action: ""
        },
        {
            type: "delete",
            action: ""
        },
    ];

    return (
        <>
            <div className="user_main">
                <UserSidebar />
                <div className="user_wrapper">
                    <div className="user_container">
                        <UserHeader
                            name="Submitted Tours"
                            description="Clients say it best...real feedback from real clients!"
                        />

                        <div className={tp.action}>
                            <Button
                                type="button"
                                variant="flat"
                                size="default"
                                disabled={false}
                            >
                                Export <FaFileCsv />
                            </Button>

                            <Button
                                type="button"
                                variant="flat"
                                size="default"
                                disabled={false}
                            >
                                Add New <FaPlus />
                            </Button>
                        </div>

                        <DataTable
                            headers={headers}
                            data={all_tours}
                            columns={columns}
                            actions={actions}
                        />
                    </div>
                </div>
            </div>
            <UserSidepanel />
        </>
    )
}
