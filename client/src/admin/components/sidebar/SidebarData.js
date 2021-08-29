import React from 'react';

export const SidebarData = {
  user_type: "contributor",
  vendor : {
      menuBar: [
          {
            icon: "FaChartPie",
            label: "Dashboard",
            link: "/dashboard",
            subNav : []
          },
          {
            icon: "FaCloudUploadAlt",
            label: "Upload",
            link: "/",
            subNav : []
          },
          {
            icon: "FaIdCard",
            label: "Profile",
            link: "/",
            subNav : []
          },
          {
            icon: "FaEnvelopeOpenText",
            label: "Enquiries",
            link: "/",
            subNav : []
          },
          {
            icon: "FaFileInvoiceDollar",
            label: "RFQ",
            link: "/",
            subNav : []
          },
          {
            icon: "FaPlane",
            label: "Bookings",
            link: "/",
            subNav : []
          },
          {
            icon: "FaMapMarkerAlt",
            label: "Booking Tracker",
            link: "/",
            subNav : []
          },
          {
            icon: "FaComments",
            label: "Enquiries",
            link: "/",
            subNav : []
          },
          {
            icon: "FaFolderOpen",
            label: "Resources",
            link: "/",
            subNav : []
          },
          {
            icon: "FaRegCalendarAlt",
            label: "Trip Reminders",
            link: "/",
            subNav : []
          },
          {
            icon: "FaRegAddressBook",
            label: "Customer Details",
            link: "/",
            subNav : []
          },
          {
            icon: "FaCommentAlt",
            label: "Messages",
            link: "/",
            subNav : []
          },
      ]
  },
  contributor :{
      menuBar:[
        {
          icon: "FaChartPie",
          label: "Dashboard",
          link: "/dashboard",
          subMenu : []
        },
        {
          icon: "FaMapMarkedAlt",
          label: "Tour",
          subMenu : [
            {
              icon: "FaPlane",
              label: "All",
              link: "/",
            },
            {
              icon: "FaPlane",
              label: "Add",
              link: "/",
            },
          ]
        },
        {
          icon: "FaPlane",
          label: "Trips",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaComments",
          label: "Enquiries",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaMoneyBill",
          label: "Earnings",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaRegCalendarAlt",
          label: "Calendar",
          link: "/",
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
          subMenu : []
        },
        {
          icon: "FaCommentAlt",
          label: "Enquiries",
          link: "/admin/enquiries",
          subMenu : []
        },
        {
          icon: "FaNewspaper",
          label: "Testimonials",
          link: "/admin/testimonials",
          subMenu : []
        },
        {
          icon: "FaRegFileAlt",
          label: "Pages",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaMapMarkerAlt",
          label: "Destination",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaBookOpen",
          label: "Bookings",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaMapMarkedAlt",
          label: "Tour",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaPercent",
          label: "Tour Coupon",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaConciergeBell",
          label: "Tour Service",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaPlane",
          label: "Tour Package",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaWpforms",
          label: "Forms",
          link: "/",
          subMenu : []
        },
        
        {
          icon: "FaPaintBrush",
          label: "Appearance",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaUserAlt",
          label: "Users",
          link: "/admin/users",
          subMenu : []
        },
        {
          icon: "FaFolderOpen",
          label: "File Manager",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaMoneyBill",
          label: "Payment",
          link: "/",
          subMenu : []
        },
        {
          icon: "FaMoneyBill",
          label: "Settings",
          link: "/",
          subMenu : []
        },
      ]
  },
};