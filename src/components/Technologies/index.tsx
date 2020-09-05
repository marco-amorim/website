import React from 'react';

import './styles.css';

import gitIcon from '../../assets/images/icons/technologies/git.svg';
import javaIcon from '../../assets/images/icons/technologies/java.svg';
import nodejsIcon from '../../assets/images/icons/technologies/nodejs.svg';
import reactIcon from '../../assets/images/icons/technologies/react.svg';
import reduxIcon from '../../assets/images/icons/technologies/redux.svg';
import typescriptIcon from '../../assets/images/icons/technologies/typescript.svg';
import bootstrapIcon from '../../assets/images/icons/technologies/bootstrap.svg';

import gitIconHover from '../../assets/images/icons/technologies/git-hover.svg';
import javaIconHover from '../../assets/images/icons/technologies/java-hover.svg';
import nodejsIconHover from '../../assets/images/icons/technologies/nodejs-hover.svg';
import reactIconHover from '../../assets/images/icons/technologies/react-hover.svg';
import reduxIconHover from '../../assets/images/icons/technologies/redux-hover.svg';
import typescriptIconHover from '../../assets/images/icons/technologies/typescript-hover.svg';
import bootstrapIconHover from '../../assets/images/icons/technologies/bootstrap-hover.svg';

const Technologies = () => {
	return (
		<div id="technologies-container">
			<ul className="d-flex list-unstyled flex-row justify-content-center align-items-center technologies">
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
						id="typescript"
						href="https://www.typescriptlang.org/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => (e.currentTarget.src = typescriptIconHover)}
							onMouseOut={(e) => (e.currentTarget.src = typescriptIcon)}
							src={typescriptIcon}
							alt="Typescript"
							title="TypeScript"
						/>
					</a>
				</li>
			</ul>
			<ul className="d-flex list-unstyled flex-row justify-content-center align-items-center technologies">
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
						id="bootstrap"
						href="https://getbootstrap.com/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							onMouseOver={(e) => (e.currentTarget.src = bootstrapIconHover)}
							onMouseOut={(e) => (e.currentTarget.src = bootstrapIcon)}
							src={bootstrapIcon}
							alt="Bootstrap"
							title="Bootstrap"
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Technologies;
