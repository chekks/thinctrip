import React, { Component } from 'react'
import AdminSidebar  from './AdminSidebar'
import AdminNavbar  from './AdminNavbar'
import '../assets/scss/adminMixins.scss'
import '../assets/scss/adminFunctions.scss'

export default class AdminHomepage extends Component {
  render() {
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="width100">
          <AdminNavbar />
        </div>
      </div>
    )
  }
}
