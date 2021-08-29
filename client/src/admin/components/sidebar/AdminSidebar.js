import { React, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import sb from '../../../assets/scss/admin/adminSidebar.module.scss'
import AdminBoxIcon from '../AdminBoxIcon'
import { IconContext } from 'react-icons/lib'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu';

//icons
import { FaBars, FaTimes } from 'react-icons/fa'

//for deletion
import Logo from '../../../assets/images/logo-default.png'

export const Sidebar = styled.div`
    @media screen and (max-width: 960px) {
        left: ${props => props.click ? 0 : '-255px'};
        box-shadow: ${props => props.click ? '0 3px 6px #74747440' : 'none'};
    }
`;

const AdminSidebar = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const data = SidebarData.contributor.menuBar;
  
  return (
    <Sidebar className={sb.sidebar} onClick={handleClick} click={clicked}>
      <div className={sb.wrapper}>
        <div className="flex-center">
          <img src={Logo} className={sb.logo} />

          <IconContext.Provider value={{color: '#fff'}}>
            <div className={sb.toggle} onClick={handleClick}>
                {clicked ? <FaTimes /> : <FaBars />}
            </div>
          </IconContext.Provider>
        </div>

        <ul className={sb.menu}>
          {data.map((item, index) => {
              return <SubMenu item={item} key={index} />;
          })}
        </ul>
      </div>
    </Sidebar>
  )
}

export default AdminSidebar
