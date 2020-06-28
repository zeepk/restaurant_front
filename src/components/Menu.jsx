import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'

const MenuPage = styled.div``

const BASE_SANITY_API_URL =
	'https://z281ywf9.api.sanity.io/v1/data/query/production?query='
const BASE_IMAGE_API_URL = 'https://cdn.sanity.io/images/z281ywf9/production/'

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
			newcategories: [],
			newitems: [],
			value: 0,
			loading: true,
			inputValue: '',
		}
		this.fetchServices = this.fetchServices.bind(this)
	}

	componentWillMount() {
		this.fetchServices()
	}

	fetchServices() {
		fetch(`${BASE_SANITY_API_URL}*[_type == 'category']`)
			.then((response) => {
				return response.json()
			})
			.then((myJson) => {
				this.setState({
					categories: myJson.result,
					loading: false,
				})
			})
		fetch(`${BASE_SANITY_API_URL}*[_type == 'product']`)
			.then((response) => {
				return response.json()
			})
			.then((myJson) => {
				this.setState({
					items: myJson.result,
					loading: false,
				})
			})
	}

	render() {
		const item_template = (item) => {
			// caaa8ba418dc84f184c37cb1e8335d80c6ebbac7-330x220.jpg
			// image-caaa8ba418dc84f184c37cb1e8335d80c6ebbac7-330x220-jpg
			const image_url = item.image.asset._ref.substr(6).slice(0, -4)

			return (
				<Grid item xs={12} sm={6} md={3}>
					<Card
						style={{
							backgroundColor: 'rgb(56, 72, 67, 0.8)',
							color: 'white',
							height: '350px',
							overflow: 'auto',
						}}
					>
						<CardHeader title={item.title} />
						<CardMedia
							style={{ height: 150, top: 0 }}
							image={`${BASE_IMAGE_API_URL + image_url}.jpg`}
						/>
						<CardContent>{item.description}</CardContent>
						{/* <CardContent>${item.price}</CardContent> */}
					</Card>
				</Grid>
			)
		}

		const item_grid = (category) => {
			return (
				<Grid
					container
					spacing={3}
					style={{
						top: '10vh',
						position: 'relative',
						padding: '10px 2vw',
						maxWidth: '100vw',
						margin: 0,
					}}
				>
					{this.state.items.map((item) => {
						const displayItem =
							item.category?._ref === category._id &&
							(item.title
								.toLowerCase()
								.includes(this.state.inputValue.toLowerCase()) ||
								item.description
									.toLowerCase()
									.includes(this.state.inputValue.toLowerCase()))
						return displayItem ? item_template(item) : null
					})}
				</Grid>
			)
		}

		const category_tabs = this.state.categories.map((category) => (
			<Tab
				label={category.title}
				style={{ float: 'middle', fontWeight: 'bold' }}
			/>
		))
		const menu_panels = this.state.categories.map((category, i) => (
			<TabPanel index={i} value={this.state.value}>
				{item_grid(category)}
			</TabPanel>
		))
		const handleChange = (event, newValue) => {
			this.setState({
				value: newValue,
			})
		}
		const vw = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		)
		return (
			<MenuPage>
				<form noValidate autoComplete="off"></form>
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
							style={{
								backgroundColor: '#f0c39c',
								color: 'black',
								top: '5vh',
								position: 'relative',
								width: '80%',
								margin: '0 10%',
							}}
						>
							<Tabs
								orientation={vw < 550 ? 'vertical' : 'horizontal'}
								value={this.state.value}
								onChange={handleChange}
								centered
								style={{
									maxHeight: '100px',
								}}
							>
								{category_tabs}
							</Tabs>
						</AppBar>
						<AppBar
							style={{
								// color: 'black',
								top: '6vh',
								position: 'relative',
								margin: '0 auto',
								width: '40%',
								background: 'rgba(0,0,0,0.5)',
							}}
						>
							<TextField
								id="standard-basic"
								label="Search"
								style={{
									color: 'black !important',
								}}
								color="primary"
								variant="outlined"
								value={this.state.inputValue}
								onChange={(e) => {
									this.setState({
										inputValue: e.target.value,
									})
								}}
							/>
						</AppBar>
						{menu_panels}
					</div>
				)}
			</MenuPage>
		)
	}
}

export default Menu
