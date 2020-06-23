import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'

// TODO: grab from new CMS: https://z281ywf9.api.sanity.io/v1/data/query/production?query=*[_type == 'category']

const MenuPage = styled.div``

const BASE_API_URL = 'https://rocky-cliffs-94215.herokuapp.com/'
// const BASE_API_URL = 'localhost:8000/'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<div p={3}>
					<div style={{ color: 'white' }}>{children}</div>
				</div>
			)}
		</div>
	)
}

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			items: [],
			value: 0,
			loading: true,
		}
		this.fetchServices = this.fetchServices.bind(this)
	}

	componentWillMount() {
		this.fetchServices()
	}

	fetchServices() {
		fetch(`${BASE_API_URL}api/menu-items.json`)
			.then((response) => {
				return response.json()
			})
			.then((myJson) => {
				this.setState({
					items: myJson,
				})
			})
		fetch(`${BASE_API_URL}api/menu-categories.json`)
			.then((response) => {
				return response.json()
			})
			.then((myJson) => {
				this.setState({
					categories: myJson,
					loading: false,
				})
			})
	}

	render() {
		const item_template = (item) => (
			<Grid item xs={12} sm={6} md={3}>
				<Card>
					<CardHeader title={item.title} />
					<CardMedia style={{ height: 250, top: 0 }} image={item.image} />
					<CardContent>{item.details}</CardContent>
					<CardContent>${item.price}</CardContent>
				</Card>
			</Grid>
		)

		const item_grid = (category) => {
			return (
				<Grid
					container
					spacing={3}
					style={{
						top: '25vh',
						position: 'absolute',
						padding: '10px 2vw',
						maxWidth: '100vw',
						margin: 0,
					}}
				>
					{this.state.items.map((item) => {
						return item.category === category.id ? item_template(item) : null
					})}
				</Grid>
			)
		}

		const category_tabs = this.state.categories.map((category) => (
			<Tab label={category.title} style={{ float: 'middle' }} />
		))
		const menu_panels = this.state.categories.map((category) => (
			<TabPanel index={category.id - 1} value={this.state.value}>
				{item_grid(category)}
			</TabPanel>
		))
		const handleChange = (event, newValue) => {
			this.setState({
				value: newValue,
			})
		}

		return (
			<MenuPage>
				{this.state.loading ? (
					<CircularProgress
						style={{
							position: 'fixed',
							left: '50vw',
							top: '50vh',
						}}
						size={'100px'}
						color="secondary"
					/>
				) : (
					<div>
						<AppBar
							position="static"
							style={{
								backgroundColor: '#f7d763',
								color: 'black',
								top: '15vh',
								position: 'absolute',
								width: '80%',
								margin: '0 10%',
							}}
						>
							<Tabs value={this.state.value} onChange={handleChange} centered>
								{category_tabs}
							</Tabs>
						</AppBar>
						{menu_panels}
					</div>
				)}
			</MenuPage>
		)
	}
}

export default Menu
