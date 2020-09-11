import React, { useEffect } from 'react';

import './styles.css';
import Title from '../../components/Title';

const Portfolio = () => {
	useEffect(() => {
		document.getElementById('page-footer')?.classList.add('footer-fixed');
	});

	return (
		<section id="portfolio" className="container">
			<Title text="Personal projects" />
			<li>
				<div className="project-link">
					<a
						href="https://github.com/marco-amorim/travel-log-app"
						rel="noopener noreferrer"
						target="_blank"
					>
						Travel Log App
					</a>
				</div>
				Full stack application to store and list places you have traveled
			</li>

			<li>
				<div className="project-link">
					<a
						href="https://github.com/marco-amorim/NLW-02"
						rel="noopener noreferrer"
						target="_blank"
					>
						Proffy
					</a>
				</div>
				Learning platform for students and teachers to schedule private
				classes
			</li>

			<li>
				<div className="project-link">
					<a
						href="https://github.com/marco-amorim/personal-agenda"
						rel="noopener noreferrer"
						target="_blank"
					>
						Personal Agenda
					</a>
				</div>
				Desktop application for managing contacts and meetings
			</li>

			<li>
				<div className="project-link">
					<a
						href="https://github.com/marco-amorim/website"
						rel="noopener noreferrer"
						target="_blank"
					>
						Website
					</a>
				</div>
				Personal Website for portfolio and networking, the whole code for this
				website
			</li>
		</section>
	);
};

export default Portfolio;
