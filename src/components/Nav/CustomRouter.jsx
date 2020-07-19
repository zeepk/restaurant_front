import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Menu from '../Menu'
import Home from '../Home'
import Contact from '../Contact'
import CustomAlert from './CustomAlert'

export default function CustomRouter() {
	return (
		<Router>
			<Header />
			<CustomAlert
				message={
					'We hope you are staying safe during COVID-19! We are still open for takeout, or delivery through various apps.'
				}
			/>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/menu">
					<Menu />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	)
}
