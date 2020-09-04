import React from 'react';

import './styles.css';

interface TitleProps {
	text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
	return (
		<div className="row d-flex justify-content-center mb-5">
			<h2 className="title">{text}</h2>
		</div>
	);
};

export default Title;
