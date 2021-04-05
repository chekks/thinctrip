import React, { Component } from 'react'
import AdminSidebar  from './AdminSidebar'
import AdminNavbar  from './AdminNavbar'
import Routes from '../../Routes';
import '../../assets/scss/config.scss'
import '../../assets/scss/functions.scss'
import '../../assets/scss/admin/admin.scss'

export default class AdminHomepage extends Component {
  render() {
    return (
      <div className="flex adminMainContainer">
        <AdminSidebar />
        <div className="width100">
          <AdminNavbar />
          <div className="adminMainInnerContainer">
            <Routes></Routes>
          </div>
        </div>
      </div>
    )
  }
}
