import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Certificates from './pages/Certificates';
import NotFound from './components/NotFound';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/certificates" component={Certificates} />
				<Route path="/404" component={NotFound} />
				<Redirect to="/404" />
			</Switch>
		</div>
	);
};

export default Routes;
