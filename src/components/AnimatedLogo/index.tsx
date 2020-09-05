import React, { useEffect } from 'react';

import './styles.scss';

const AnimatedLogo = () => {
	useEffect(() => {
		document.getElementById('animated-logo')?.classList.add('draw');

		setTimeout(function () {
			document
				.getElementById('animated-logo')
				?.classList.add('scale-out-center');
		}, 1500);

		setTimeout(function () {
			document
				.getElementById('animated-logo-container')
				?.classList.add('d-none');
		}, 2500);
	}, []);

	return (
		<div id="animated-logo-container">
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
