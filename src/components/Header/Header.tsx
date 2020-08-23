import React from 'react';

import './styles.css';

const Header = () => {
	return (
		<nav
			id="header"
			className="page-header navbar navbar-expand-lg navbar-dark bg-dark"
		>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" href="/">
						Home <span className="sr-only">(current)</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
