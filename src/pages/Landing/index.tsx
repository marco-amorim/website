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

import { hoverImg, unHoverImg } from '../../utils/iconsHoverHandler';

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
						href="#info"
					>
						<img
							src={arrowDownIcon}
							alt="Next Section"
							className="arrow-down"
						/>
					</a>
				</div>
			</section>

			<section id="info" className="container">
				<Title text="Some technologies I work with" />

				<ul
					id="technologies"
					className="d-flex list-unstyled flex-row justify-content-center align-items-center mt-5"
				>
					<li>
						<a
							id="git"
							href="https://git-scm.com/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<img
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
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
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
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
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
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
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
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
								onMouseOver={(e) => hoverImg(e)}
								onMouseOut={(e) => unHoverImg(e)}
								src={reduxIcon}
								alt="Redux.js"
								title="Redux.js"
							/>
						</a>
					</li>
				</ul>
			</section>
		</React.Fragment>
	);
};

export default Landing;
