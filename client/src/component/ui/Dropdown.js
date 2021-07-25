import React from 'react'

const Dropdown = () => {
    return (
        <div className="dropdown-wrapper">
            <Button 
                onClick={(event) => handleSubmit(event)} 
                type="button" 
                variant="danger" 
                size="sm" 
                disabled={false}
                className={l.btn_login_social_media}
            >

            <FaAngleDown/>
          </Button>
        </div>
    )
}

export default Dropdown
