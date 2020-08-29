import React from 'react';

import './styles.css';
import AnimatedLogo from '../../components/AnimatedLogo';
import IntroImg from '../../components/IntroImg';
import IntroText from '../../components/IntroText';

const Landing = () => {
	return (
		<div id="intro" className="container">
			<AnimatedLogo />
			<IntroImg />
			<IntroText />
		</div>
	);
};

export default Landing;
