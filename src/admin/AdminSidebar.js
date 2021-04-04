import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import sb from '../assets/scss/admin/adminSidebar.module.scss'
import AdminBoxIcon from './AdminBoxIcon'

//for deletion
import LogoWhite from '../assets/images/logo-white.png'
import AdminSidebarBackground from '../assets/images/admin_sidebar_logo.jfif'


export const SidebarContainer = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    div{
      position: relative;
      z-index: 999
    }

    &:after{
      content: "";
      background: rgba(28,40,58,.8);
      width: 300px;
      height: 100%;
      z-index: 4;
      position: absolute;
      top: 0;
      transition: all 0.5s ease;
    }

`;


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
          link: "/dashboard",
          hasSubMenu: false,
          subMenu : []
        },
        {
          icon: "FaNewspaper",
          label: "Articles",
          link: "/",
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
          icon: "FaBookOpen",
          label: "Bookings",
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
          icon: "FaMapMarkerAlt",
          label: "Destination",
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
    const menuBar = this.state[this.state.user_type].menuBar;
    return (
      <div className={sb.sidebar} src={AdminSidebarBackground}>
        <div className={sb.sidebarContainer}>
          <SidebarContainer src={AdminSidebarBackground}>
            <div className="flexCenter pt-20 pb-20">
              <img src={LogoWhite} className={sb.imgLogo} />
            </div>
          </SidebarContainer>
          <div className={sb.navLinksContainer}>
            {
              
              menuBar.map((menu) =>{
                return(
                  <div>
                    <Link to={menu.link} className={sb.navLinks}>
                      <AdminBoxIcon icon={menu.icon}/>
                      {menu.label}
                    </Link>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    )
  }
}
