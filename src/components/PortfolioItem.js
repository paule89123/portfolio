import React from 'react';
import { Link } from 'react-router-dom'

function PortfolioItem(props) {
	return (
		<div className="card">
			<Link to={props.link}>
				<img alt={props.alt} className="card__image" src={props.img} />
			</Link>
			<div className="card__title">
				<Link to={props.link}>
					{props.title}
				</Link>
			</div>
			<div className="card__subtitle">
				<Link to={props.link}>
					{props.subtitle}
				</Link>
			</div>
		</div>
	)
}

export default PortfolioItem;