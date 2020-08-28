import React, { useEffect } from 'react';

import './styles.css';
import AnimatedLogo from '../../components/AnimatedLogo/AnimatedLogo';

const Landing = () => {
	useEffect(() => {
		setTimeout(function () {
			document.getElementById('intro-img')?.classList.remove('d-none');
			document.getElementById('intro-img')?.classList.add('d-flex');
			document.getElementById('intro')?.classList.add('fade-in');
		}, 2700);
	}, []);

	return (
		<div id="intro" className="container">
			<AnimatedLogo />
			<div id="intro-img" className="justify-content-center intro d-none">
				<a href="/">
					<img
						className="intro-img"
						src="https://avatars2.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
						alt="Profile"
					/>
				</a>
			</div>
			<div id="text-intro" className="d-flex justify-content-center">
				<p>Hey!</p>
			</div>
		</div>
	);
};

export default Landing;
