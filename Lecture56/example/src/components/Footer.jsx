import React from 'react';

const Footer = (props) => {
	console.log(props);
	return (
		<footer>
			<h3>This is a Footer component for {props.name}</h3>
			<button >Click me</button>
		</footer>
	)
}

export default Footer;