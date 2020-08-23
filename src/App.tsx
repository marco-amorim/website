import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './assets/styles/global.css';

const App = () => {
	return (
		<div>
      <div className="w-100">
			<Header />
      </div>

      <Footer />
		</div>
	);
};

export default App;
