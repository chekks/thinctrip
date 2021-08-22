// import React, { Component } from 'react'
// import { FaNewspaper } from "react-icons/fa";

// import DataTable from '../component/ui/DataTable'
// import AdminHeader from './components/AdminHeader'

// export default class AdminArticles extends Component {
    
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
//                 <AdminHeader
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

import React, { useState , useEffect} from 'react'
import DataTable from '../component/ui/DataTable'
import AdminHeader from './components/AdminHeader'

//redux
import {connect} from 'react-redux'
import {adminGetUsers} from '../redux'

const mapStateToProps = state => {
    return {
        users: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        adminGetUsers : (payload) =>  dispatch(adminGetUsers(payload)),
    }
  }


const AdminUsers = (props) => {
    const headers = ["First Name", "Last Name", "Email", "Email Verified", "Actions"];
    const data = [];
    const columns = {
        enabled : ["firstname", "lastname", "email", "is_verified", "actions"],
        disabled: []
    };
    const actions = [];
    const [callInterval, setCallInterval] = useState(0);
    
    useEffect (() => {
        console.log("use effect");
        console.log("props.users", props.users.admin_users);
        if((props.users.admin_users == undefined || props.users.admin_users.length == 0) && callInterval < 1){
            props.adminGetUsers();
            setCallInterval(callInterval + 1);
        }
        
      }, [props.users.admin_users]);


    return (
        <React.Fragment>
            <AdminHeader
                name="Users"
                description="Lorem dolor impsum amet...ogue rolord!"
            />
            <DataTable
                headers = {headers}
                data = {(props.users.admin_users != undefined &&  props.users.admin_users.length >  0) ? props.users.admin_users: []}
                columns = {columns}
                actions = {actions}

            />
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers)
