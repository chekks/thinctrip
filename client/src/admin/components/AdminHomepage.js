import React, { Component } from 'react'
import Routes from '../../Routes';
import '../../assets/scss/config.scss'
import '../../assets/scss/functions.scss'
import m from '../../assets/scss/admin/adminMain.module.scss'

// Components
import AdminSidebar  from './sidebar/AdminSidebar'
import AdminSidepanel from './AdminSidepanel';

export default class AdminHomepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={m.main}>
          <AdminSidebar />
          <div className={m.wrapper}>
            <div className={m.container}>
              <Routes></Routes>
            </div>
          </div>
        </div>
        <AdminSidepanel/>
      </React.Fragment> 
    )
  }
}
