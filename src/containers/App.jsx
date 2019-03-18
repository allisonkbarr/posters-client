import React from 'react';
import { hot } from "react-hot-loader";
import Hero from '../components/Hero';
import Events from './Events';
import Search from './Search';

const App = () => (
	<React.Fragment>
		<Hero />
		<Search />
		<Events />
	</React.Fragment>
);

export default hot(module)(App);