import React, { Component } from 'react'
import Routes from '../../Routes';
import '../../assets/scss/config.scss'
import '../../assets/scss/functions.scss'
import '../../assets/scss/user/userMain.scss'

// Components
import UserSidebar from './sidebar/UserSidebar'
import UserSidepanel from './UserSidepanel';

export default class UserHomepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="user_main">
          <UserSidebar />
          <div className="user_wrapper">
            <div className="user_container">
              <Routes></Routes>
            </div>
          </div>
        </div>
        <UserSidepanel />
      </React.Fragment>
    )
  }
}
