import React, { useEffect } from 'react';

import './styles.css';

const Portfolio = () => {
	useEffect(() => {
		document.getElementById('page-footer')?.classList.add('footer-fixed');
	});

	return <div>Portfolio!</div>;
};

export default Portfolio;
