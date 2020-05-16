import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Menu from '../Menu';
import Home from '../Home';
import Contact from '../Contact';
export default function CustomRouter() {
	return (
		<Router>
			<Header />
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
	);
}
