import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RestImage from '../../images/rest_background.jpg'
import SozoLogo from '../../images/sozo-logo.png'

const Background = styled.div`
	position: fixed;
	width: 100%;

	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${RestImage});
	z-index: -1;
`

const LinkText = styled.div`
	color: white;
	padding: 0 20px 0 20px;
	text-decoration: none;
	font-size: 20px;
	&:hover {
		text-decoration: none;
		color: silver;
	}
`

const LogoImg = styled.img`
	padding: 15px 0;
	height: 70px;
`

export default function Header() {
	return (
		<div>
			<Background />
			<nav
				class="navbar navbar-expand-lg navbar-dark"
				style={{ backgroundColor: 'transparent' }}
			>
				<Link
					to="/"
					style={{ textDecoration: 'none' }}
					className="navbar-brand"
				>
					<LogoImg src={SozoLogo} alt="" />
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<Link to="/menu" style={{ textDecoration: 'none' }}>
								<LinkText>Menu</LinkText>
							</Link>
						</li>
						<li class="nav-item">
							<Link to="/contact" style={{ textDecoration: 'none' }}>
								<LinkText>Location</LinkText>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
