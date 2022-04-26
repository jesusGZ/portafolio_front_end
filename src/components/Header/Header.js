import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import resumeData from '../../utilis/resumeData';
import { CustomButton } from '../Button/Button';
import './Header.css';

const Header = () => {
	const location = useLocation();
	const pathName = location.pathname;
	return (
		<Navbar className="header" expand="lg" sticky="top">
			<Nav.Link as={NavLink} to="/" className="p-0 m-0">
				<Navbar.Brand className="header_home">
					<HomeIcon />
				</Navbar.Brand>
			</Nav.Link>

			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="header_left">
					<Nav.Link as={NavLink} to="/" className={pathName === '/' ? 'header_link_active' : 'header_link'}>
						Resumen
					</Nav.Link>
					<Nav.Link as={NavLink} to="/portfolio" className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>
						Portafolio
					</Nav.Link>
				</Nav>
				<div className="header_right">
					{Object.keys(resumeData.socials).map((key) => (
						<a href={resumeData.socials[key].link} target="_blank" rel="noreferrer">
							{resumeData.socials[key].icon}
						</a>
					))}
					<a href={resumeData.downloadCv} target="_blank" rel="noreferrer">
						<CustomButton text={'Descargar CV'} icon={<GetAppIcon />} />
					</a>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
