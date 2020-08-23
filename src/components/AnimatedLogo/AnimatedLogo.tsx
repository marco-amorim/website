import React, { useEffect } from 'react';

import './styles.scss';

const AnimatedLogo = () => {
	useEffect(() => {
		document.getElementById('animated-logo')?.classList.add('draw');
		setTimeout(function () {
			document
				.getElementById('animated-logo')
				?.classList.add('slide-out-elliptic-top-bck');
		}, 1500);
	}, []);

	return (
		<div>
			<div
				id="animated-logo"
				className="logo-home d-flex align-items-center justify-content-center mx-auto"
			>
				M
			</div>
		</div>
	);
};

export default AnimatedLogo;
