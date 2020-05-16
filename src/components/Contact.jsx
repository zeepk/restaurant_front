import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
	<div style={{ fontSize: '30px' }}>{text}</div>
);
export default function Contact() {
	const coords = [37.70527410892589, -121.93709098303975];
	return (
		<div
			style={{
				height: '70vh',
				width: '90%',
				maxWidth: '1000px',
				margin: '10vh auto',
			}}
		>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyDHmrfNeDYuDpXD6AmqiOH46XD2Ago9Sag' }}
				defaultCenter={coords}
				defaultZoom={15}
			>
				<AnyReactComponent lat={coords[0]} lng={coords[1]} text="🌯" />
			</GoogleMapReact>
		</div>
	);
}
