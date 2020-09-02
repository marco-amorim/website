import githubIcon from '../assets/images/icons/social-media/github.svg';
import codewarsIcon from '../assets/images/icons/social-media/codewars.svg';
import linkedinIcon from '../assets/images/icons/social-media/linkedin.svg';
import stackoverflowIcon from '../assets/images/icons/social-media/stackoverflow.svg';
import emailIcon from '../assets/images/icons/social-media/email.svg';

import githubIconHover from '../assets/images/icons/social-media/github-hover.svg';
import codewarsIconHover from '../assets/images/icons/social-media/codewars-hover.svg';
import linkedinIconHover from '../assets/images/icons/social-media/linkedin-hover.svg';
import stackoverflowIconHover from '../assets/images/icons/social-media/stackoverflow-hover.svg';
import emailIconHover from '../assets/images/icons/social-media/email-hover.svg';

import gitIcon from '../assets/images/icons/technologies/git.svg';
import javaIcon from '../assets/images/icons/technologies/java.svg';
import nodejsIcon from '../assets/images/icons/technologies/nodejs.svg';
import reactIcon from '../assets/images/icons/technologies/react.svg';
import reduxIcon from '../assets/images/icons/technologies/redux.svg';

import gitIconHover from '../assets/images/icons/technologies/git-hover.svg';
import javaIconHover from '../assets/images/icons/technologies/java-hover.svg';
import nodejsIconHover from '../assets/images/icons/technologies/nodejs-hover.svg';
import reactIconHover from '../assets/images/icons/technologies/react-hover.svg';
import reduxIconHover from '../assets/images/icons/technologies/redux-hover.svg';

//TODO: improve this logic
export const hoverImg = (e: any) => {
	const src = e.target.src;

	if (src.includes('git')) {
		e.target.src = gitIconHover;
	}

	if (src.includes('java')) {
		e.target.src = javaIconHover;
	}

	if (src.includes('node')) {
		e.target.src = nodejsIconHover;
	}

	if (src.includes('react')) {
		e.target.src = reactIconHover;
	}

	if (src.includes('redux')) {
		e.target.src = reduxIconHover;
	}

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

	if (src.includes('email')) {
		e.target.src = emailIconHover;
	}
};

export const unHoverImg = (e: any) => {
	const src = e.target.src;

	if (src.includes('git')) {
		e.target.src = gitIcon;
	}

	if (src.includes('java')) {
		e.target.src = javaIcon;
	}

	if (src.includes('node')) {
		e.target.src = nodejsIcon;
	}

	if (src.includes('react')) {
		e.target.src = reactIcon;
	}

	if (src.includes('redux')) {
		e.target.src = reduxIcon;
	}

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

	if (src.includes('email')) {
		e.target.src = emailIcon;
	}
};
