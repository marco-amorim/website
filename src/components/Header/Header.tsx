import React from 'react';

import './styles.css';

const Header = () => {
	return (
		<nav id="header" className="page-header navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
