import React from 'react'
import s from '../../assets/scss/admin/adminSidepanel.module.scss'

// Image
import avatar from '../../assets/images/icons/man.png'
import { FaAngleDown, FaPlane, FaUserAlt, FaRegFlag, FaBriefcase } from 'react-icons/fa'
import Calendar from '../../component/ui/Calendar'

const AdminSidepanel = (props) => {
    return (
        <React.Fragment>
            <div className={s.profile}>
                <div className={`${s.profileImage} pr-15`}>
                    <img src={avatar} alt="Profile" />
                </div>

                <div className={`${s.profileInfo} pr-15`}>
                    <span className={s.profileName}>Jeremy Zuck</span>
                    <span className={`${s.profilePosition} text-muted pt-5`}>Traveler Enthusiast</span>
                </div>

                <FaAngleDown/>
            </div>

            <div className={s.report}>
                <div className={s.reportWrapper}>
                    <span className={s.reportIcon}><FaPlane/></span>
                    <span className={s.reportTotal}>1.2k</span>
                    <span className={`${s.reportName} text-muted`}>Bookings</span>
                </div>

                <div className={s.reportWrapper}>
                    <span className={s.reportIcon}><FaUserAlt/></span>
                    <span className={s.reportTotal}>2.8k</span>
                    <span className={`${s.reportName} text-muted`}>Users</span>
                </div>

                <div className={s.reportWrapper}>
                    <span className={s.reportIcon}><FaRegFlag/></span>
                    <span className={s.reportTotal}>55.2k</span>
                    <span className={`${s.reportName} text-muted`}>Sales</span>
                </div>
            </div>

            <Calendar/>

            <div className={s.todo}>
                <h1>Pending list</h1>
                <span className={`${s.todoDate} text-muted`}>July 17, 2021</span>

                <div className={s.todo}>
                    <ul>
                        <li>
                            <span className={s.reportIcon}><FaUserAlt/></span>
                            <div className="flex-start pl-15">
                                Vendor Approvals 
                                <span className="text-muted">There are 36 pending</span>
                            </div>
                        </li>

                        <li>
                            <span className={s.reportIcon}><FaBriefcase/></span>
                            <div className="flex-start pl-15">
                            Booking Payments
                                <span className="text-muted">There are 36 pending</span>
                            </div>
                        </li>

                        <li>
                            <span className={s.reportIcon}><FaPlane/></span>
                            <div className="flex-start pl-15">
                            Tour Package for approvals
                                <span className="text-muted">There are 36 pending</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminSidepanel
