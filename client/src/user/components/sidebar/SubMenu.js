import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import sb from '../../../assets/scss/user/userSidebar.module.scss'
import { SidebarData } from './SidebarData'
import UserBoxIcon from '../UserBoxIcon'
import styled from 'styled-components'

//icons
import { FaSortUp, FaSortDown } from 'react-icons/fa'

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	padding: 10px 15px 10px 35px;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #403F38;
	font-size: 14px;
	transition: all .5s ease-in-out;
	margin-left: 30px;
`;

const SubNav = styled.nav`
	opacity: ${props => props.transform ? '1' : '0'};
	transition: max-height 0.25s ease-in;
	background: #F5F8F9;
	max-height: ${props => props.transform ? '100%' : '0'};
`;

const Arrow = styled.div`
	svg {
		position: absolute;
		right: 0;
		top: ${props => props.transform ? '17px' : '13px'};
		transform: ${props => props.transform ? 'rotateX(180deg)' : 'rotateX(0deg)'};
	}
`;

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);
	const [hasSubNav, setHasSubNav] = useState(
		item.sub_menu.length > 0 && !subnav ? <FaSortDown /> :
			item.sub_menu.length > 0 && subnav ? <FaSortUp /> : null
	);

	const showSubnav = () => setSubnav(!subnav);

	const updateSetSubnav = () => {
		setSubnav(!subnav);
	}

	console.log("item.sub_menu", item.sub_menu);

	return (
		<>
			{
				item.sub_menu.length == 0 ?
					<Link className={sb.navLinks} to={item.link} onClick={item.sub_menu && showSubnav}>
						<UserBoxIcon icon={item.icon} />
						<SidebarLabel>{item.label}</SidebarLabel>
						<Arrow transform={subnav}>{hasSubNav}</Arrow>
					</Link> :

					<a className={sb.navLinks} onClick={item.sub_menu && showSubnav}>
						<UserBoxIcon icon={item.icon} />
						<SidebarLabel>{item.label}</SidebarLabel>
						<Arrow transform={subnav}>{hasSubNav}</Arrow>
					</a>
			}

			<SubNav transform={subnav}>
				{subnav && item.sub_menu.map((item, index) => {
					return (
						<DropdownLink key={index} to={item.link}>
							{item.label}
						</DropdownLink>
					)
				})}
			</SubNav>
		</>
	)
}

export default SubMenu
