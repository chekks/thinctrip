import { React, useState } from 'react'
import s from '../../assets/scss/admin/adminSidepanel.module.scss'
import styled from 'styled-components'
import { IconContext } from 'react-icons/lib'

// Image
import avatar from '../../assets/images/icons/man.png'
import { 
    FaAngleDown, 
    FaPlane, 
    FaUserAlt, 
    FaRegFlag, 
    FaBriefcase, 
    FaBars, 
    FaTimes,
    FaThList 
} from 'react-icons/fa'
import Calendar from '../../component/ui/Calendar'

export const SidePanel = styled.div`
    right: ${props => props.click ? 0 : '-300px'};
`;

export const Toggle = styled.div`
    display: ${props => props.click ? 'none' : 'block'};
`;

const AdminSidepanel = (props) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <SidePanel className={s.sidePanel} onClick={handleClick} click={clicked}>

              <Toggle className={s.toggle} onCli    ck={handleClick} click={clicked}>
                  <FaThList />
              </Toggle>

            <div className={s.profile}>
                <div className={s.close}><FaTimes/></div>
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
        </SidePanel>
    )
}

export default AdminSidepanel
