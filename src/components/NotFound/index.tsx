import React, { useEffect } from 'react';

import './styles.css';

const NotFound = () => {
	useEffect(() => {
		document.getElementById('page-footer')?.classList.add('footer-fixed');
	}, []);

	return (
		<div id="notfound" className="container d-flex flex-column align-items-center justify-content-center">
			<h1>404 - Page not found :(</h1>
			<a href="/">Return to Home page</a>
		</div>
	);
};

export default NotFound;
