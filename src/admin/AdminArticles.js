import React, { Component } from 'react'
import { Table } from "react-bootstrap";
import moment from 'moment';
import {FaEdit, FaTrashAlt, FaNewspaper} from "react-icons/fa";

export default class AdminArticles extends Component {
    render() {
        return (
            <div>
                <div className="adminHeaderContent"><FaNewspaper /> Articles</div>
                
                <Table striped hover className="adminTable">
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
                    </Table>
            </div>
        )
    }
}
