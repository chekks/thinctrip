// import React, { Component } from 'react'
// import { FaNewspaper } from "react-icons/fa";

// import DataTable from '../component/ui/DataTable'
// import UserHeader from './components/UserHeader'

// export default class UserArticles extends Component {

//     render() {
//         const headers = ["Title", "Author", "Status", "Tour Package", "Date", "Actions"];
//         const columns = {
//             enabled : ["title", "author", "status", "tour_package", "date", "actions"],
//             disabled: []
//         }


//         const data = [
//             {
//                 id: 1,
//                 title: "Lorem ipsum",
//                 author: "John Doe",
//                 status: "Published",
//                 tour_package: "North to South - 15D & 14N",
//                 date: "2021-01-02"
//             },
//             {
//                 id: 2,
//                 title: "Lorem ipsum",
//                 author: "John Doe",
//                 status: "Published",
//                 tour_package: "North to South - 15D & 14N",
//                 date: "2021-01-02"
//             }
//         ];

//         const actions = [
//             {
//                 type: "edit",
//                 action : ""
//             },
//             {
//                 type: "delete",
//                 action : ""
//             },
//         ];

//         return (
//             <React.Fragment>
//                 <UserHeader
//                     name="Users"
//                     description="Lorem ipsum dolor........agmet juki"
//                 />
//                 <DataTable
//                     headers = {headers}
//                     data = {data}
//                     columns = {columns}
//                     actions = {actions}

//                 />
//             </React.Fragment>
//         )
//     }
// }

import React, { useState, useEffect } from 'react'
import DataTable from '../component/ui/DataTable'
import UserHeader from './components/UserHeader'

//redux
import { connect } from 'react-redux'
import { userGetUsers } from '../redux'

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userGetUsers: (payload) => dispatch(userGetUsers(payload)),
    }
}


const UserUsers = (props) => {
    const headers = ["First Name", "Last Name", "Email", "Email Verified", "Actions"];
    const data = [];
    const columns = {
        enabled: ["firstname", "lastname", "email", "is_verified", "actions"],
        disabled: []
    };
    const actions = [];
    const [callInterval, setCallInterval] = useState(0);

    useEffect(() => {
        console.log("use effect");
        console.log("props.users", props.users.user_users);
        if ((props.users.user_users == undefined || props.users.user_users.length == 0) && callInterval < 1) {
            props.userGetUsers();
            setCallInterval(callInterval + 1);
        }

    }, [props.users.user_users]);


    return (
        <React.Fragment>
            <UserHeader
                name="Users"
                description="Lorem dolor impsum amet...ogue rolord!"
            />
            <DataTable
                headers={headers}
                data={(props.users.user_users != undefined && props.users.user_users.length > 0) ? props.users.user_users : []}
                columns={columns}
                actions={actions}

            />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUsers)
