import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RestImage from '../../images/rest_background.jpg';

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
	padding: 0 20px 0 0;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;

const Li = styled.li`
	display: inline-block;
	color: white;
	padding: 20px 10px;
	&:hover {
		background-color: #5467d6;
	}
`;
const Ul = styled.ul`
	margin: 0;
	padding: 0;
`;
export default function Header() {
	return (
		<div>
			<Background />
			<AppBar position="static">
				<Toolbar variant="dense">
					<Ul>
						<Li>
							<Link to="/" style={{ textDecoration: 'none' }}>
								<LinkText>Home</LinkText>
							</Link>
						</Li>
						<Li>
							<Link to="/menu" style={{ textDecoration: 'none' }}>
								<LinkText>Menu</LinkText>
							</Link>
						</Li>
						<Li>
							<Link to="/contact" style={{ textDecoration: 'none' }}>
								<LinkText>Contact</LinkText>
							</Link>
						</Li>
					</Ul>
				</Toolbar>
			</AppBar>
		</div>
	);
}
