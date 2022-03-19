import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSidebar from '../../components/sidebar/UserSidebar';

import "../../../assets/scss/user/userMain.scss"
import "../../../assets/scss/client/tourSingle.scss"
import "../../../assets/scss/client/headerPanel.scss"

const ProfileContainer = () => {
    return (
        <React.Fragment>
            <div className="user_main">
                <UserSidebar />
                <p>profile</p>
            </div>
        </React.Fragment>
    )
}

export default ProfileContainer;
