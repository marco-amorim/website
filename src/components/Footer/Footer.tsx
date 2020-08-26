import React from 'react';

import './styles.css';

import githubIcon from '../../assets/images/icons/github.svg';
import codewarsIcon from '../../assets/images/icons/codewars.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import stackoverflowIcon from '../../assets/images/icons/stackoverflow.svg';

import githubIconHover from '../../assets/images/icons/github-hover.svg';
import codewarsIconHover from '../../assets/images/icons/codewars-hover.svg';
import linkedinIconHover from '../../assets/images/icons/linkedin-hover.svg';
import stackoverflowIconHover from '../../assets/images/icons/stackoverflow-hover.svg';

const Footer = () => {
	function hoverImg(e: any) {
		const src = e.target.src;

		if (src.includes('github')) {
			e.target.src = githubIconHover;
		}

		if (src.includes('codewars')) {
			e.target.src = codewarsIconHover;
		}

		if (src.includes('linkedin')) {
			e.target.src = linkedinIconHover;
		}

		if (src.includes('stackoverflow')) {
			e.target.src = stackoverflowIconHover;
		}
	}

	function unHoverImg(e: any) {
		const src = e.target.src;

		if (src.includes('github')) {
			e.target.src = githubIcon;
		}

		if (src.includes('codewars')) {
			e.target.src = codewarsIcon;
		}

		if (src.includes('linkedin')) {
			e.target.src = linkedinIcon;
		}

		if (src.includes('stackoverflow')) {
			e.target.src = stackoverflowIcon;
		}
	}

	return (
		<div className="page-footer">
			<div className="copyright">Copyright © 2020 Marco Amorim</div>
			<ul className="d-flex list-unstyled">
				<li className="navitem">
					<a
						href="https://github.com/marco-amorim"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => hoverImg(e)}
							onMouseOut={(e) => unHoverImg(e)}
							src={githubIcon}
							alt=""
						/>
					</a>
				</li>
				<li className="navitem">
					<a
						href="https://www.linkedin.com/in/marcoamorim95/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => hoverImg(e)}
							onMouseOut={(e) => unHoverImg(e)}
							src={linkedinIcon}
							alt=""
						/>
					</a>
				</li>
				<li className="navitem">
					<a
						href="https://www.codewars.com/users/marco-amorim"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => hoverImg(e)}
							onMouseOut={(e) => unHoverImg(e)}
							src={codewarsIcon}
							alt=""
						/>
					</a>
				</li>
				<li className="navitem">
					<a
						href="https://stackoverflow.com/users/12823161/marco-amorim"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => hoverImg(e)}
							onMouseOut={(e) => unHoverImg(e)}
							src={stackoverflowIcon}
							alt=""
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
