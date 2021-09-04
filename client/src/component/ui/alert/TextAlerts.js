import React from 'react'

function TextAlerts(props) {
    return (
        <div className="alert alert-success">
            {props.children}
        </div>
    )
}

export default TextAlerts
