import React, { useEffect } from 'react';

import './styles.css';
import Title from '../../components/Title';

const Certificates = () => {
	useEffect(() => {
		document.getElementById('page-footer')?.classList.add('footer-fixed');
	});
	return (
		<section id="certificates" className="container">
			<Title text="Courses" />
			<ul id="courses" className="list-unstyled d-flex flex-column">
				<li>
					<a
						href="https://www.udemy.com/certificate/UC-847d1f32-1e4b-44c3-a67d-2f9e868cd613/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Complete Web Development 2020 - 20 courses + 20 projects
					</a>
				</li>
				<li>
					<a
						href="https://www.udemy.com/certificate/UC-26079c65-7456-4b6d-9f40-6bd5d9695c96/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Java Complete 2020 Object Oriented Programming + Projects
					</a>
				</li>
				<li>
					<a
						href="https://www.udemy.com/certificate/UC-b4739211-c42b-4b9a-981c-472e84c6be36/"
						rel="noopener noreferrer"
						target="_blank"
					>
						JSP, Servlets and JDBC for Beginners: Build a Database App
					</a>
				</li>
			</ul>

			<Title text="Participations" />
			<ul id="participations" className="list-unstyled d-flex flex-column">
				<li>
					<a
						href="https://github.com/marco-amorim/NLW-02"
						rel="noopener noreferrer"
						target="_blank"
					>
						Next Level Week #02{' '}
					</a>
					at{' '}
					<a
						href="https://rocketseat.com.br/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Rocketseat
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Certificates;
