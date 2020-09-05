/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';

import './styles.css';

import AnimatedLogo from '../../components/AnimatedLogo';
import IntroImg from '../../components/IntroImg';
import IntroText from '../../components/IntroText';
import Title from '../../components/Title';

import gitIcon from '../../assets/images/icons/technologies/git.svg';
import javaIcon from '../../assets/images/icons/technologies/java.svg';
import nodejsIcon from '../../assets/images/icons/technologies/nodejs.svg';
import reactIcon from '../../assets/images/icons/technologies/react.svg';
import reduxIcon from '../../assets/images/icons/technologies/redux.svg';
import arrowDownIcon from '../../assets/images/icons/util/arrow-down.svg';

import gitIconHover from '../../assets/images/icons/technologies/git-hover.svg';
import javaIconHover from '../../assets/images/icons/technologies/java-hover.svg';
import nodejsIconHover from '../../assets/images/icons/technologies/nodejs-hover.svg';
import reactIconHover from '../../assets/images/icons/technologies/react-hover.svg';
import reduxIconHover from '../../assets/images/icons/technologies/redux-hover.svg';

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
		}, 9000);
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

					<ul
						id="technologies"
						className="d-flex list-unstyled flex-row justify-content-center align-items-center"
					>
						<li>
							<a
								id="git"
								href="https://git-scm.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									onMouseOver={(e) => (e.currentTarget.src = gitIconHover)}
									onMouseOut={(e) => (e.currentTarget.src = gitIcon)}
									src={gitIcon}
									alt="Git"
									title="Git"
								/>
							</a>
						</li>
						<li>
							<a
								id="java"
								href="https://www.java.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									onMouseOver={(e) => (e.currentTarget.src = javaIconHover)}
									onMouseOut={(e) => (e.currentTarget.src = javaIcon)}
									src={javaIcon}
									alt="Java"
									title="Java"
								/>
							</a>
						</li>
						<li>
							<a
								id="node"
								href="https://nodejs.org/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									onMouseOver={(e) => (e.currentTarget.src = nodejsIconHover)}
									onMouseOut={(e) => (e.currentTarget.src = nodejsIcon)}
									src={nodejsIcon}
									alt="Node.js"
									title="Node.js"
								/>
							</a>
						</li>
						<li>
							<a
								id="react"
								href="https://reactjs.org/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									onMouseOver={(e) => (e.currentTarget.src = reactIconHover)}
									onMouseOut={(e) => (e.currentTarget.src = reactIcon)}
									src={reactIcon}
									alt="React.js"
									title="React.js"
								/>
							</a>
						</li>
						<li>
							<a
								id="redux"
								href="https://redux.js.org/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									onMouseOver={(e) => (e.currentTarget.src = reduxIconHover)}
									onMouseOut={(e) => (e.currentTarget.src = reduxIcon)}
									src={reduxIcon}
									alt="Redux.js"
									title="Redux.js"
								/>
							</a>
						</li>
					</ul>
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
