import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import sb from '../../../assets/scss/admin/adminSidebar.module.scss'
import { SidebarData } from './SidebarData'
import AdminBoxIcon from '../AdminBoxIcon'
import styled from 'styled-components'

//icons
import { FaSortUp, FaSortDown } from 'react-icons/fa'

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	padding: 8px 0 8px 35px;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #403F38;
	font-size: 16px;
	transition: all .5s ease-in-out;
	margin-left: 50px;
`;

const SubNav = styled.nav `
	opacity: ${props => props.transform ? '1' : '0'};
	transition: opacity 300ms ease-in-out;
	background: #F5F8F9;
`;

const HasSubNav = styled.div `
	svg {
		position: absolute;
		right: 15px;
		top: ${props => props.transform ? '17px' : '13px'};
		transform: ${props => props.transform ? 'rotateX(180deg)' : 'rotateX(0deg)'};
	}
`;

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
	const [hasSubNav, setHasSubNav] = useState(
		item.subMenu.length > 0 && !subnav ?  <FaSortDown /> : 
		item.subMenu.length > 0 && subnav ? <FaSortUp /> : null 
	);

    const showSubnav = () => setSubnav(!subnav);

	const updateSetSubnav = () => {
		setSubnav(!subnav);
	}

    return (
        <>
			<Link className={sb.navLinks} to={item.link} onClick={item.subMenu && showSubnav}>
				<AdminBoxIcon icon={item.icon}/>
				<SidebarLabel>{item.label}</SidebarLabel>

				<HasSubNav transform={subnav}>{hasSubNav}</HasSubNav>
			</Link>

			<SubNav transform={subnav}>
				{subnav && item.subMenu.map((item, index) => {
					return (
						<DropdownLink key={index} onClick={updateSetSubnav}>
							<AdminBoxIcon icon={item.icon}/>
							<SidebarLabel>{item.label}</SidebarLabel>
						</DropdownLink>
					)
				})}
			</SubNav>
        </>
    )
}

export default SubMenu
