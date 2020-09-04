import React, { useEffect } from 'react';

import './styles.css';
import profilePicture from '../../assets/images/profile/profile_picture.jpeg';

const IntroImg = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('intro-img')?.classList.remove('d-none');
			document.getElementById('intro-img')?.classList.add('d-flex');
			document.getElementById('intro-img')?.classList.add('flicker-in-1');
		}, 2500);
	}, []);

	return (
		<div
			id="intro-img"
			className="intro-img-container justify-content-center d-none"
		>
			<a href="/">
				<img className="intro-img" src={profilePicture} alt="Profile" />
			</a>
		</div>
	);
};

export default IntroImg;
