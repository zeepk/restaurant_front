import React from 'react';
import styled from 'styled-components';

const HomePage = styled.div``;
const H1 = styled.h1`
	padding: 25vh 0 0 5vw;
	margin: 0;
	color: white;
	font-size: calc(60px + (100 - 60) * ((100vw - 300px) / (1600 - 300)));
`;

export default function Home() {
	return (
		<HomePage>
			<H1>Local Taqueria</H1>
		</HomePage>
	);
}
