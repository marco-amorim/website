import React, { useEffect } from 'react';

import './styles.css';

const Certificates = () => {
	useEffect(() => {
		document.getElementById('page-footer')?.classList.add('footer-fixed');
	});
	return <div>Certificates!</div>;
};

export default Certificates;
