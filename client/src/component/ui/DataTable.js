import React from 'react';
import ValueChecker from '../../helpers/ValueChecker';
import moment from 'moment';
import {FaEdit, FaTrashAlt, FaNewspaper} from "react-icons/fa";

// const checkType = (type) => {
//     let types = ["basic", "advance"];

// }

// const withActions = (action) => {
    
// }

// const withMultiselect = (multi) => {

// }

// const withSort = (sort) => {
//     let sorts = ["enable", "disable"];
// }



const DataTable = (props) => {

    return (
        <div className="table-wrapper">
            {/* <div className="table-header"><FaNewspaper /> Articles </div> */}
            {/* <button className="btnAdd">Add New</button> */}

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem Ipsum</td>
                        <td>John Doe</td>
                        <td>Published</td>
                        <td>{moment().format("MMMM DD, YYYY")}</td>
                        <td className="adminActionContainer">
                            <div className="adminEditBtn"><FaEdit />Edit</div>
                            <div className="adminDeleteBtn"><FaTrashAlt />Delete</div>
                        </td>
                    </tr>
                    <tr>
                        <td>Lorem Ipsum</td>
                        <td>John Doe</td>
                        <td>Published</td>
                        <td>{moment().format("MMMM DD, YYYY")}</td>
                        <td className="adminActionContainer">
                            <div className="adminEditBtn"><FaEdit />Edit</div>
                            <div className="adminDeleteBtn"><FaTrashAlt />Delete</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

DataTable.defaultProps = {
    type: "basic",
}



export default DataTable