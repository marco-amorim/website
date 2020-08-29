import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const Routes = () => {
	return (
		<div>
			<Route path="/" exact component={Landing} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/certificates" component={Certificates} />
			<Route path="/contact" component={Contact} />
		</div>
	);
};

export default Routes;
