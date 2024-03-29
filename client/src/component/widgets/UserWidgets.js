import React from 'react'
import w from '../../assets/scss/client/widget.module.scss'

const UserWidgets = (props) => {
    return (
        <React.Fragment>
            <div className="widget">
                <div>
                    <h1>{props.value}</h1>
                    <span className="text-muted widget-description">{props.description}</span>
                </div>

                <div className="widget-details">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserWidgets
