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
		document.querySelectorAll('.nav-link').forEach((item) => {
			if (item.getAttribute('href') === window.location.pathname) {
				setSelected(item);
			}
		});

		document
			.querySelector('.mobile-menu-toggle')
			?.addEventListener('click', function () {
				document
					.querySelector('.animated-hamburguer-icon')
					?.classList.toggle('open');
			});
	}, []);

	function toggleMobileMenu() {
		if (document.getElementById('mobile-menu')?.classList.contains('d-none')) {
			document.getElementById('mobile-menu')?.classList.remove('d-none');
			document
				.getElementById('mobile-menu')
				?.classList.add('slide-in-fwd-left');
		} else {
			document.getElementById('mobile-menu')?.classList.toggle('slide-out-top');
		}
	}

	return (
		<>
			<nav id="menu-desktop" className="page-header navbar navbar-expand-lg">
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

			<nav id="menu-mobile" className="page-header navbar navbar-expand-lg">
				<a
					href="/"
					id="logo-menu-mobile"
					className="logo-header rotate-in-center"
				>
					M
				</a>
				<button
					id="mobile-menu-button"
					className="navbar-toggler mobile-menu-toggle"
					type="button"
					onClick={toggleMobileMenu}
				>
					<div className="animated-hamburguer-icon">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>

				<div
					id="mobile-menu"
					className="mobile-menu-container slide-in-fwd-left d-none"
				>
					<ul className="navbar list-unstyled mobile-menu">
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
				</div>
			</nav>
		</>
	);
};

export default Header;
