import React from 'react'
import h from '../../assets/scss/user/userHeader.module.scss'
import { FiSearch } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa'

// Component
import TextField from '../../component/ui/Inputs/TextField'
import Badge from '../../component/ui/Badge'

const UserHeader = (props) => {
    return (
        <React.Fragment>
            <div className={h.header}>
                <div className={h.headerLeft}>
                    <h1>{props.name}</h1>
                    <p className="text-muted">{props.description}</p>
                </div>

                <div className={h.headerRight}>
                    <TextField
                        className="form-control"
                        type="text"
                        size="lg"
                        placeholder="Search ..."
                        name="email"
                        round
                        // onchange={(event) => handleChangeTextEditor(event)}
                        id="login_username"
                        icon={<FiSearch />}
                    />

                    <span className={`${h.headerNotification} flex-center`}>
                        <FaRegBell />
                        <Badge
                            value="4"
                            variant="notification"
                            type="number"
                        />
                    </span>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UserHeader
