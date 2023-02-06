import React from 'react';

class Header extends React.Component {
	componentWillMount() {
		console.log("Component will mount method")
	}

	render() {
		return (
			<div>
				<h1>This is the Header component</h1>
			</div>
		)
	}
}

export default Header;