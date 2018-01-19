import React, { Component } from 'react';

class Author extends Component {
	render () {
		return (
			<div>
				<h4>Written by {this.props.author}</h4>
			</div>
		);
	}
}

export default Author;