import React from 'react';

import './styles.css';

const AnimatedLogo = () => {
	return (
		<div>
			<div className="box-outer logo-home">
				<div className="main_box d-flex align-items-center justify-content-center">
					<div className="bar top"></div>
					<div className="bar right delay"></div>
					<div className="bar bottom delay"></div>
					<div className="bar left"></div>M
				</div>
			</div>
		</div>
	);
};

export default AnimatedLogo;
