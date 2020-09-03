import React, { useState, useEffect } from 'react';

import './styles.css';

const Header = () => {
	const [selectedDesktop, setSelectedDesktop] = useState(
		document.querySelectorAll('.desktop-link')[0]
	);
	const [selectedMobile, setSelectedMobile] = useState(
		document.querySelectorAll('.mobile-link')[0]
	);

	useEffect(() => {
		document.querySelectorAll('.desktop-link').forEach((item) => {
			item.addEventListener('click', function () {
				setSelectedDesktop(item);
			});
			if (selectedDesktop === item) {
				item.classList.add('selected-item');
			} else {
				item.classList.remove('selected-item');
			}
		});
	}, [selectedDesktop]);

	useEffect(() => {
		document.querySelectorAll('.mobile-link').forEach((item) => {
			item.addEventListener('click', function () {
				setSelectedMobile(item);
			});
			if (selectedMobile === item) {
				item.classList.add('selected-item');
			} else {
				item.classList.remove('selected-item');
			}
		});
	}, [selectedMobile]);

	useEffect(() => {
		document.querySelectorAll('.desktop-link').forEach((item) => {
			if (item.getAttribute('href') === window.location.pathname) {
				setSelectedDesktop(item);
			}
		});

		document.querySelectorAll('.mobile-link').forEach((item) => {
			if (item.getAttribute('href') === window.location.pathname) {
				setSelectedMobile(item);
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

		document
			.querySelectorAll('#mobile-menu > ul > li > a')
			.forEach((element) => {
				element.addEventListener('click', function () {
					setTimeout(function () {
						document
							.getElementById('mobile-menu')
							?.classList.add('slide-out-top');
						document
							.querySelector('.animated-hamburguer-icon')
							?.classList.remove('open');
					}, 300);
				});
			});
	}

	return (
		<>
			<nav id="menu-desktop" className="page-header navbar navbar-expand-lg">
				<a href="/" className="logo-header">
					M
				</a>

				<ul className="navbar list-unstyled">
					<li className="nav-item">
						<a className="nav-link desktop-link" href="/">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link desktop-link" href="/portfolio">
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link desktop-link" href="/certificates">
							Certificates
						</a>
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
							<a className="nav-link mobile-link" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link mobile-link" href="/portfolio">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link mobile-link" href="/certificates">
								Certificates
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
