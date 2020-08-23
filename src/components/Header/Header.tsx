import React, { useState, useEffect } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
	const [selected, setSelected] = useState(
		document.querySelectorAll('.nav-link')[0]
	);

	useEffect(() => {
		document.querySelectorAll('.nav-link').forEach((item) => {
			item.addEventListener('click', function () {
				setSelected(item);
			});
			if (selected === item) {
				item.classList.add('selected-item');
			} else {
				item.classList.remove('selected-item');
			}
		});
	}, [selected]);

	useEffect(() => {
		document.querySelectorAll('.nav-link')[0].classList.add('selected-item');
	}, []);

	return (
		<nav id="header" className="page-header navbar navbar-expand-lg">
			{/* TODO: find a nice font for the logo */}
			<a href="/" className="logo-header">
				M
			</a>

			<ul className="navbar list-unstyled">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/portfolio">
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/certificates">
						Certificates
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
