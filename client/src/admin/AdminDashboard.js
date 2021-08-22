import React from 'react'
import d from '../assets/scss/admin/adminDashboard.module.scss'
import s from '../assets/scss/admin/adminSidepanel.module.scss'
import avatar from '../assets/images/icons/man.png'


// Component
import AdminHeader from './components/AdminHeader'
import AdminWidgets from '../component/widgets/AdminWidgets'

export default function AdminDashboard() {
    return (
        <React.Fragment>
            <AdminHeader
                name="Hello, Vendor!"
                description="All details about your selling Tour Packages are here..."
            />

            <div className={d.container}>
                <div className={d.analytics}>
                    <AdminWidgets
                        value="700+"
                        description="Number of users"
                    >

                        <div className="details-wrapper">
                            <span>Contributor</span>
                            <span>456</span>
                        </div>
                        <div className="details-wrapper">
                            <span>Customer</span>
                            <span>256</span>
                        </div>
                        <div className="details-wrapper">
                            <span>Vendor</span>
                            <span>37</span>
                        </div>
                        <div className="details-wrapper">
                            <span>New Users</span>
                            <span>10+</span>
                        </div>

                    </AdminWidgets>

                    <AdminWidgets
                        value="22.4k"
                        description="Number of bookings"
                    >
                        <p className="text-muted">Neque porro quisquam est qui dolorem</p>
                    </AdminWidgets>

                    <AdminWidgets
                        value="301"
                        description="Number of tour packages"
                    >
                        <p className="text-muted">Neque porro quisquam est qui dolorem</p>
                    </AdminWidgets>

                    <AdminWidgets
                        value="700+"
                        description="Number of users"
                    >     
                        <p className="text-muted">Neque porro quisquam est qui dolorem</p>
                    </AdminWidgets>  
                </div>

                <div className={d.tour}>
                    <div className={d.widget}>
                        <h1>Customer Payment Tracker</h1>

                        <ul>
                            <li>
                                <img src={avatar} alt="" />
                                <div className="flex-start pl-15">
                                    Little Indian
                                    <span>Pending</span>
                                </div>
                            </li>

                            <li>
                                <img src={avatar} alt="" />
                                <div className="flex-start pl-15">
                                Little Indian
                                    <span >Approved</span>
                                </div>
                            </li>

                            <li>
                                <img src={avatar} alt="" />
                                <div className="flex-start pl-15">
                                Little Indian
                                </div>
                                <span>Pending</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
