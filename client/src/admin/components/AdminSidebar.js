import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import sb from '../../assets/scss/admin/adminSidebar.module.scss'
import AdminBoxIcon from './AdminBoxIcon'

//for deletion
import Logo from '../../assets/images/logo-default.png'

export default class AdminSidebar extends Component {

  state = {
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
          icon: "FaMapMarkedAlt",
          label: "Tour Package",
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
          label: "Calendar",
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
          link: "/",
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

  

  render() {
    //const menuBar = this.state[this.state.user_type].menuBar;
    let userType = sessionStorage.getItem('userType');
    const menuBar =  userType != undefined ? this.state[userType].menuBar : this.state[this.state.user_type].menuBar;

    return (
      <div className={sb.sidebar}>
        <div className={sb.wrapper}>

          <div className="flex-center">
            <img src={Logo} className={sb.logo} />
          </div>

          <div>
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
      </div>
    )
  }
}
