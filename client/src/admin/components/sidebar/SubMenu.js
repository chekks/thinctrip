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
	background: #494E53;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #fff;
	font-size: 18px;
`;

const SubNav = styled.ul `
	transform: ${props => props.transform ? 'translate(0px, 0)' : 'translate(-280px, 0)'};
	transition: transform .3s ease-in-out,transform .3s ease-in-out;
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

	useEffect (() => {
		if(item.subMenu.length > 0){
			if(subnav){
				setHasSubNav(<FaSortUp />);
			}else{
				setHasSubNav(<FaSortDown />);
			}
		}
	}, [subnav]);


	

    return (
        <>
			<li onClick={item.subMenu && showSubnav}>
				<Link className={sb.navLinks} to={item.link}>
					<AdminBoxIcon icon={item.icon}/>
					<SidebarLabel>{item.label}</SidebarLabel>

					
					{hasSubNav}
				</Link>

				<SubNav transform={subnav} onClick={updateSetSubnav}>
					{subnav && item.subMenu.map((item, index) => {
						return (
							<DropdownLink key={index}>
								<AdminBoxIcon icon={item.icon}/>
								<SidebarLabel>{item.label}</SidebarLabel>
							</DropdownLink>
						)
					})}
				</SubNav>
			</li>

			
        </>
    )
}

export default SubMenu
