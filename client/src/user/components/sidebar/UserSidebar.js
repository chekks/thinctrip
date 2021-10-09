import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import sb from '../../../assets/scss/user/userSidebar.module.scss'
import UserBoxIcon from '../UserBoxIcon'
import { IconContext } from 'react-icons/lib'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu';

//icons
import { FaBars, FaTimes } from 'react-icons/fa'

//for deletion
import Logo from '../../../assets/images/logo-default.png'

//redux
import { connect } from 'react-redux'
import { getMenu } from '../../../redux';
import LocalStorage from '../../../helpers/LocalStorage';

export const Sidebar = styled.div`
    @media screen and (max-width: 960px) {
        left: ${props => props.click ? 0 : '-255px'};
        box-shadow: ${props => props.click ? '0 3px 6px #74747440' : 'none'};
    }
`;



const mapStateToProps = state => {
  return {
    menu: state.menu.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMenu: ($user_role) => dispatch(getMenu($user_role)),
  }
}


const UserSidebar = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }


  useEffect(() => {
    if (props.menu == undefined || props.menu.length == 0) {
      props.getMenu();
    }


  }, [props.menu]);

  const data = [];
  return (
    <Sidebar className={sb.sidebar} onClick={handleClick} click={clicked}>
      <div className={sb.wrapper}>
        <div className="flex-center">
          <img src={Logo} className={sb.logo} />

          <IconContext.Provider value={{ color: '#fff' }}>
            <div className={sb.toggle} onClick={handleClick}>
              {clicked ? <FaTimes /> : <FaBars />}
            </div>
          </IconContext.Provider>
        </div>

        <ul className={sb.menu}>
          {
            props.menu != undefined ? props.menu.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            }) : ""
          }
        </ul>
      </div>
    </Sidebar>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebar)
