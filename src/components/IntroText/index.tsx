import React, { useEffect } from 'react';

const IntroText = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('intro-text')?.classList.remove('d-none');
			document.getElementById('intro-text')?.classList.add('d-flex');
			document.getElementById('intro-text')?.classList.add('fade-in');
		}, 3000);
	}, []);

	return (
		<div id="intro-text" className="d-none justify-content-center">
			<p>Hey!</p>
		</div>
	);
};

export default IntroText;
