import React, { useEffect } from 'react';

import './styles.scss';

const IntroLogo = () => {
	useEffect(() => {
		document.getElementById('animated-logo')?.classList.add('draw');

		setTimeout(function () {
			document
				.getElementById('animated-logo')
				?.classList.add('scale-out-center');
		}, 1500);

		setTimeout(function () {
			document.getElementById('animated-logo')?.classList.remove('d-flex');
			document.getElementById('animated-logo')?.classList.add('d-none');
		}, 2500);
	}, []);

	return (
		<div
			id="animated-logo"
			className="logo-home d-flex align-items-center justify-content-center mx-auto"
		>
			M
		</div>
	);
};

export default IntroLogo;
