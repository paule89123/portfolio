import React from 'react';

function Carousel() {
	return (
		<div className="interest">
			<div className="interest__title">{props.title}</div>
			<div className="interest__subtitle">{props.subtitle}<span className="interest__subtitle2">, {props.subtitle2}</span></div>
		</div>
	)
}

export default Carousel;