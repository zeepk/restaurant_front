import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RestImage from '../../images/rest_background.jpg';
import SozoLogo from '../../images/sozo-logo.png';

const Background = styled.div`
	position: fixed;
	width: 100%;

	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${RestImage});
	z-index: -1;
`;

const LinkText = styled.div`
	color: white;
	padding: 0 20px 0 20px;
	text-decoration: none;
	font-size: 20px;
	&:hover {
		text-decoration: none;
		color: silver;
	}
`;

const LogoImg = styled.img`
	padding: 5px 0;
	height: 50px;
`;

export default function Header() {
	return (
		<div>
			<Background />
			<AppBar position="static" style={{ backgroundColor: 'transparent' }}>
				<Toolbar variant="dense">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<LogoImg src={SozoLogo} alt="" />
					</Link>

					<Link to="/menu" style={{ textDecoration: 'none' }}>
						<LinkText>Menu</LinkText>
					</Link>

					<Link to="/contact" style={{ textDecoration: 'none' }}>
						<LinkText>Contact</LinkText>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
