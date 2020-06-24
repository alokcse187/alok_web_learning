import React from 'react';

const Button = (props) => {
	return(
		<div>
			<button style={props.style} onClick={props.click}>{props.val}</button>
		</div>
	);
}

export default Button;