import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
	title: "DINOSAURS RULE",
	author: "Stegasaurous",
	body: "check out this bodddddy prop",
	comments: [
	"Wow, first comment, great post",
	"au contraire mon fraire",
	"dude you spelled that wrong, just so you  know"
	]
}

ReactDOM.render(<Post title={post.title} author={post.author} body={post.body} comments={post.comments} />, document.getElementById('root'));
registerServiceWorker();
