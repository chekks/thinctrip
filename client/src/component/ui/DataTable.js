import React from 'react';
import ValueChecker from '../../helpers/ValueChecker';
import moment from 'moment';
import {FaEdit, FaTrashAlt, FaNewspaper} from "react-icons/fa";
import DataTableRow from './DataTableRow';
import DataTableCell from './DataTableCell';

const formatHeader = (headers) => {
    
    if(ValueChecker.validateValue(headers) != "" && headers.length > 0){
        return headers.map((header) =>{
            return <th>{header}</th>
        });
    }else{
        return "";
    }
}

const formatTableCell = (datacell, props) => {
    let data = [];
    let size = Object.keys(datacell).length;
    let ctr = 0;
    for (var key in datacell) {
        
        // if(datacell[key] == "Actions"){
        //     
        // }
        // else{
        //     data.push(<DataTableCell>{datacell[key]}</DataTableCell>);
        // }
        console.log("props.columns",size);
        console.log("props.columns",key);
        console.log("props.columns.enabled",props.columns.enabled);
        if(props.columns.enabled.includes(key)){
            data.push(<DataTableCell>{datacell[key]}</DataTableCell>);
        }

        if (props.columns.enabled.includes("actions") && size-1 == ctr) {
            let push_data = <React.Fragment>
                <div className="adminEditBtn"><FaEdit />Edit</div>
                 <div className="adminDeleteBtn"><FaTrashAlt />Delete</div>
             </React.Fragment>
            data.push(push_data);
        }

        ctr++;
        
    }  
    return data;
}


const DataTable = (props) => {

    return (
        <div className="table-wrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {formatHeader(props.headers, props.columns)}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((column) => {
                        
                        return <DataTableRow>
                            {formatTableCell(column, props)}
                        </DataTableRow>
                    })}
                </tbody>
            </table>
        </div>
    )
}

DataTable.defaultProps = {
    type: "basic",
}



export default DataTable