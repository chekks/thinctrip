import React from 'react'
import w from '../../assets/scss/client/widget.module.scss'

const AdminWidgets = (props) =>{
    return (
        <React.Fragment>
            <div className="widget">
                <h1>{props.value}</h1>
                <span className="text-muted widget-description">{props.description}</span>

                <div className="widget-details">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminWidgets
