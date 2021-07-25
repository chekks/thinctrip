import React from 'react'
import d from '../assets/scss/admin/adminDashboard.module.scss'


// Component
import AdminHeader from './components/AdminHeader'
import AdminWidgets from '../component/widgets/AdminWidgets'

export default function AdminDashboard() {
    return (
        <React.Fragment>
            <AdminHeader
                name="Dashboard"
                description="All details about your selling Tour Packages are here..."
            />

            <div className={d.container}>
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
                />

                <AdminWidgets
                    value="301"
                    description="Number of tour packages"
                />     

                <AdminWidgets
                    value="700+"
                    description="Number of users"
                />       
            </div>

        </React.Fragment>
    )
}
