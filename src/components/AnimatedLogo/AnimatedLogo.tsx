import React, { useEffect } from 'react';

import './styles.scss';

const AnimatedLogo = () => {
	useEffect(() => {
		document.getElementById('animatedLogo')?.classList.add('draw');
	}, []);

	return (
		<div>
			<div id="animatedLogo" className="logo-home d-flex align-items-center justify-content-center mx-auto">
				M
			</div>
		</div>
	);
};

export default AnimatedLogo;
