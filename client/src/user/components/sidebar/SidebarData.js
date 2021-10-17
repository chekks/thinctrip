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
            label: "Quotes",
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
          icon: "FaIdCard",
          label: "Profile",
          link: "/profile",
          subMenu : []
        },
        {
          icon: "FaMapMarkedAlt",
          label: "Tour Package",
          subMenu : [
            {
              label: "All Package",
              link: "/user/tour-packages",
            },
            {
              label: "Add New",
              link: "/tour-new",
            },
            {
              label: "Tour Category",
              link: "/tour-category",
            },
            {
              label: "Tour Tags",
              link: "/",
            },
            {
              label: "Activity",
              link: "/",
            },
          ]
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
          label: "Bookings",
          link: "/",
          subMenu : []
        },
      ]
  },
  user :{
      menuBar:[
        {
          icon: "FaChartPie",
          label: "Dashboard",
          link: "/user/dashboard",
          subMenu : []
        },
        {
          icon: "FaCommentAlt",
          label: "Enquiries",
          link: "/user/enquiries",
          subMenu : []
        },
        {
          icon: "FaNewspaper",
          label: "Testimonials",
          link: "/user/testimonials",
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
          link: "/user/users",
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