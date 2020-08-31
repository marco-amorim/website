import React from 'react';

import './styles.css';
import AnimatedLogo from '../../components/AnimatedLogo';
import IntroImg from '../../components/IntroImg';
import IntroText from '../../components/IntroText';
import Title from '../../components/Title';

const Landing = () => {
	return (
		<React.Fragment>
			<section id="intro" className="container">
				<AnimatedLogo />
				<IntroImg />
				<IntroText />
			</section>
			<section className="container d-flex justify-content-center">
				<Title text="Some technologies I work with" />
			</section>
		</React.Fragment>
	);
};

export default Landing;
