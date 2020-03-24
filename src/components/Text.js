import React from 'react';
import Interest from './Interest'

function Text(props) {
	return (
		<div className="text-component">
			<div className="text-component__columns">
				<div className="text-component__columns__left-column">
					{props.title}
				</div> 
				<div className="text-component__columns__right-column">
					{props.children}
				</div>
			</div>

			{props.page === 'about' && 
				<div className="interests">
					<Interest title="CURRENTLY READING" subtitle="The Complete Manual of Typography" subtitle2="by James Felici" />
					<Interest title="CURRENTLY LEARNING" subtitle="Figma" subtitle2="design app" />
					<Interest title="CURRENTLY LISTENING TO" subtitle="Artificial Intelligence" subtitle2="a podcast by Lex Fridman" />
				</div>
			}
		</div>
	)
}

export default Text;