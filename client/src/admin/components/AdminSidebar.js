import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import sb from '../../assets/scss/admin/adminSidebar.module.scss'
import AdminBoxIcon from './AdminBoxIcon'
import { IconContext } from 'react-icons/lib'

//icons
import { FaBars, FaTimes } from 'react-icons/fa'

//for deletion
import Logo from '../../assets/images/logo-default.png'

export const Sidebar = styled.div`
    @media screen and (max-width: 960px) {
        left: ${props => props.click ? 0 : '-255px'};
        box-shadow: ${props => props.click ? '0 3px 6px #74747440' : 'none'};
    }
`;

export default class AdminSidebar extends Component {
state = {
  // user_type: sessionStorage.getItem("user_type"),
  clicked: false,
  user_type: "admin",
  vendor :{
    menuBar:[
      {
        icon: "FaChartPie",
        label: "Dashboard",
        link: "/dashboard",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaCloudUploadAlt",
        label: "Upload",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaIdCard",
        label: "Profile",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaEnvelopeOpenText",
        label: "Enquiries",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaFileInvoiceDollar",
        label: "RFQ",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaPlane",
        label: "Bookings",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMapMarkerAlt",
        label: "Booking Tracker",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaComments",
        label: "Enquiries",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaFolderOpen",
        label: "Resources",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaRegCalendarAlt",
        label: "Trip Reminders",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaRegAddressBook",
        label: "Customer Details",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaCommentAlt",
        label: "Messages",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
    ]
  },
  contributor :{
    menuBar:[
      {
        icon: "FaChartPie",
        label: "Dashboard",
        link: "/dashboard",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMapMarkedAlt",
        label: "Itineraries",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaPlane",
        label: "Trips",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaComments",
        label: "Enquiries",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMoneyBill",
        label: "Earnings",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaRegCalendarAlt",
        label: "Calendar",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
    ]
  },
  admin :{
    menuBar:[
      {
        icon: "FaChartPie",
        label: "Dashboard",
        link: "/admin/dashboard",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaCommentAlt",
        label: "Enquiries",
        link: "/admin/enquiries",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaNewspaper",
        label: "Testimonials",
        link: "/admin/testimonials",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaRegFileAlt",
        label: "Pages",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMapMarkerAlt",
        label: "Destination",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaBookOpen",
        label: "Bookings",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMapMarkedAlt",
        label: "Tour",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaPercent",
        label: "Tour Coupon",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaConciergeBell",
        label: "Tour Service",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaPlane",
        label: "Tour Package",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaWpforms",
        label: "Forms",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      
      {
        icon: "FaPaintBrush",
        label: "Appearance",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaUserAlt",
        label: "Users",
        link: "/admin/users",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaFolderOpen",
        label: "File Manager",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMoneyBill",
        label: "Payment",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
      {
        icon: "FaMoneyBill",
        label: "Settings",
        link: "/",
        hasSubMenu: false,
        subMenu : []
      },
    ]
  },
}


handleClick = () => {
  this.setState({clicked: !this.state.clicked});
}

render() {
    //const menuBar = this.state[this.state.user_type].menuBar;
    let userType = sessionStorage.getItem('userType');
    const menuBar =  userType != undefined ? this.state[userType].menuBar : this.state[this.state.user_type].menuBar;

    return (
      <Sidebar className={sb.sidebar} onClick={this.handleClick} click={this.state.clicked}>
        <div className={sb.wrapper}>

          <div className="flex-center">
            <img src={Logo} className={sb.logo} />

            <IconContext.Provider value={{color: '#fff'}}>
              <div className={sb.toggle} onClick={this.handleClick}>
                  {this.state.clicked ? <FaTimes /> : <FaBars />}
              </div>
            </IconContext.Provider>
          </div>

          <div className={sb.menu}>
            {
              menuBar.map((menu) =>{
                return(
                    <Link to={menu.link} className={sb.navLinks}>
                      <AdminBoxIcon icon={menu.icon}/>
                      {menu.label}
                    </Link>
                )
              })
            }
          </div>
        </div>
      </Sidebar>
    )
  }
}
