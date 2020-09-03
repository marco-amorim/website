import React, { useEffect } from 'react';

import './styles.css';

const IntroText = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('intro-text')?.classList.remove('d-none');
			document.getElementById('intro-text')?.classList.add('d-flex');
		}, 3000);

		var timeout = 3500;
		document.querySelectorAll('*[id^="intro-text-"]').forEach((element) => {
			setTimeout(() => {
				element?.classList.remove('d-none');
				element?.classList.add('fade-in');
			}, timeout);
			timeout += 1000;
		});
	}, []);

	return (
		<div id="intro-text" className="d-none justify-content-center flex-column">
			<div className="row justify-content-center">
				<p id="intro-text-1" className="d-none">
					Hey!
				</p>
			</div>
			<div className="row justify-content-center">
				<p id="intro-text-2" className="d-none text-center">
					Nice to meet you, my name is Marco
				</p>
			</div>
			<div className="row justify-content-center">
				<p id="intro-text-3" className="d-none text-center">
					I'm a Software Developer
				</p>
			</div>
			<div className="row justify-content-center">
				<p id="intro-text-4" className="d-none text-center">
					I'm passionate about changing peoples lives through technology
				</p>
			</div>
			<div className="row justify-content-center">
				<p id="intro-text-5" className="d-none text-center">
					Let's turn your ideas into reality{' '}
					<span role="img" aria-label="Rocket">
						🚀
					</span>
				</p>
			</div>
		</div>
	);
};

export default IntroText;
