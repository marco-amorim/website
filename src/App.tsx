import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './assets/styles/global.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes />
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
