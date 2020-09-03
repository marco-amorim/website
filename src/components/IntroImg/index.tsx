import React, { useEffect } from 'react';

import './styles.css';

const IntroImg = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('intro-img')?.classList.remove('d-none');
			document.getElementById('intro-img')?.classList.add('d-flex');
			document.getElementById('intro-img')?.classList.add('flip-in-hor-bottom');
		}, 2500);
	}, []);

	return (
		<div
			id="intro-img"
			className="intro-img-container justify-content-center d-none"
		>
			<a href="/">
				<img
					className="intro-img"
					src="https://avatars2.githubusercontent.com/u/40203788?s=460&u=bb67357c370e74a78cb43239833649004c9212d6&v=4"
					alt="Profile"
				/>
			</a>
		</div>
	);
};

export default IntroImg;
