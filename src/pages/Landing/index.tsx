import React, { useEffect, useState } from 'react';

import './styles.css';

import AnimatedLogo from '../../components/AnimatedLogo';
import IntroImg from '../../components/IntroImg';
import IntroText from '../../components/IntroText';
import Title from '../../components/Title';
import Technologies from '../../components/Technologies';

import arrowDownIcon from '../../assets/images/icons/util/arrow-down.svg';

const Landing = () => {
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', () => handleShowArrowButton());

		function handleShowArrowButton() {
			setScrollPosition(window.scrollY);
		}
	}, [scrollPosition]);

	useEffect(() => {
		setTimeout(() => {
			document.getElementById('arrow-container')?.classList.remove('d-none');
			document.getElementById('arrow-down')?.classList.add('fade-in');
		}, 7000);
	}, []);

	return (
		<React.Fragment>
			<section id="intro" className="container">
				<AnimatedLogo />
				<IntroImg />
				<IntroText />

				<div id="arrow-container" className="arrow bounce d-none">
					<a
						id="arrow-down"
						className={scrollPosition === 0 ? 'fade-in' : 'd-none'}
						href="#scroll-info"
					>
						<img
							src={arrowDownIcon}
							alt="Next Section"
							className="arrow-down"
						/>
					</a>
				</div>
			</section>

			<span id="scroll-info" className="scroll-target"></span>
			<section id="info" className="container">
				<div className="info-item">
					<Title text="Some technologies I work with" />
					<Technologies />
				</div>

				<div className="info-item">
					<Title text="Experience" />
					<h5>October 2019 - Present</h5>

					<div className="job-title">
						Software Developer at{' '}
						<a
							href="https://www.linkedin.com/company/unimeddobrasil"
							className="info-link"
							rel="noopener noreferrer"
							target="_blank"
						>
							Unimed do Brasil
						</a>
					</div>
					<div className="job-info">
						We have just finished developing a big application, a Singular
						Website for several cooperatives around the country
					</div>
				</div>

				<div className="info-item">
					<Title text="Education" />
					<div className="study-info">
						Graduating in Information Systems at{' '}
						<a
							href="http://unisul.br/"
							className="info-link"
							rel="noopener noreferrer"
							target="_blank"
						>
							Unisul
						</a>
						<br />
						currently in the seventh semester
					</div>
				</div>

				<div className="info-item">
					<Title text="Contact" />
					<div className="contact-info">
						You can reach out to me on my{' '}
						<a
							href="mailto:marcoamorim95@hotmail.com"
							rel="noopener noreferrer"
							target="_blank"
							className="info-link"
						>
							E-mail
						</a>{' '}
						or in any other social media <br />
						I'm completely open to new opportunities and ideas, let's talk :)
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Landing;
