import React, { useEffect } from 'react';

import './styles.css';
import AnimatedLogo from '../../components/AnimatedLogo';
import IntroImg from '../../components/IntroImg';
import IntroText from '../../components/IntroText';
import Title from '../../components/Title';

import arrowDownIcon from '../../assets/images/icons/util/arrow-down.svg';

const Landing = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('arrow-down')?.classList.remove('d-none');
			document.getElementById('arrow-down')?.classList.add('fade-in');
		}, 7000);
	});

	return (
		<React.Fragment>
			<section id="intro" className="container">
				<AnimatedLogo />
				<IntroImg />
				<IntroText />
				<div className="arrow bounce">
					<a id="arrow-down" className="d-none" href="#info">
						<img
							src={arrowDownIcon}
							alt="Next Section"
							className="arrow-down"
						/>
					</a>
				</div>
			</section>

			<section id="info" className="container d-flex justify-content-center">
				<Title text="Some technologies I work with" />
			</section>
		</React.Fragment>
	);
};

export default Landing;