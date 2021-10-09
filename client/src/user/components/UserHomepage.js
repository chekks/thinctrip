import React, { Component } from 'react'
import Routes from '../../Routes';
import '../../assets/scss/config.scss'
import '../../assets/scss/functions.scss'
import m from '../../assets/scss/user/userMain.module.scss'

// Components
import UserSidebar from './sidebar/UserSidebar'
import UserSidepanel from './UserSidepanel';

export default class UserHomepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={m.main}>
          <UserSidebar />
          <div className={m.wrapper}>
            <div className={m.container}>
              <Routes></Routes>
            </div>
          </div>
        </div>
        <UserSidepanel />
      </React.Fragment>
    )
  }
}
