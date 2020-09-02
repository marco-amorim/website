import React from 'react';

import './styles.css';

import githubIcon from '../../assets/images/icons/social-media/github.svg';
import codewarsIcon from '../../assets/images/icons/social-media/codewars.svg';
import linkedinIcon from '../../assets/images/icons/social-media/linkedin.svg';
import stackoverflowIcon from '../../assets/images/icons/social-media/stackoverflow.svg';
import emailIcon from '../../assets/images/icons/social-media/email.svg';

import githubIconHover from '../../assets/images/icons/social-media/github-hover.svg';
import codewarsIconHover from '../../assets/images/icons/social-media/codewars-hover.svg';
import linkedinIconHover from '../../assets/images/icons/social-media/linkedin-hover.svg';
import stackoverflowIconHover from '../../assets/images/icons/social-media/stackoverflow-hover.svg';
import emailIconHover from '../../assets/images/icons/social-media/email-hover.svg';

const Footer = () => {
	return (
		<footer className="page-footer">
			<div className="copyright">Copyright © 2020 Marco Amorim</div>
			<ul className="d-flex list-unstyled">
				<li className="navitem">
					<a
						href="https://github.com/marco-amorim"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => (e.currentTarget.src = githubIconHover)}
							onMouseOut={(e) => (e.currentTarget.src = githubIcon)}
							src={githubIcon}
							alt="Github"
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
							onMouseOver={(e) => (e.currentTarget.src = linkedinIconHover)}
							onMouseOut={(e) => (e.currentTarget.src = linkedinIcon)}
							src={linkedinIcon}
							alt="LinkedIn"
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
							onMouseOver={(e) => (e.currentTarget.src = codewarsIconHover)}
							onMouseOut={(e) => (e.currentTarget.src = codewarsIcon)}
							src={codewarsIcon}
							alt="Codewars"
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
							onMouseOver={(e) =>
								(e.currentTarget.src = stackoverflowIconHover)
							}
							onMouseOut={(e) => (e.currentTarget.src = stackoverflowIcon)}
							src={stackoverflowIcon}
							alt="StackOverflow"
						/>
					</a>
				</li>
				<li className="navitem">
					<a
						href="mailto:marcoamorim95@hotmail.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => (e.currentTarget.src = emailIconHover)}
							onMouseOut={(e) => (e.currentTarget.src = emailIcon)}
							src={emailIcon}
							alt="E-mail"
						/>
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
