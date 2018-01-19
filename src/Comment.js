import React, { Component } from 'react';

class Comment extends Component {
	render() {
		const allComments = this.props.comments.map(comment => {
			return <p>&lsquo;{comment}&rsquo;</p>
		});
		return (
			<div>
				{allComments}
			</div>
		);
	}
}

export default Comment;