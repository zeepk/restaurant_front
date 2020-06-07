import React from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SozoInside from '../images/sozo-inside.jpg';
import YelpLogo from '../images/yelp-logo.png';

const AnyReactComponent = ({ text }) => (
	<div style={{ fontSize: '30px' }}>{text}</div>
);
export default function Contact() {
	const coords = [37.6765032783931, -121.8948289882431];
	return (
		<Grid
			container
			style={{ padding: '10vh 0 0 2vw', maxWidth: '100vw' }}
			spacing={3}
		>
			<Grid item style={{ margin: '10vh 0 0 0' }} xs={12} sm={4}>
				<Card
					style={{
						backgroundColor: 'rgba(73, 73, 73, 0.90)',
						color: 'white',
						fontSize: '20px',
					}}
				>
					<CardHeader title="Come on by!" />
					<CardMedia style={{ height: 250, top: 0 }} image={SozoInside} />
					<CardContent>📞 925-484-5588</CardContent>
					<CardContent>
						<div>
							2835 Hopyard Rd
							<br />
							Pleasanton, CA 94588
						</div>
					</CardContent>
					<CardContent>
						<Button
							variant="contained"
							style={{ backgroundColor: '#FF2D2D', color: 'white' }}
							href="https://www.yelp.com/biz/sozo-sushi-restaurant-pleasanton"
						>
							Check us out on <img src={YelpLogo} alt="Yelp"></img>
						</Button>
					</CardContent>
				</Card>
			</Grid>

			<Grid item xs={12} sm={8}>
				<div
					style={{
						height: '70vh',
					}}
				>
					<GoogleMapReact
						bootstrapURLKeys={{
							key: 'AIzaSyDHmrfNeDYuDpXD6AmqiOH46XD2Ago9Sag',
						}}
						defaultCenter={coords}
						defaultZoom={15}
					>
						<AnyReactComponent lat={coords[0]} lng={coords[1]} text="🍣" />
					</GoogleMapReact>
				</div>
			</Grid>
		</Grid>
	);
}
