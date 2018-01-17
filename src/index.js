import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
	title: "Dinosaurs Are Awesome",
	authors: [
	"Stealthy Stegosaurus",
	"Tiny T-Rex",
	"Ivory Iguanodon"
	],
	body: "check out this bodddddy prop",
	comments: [
	"Wow, first comment, great post",
	"au contraire mon fraire",
	"dude you spelled that wrong, just so you  know"
	]
}

ReactDOM.render(<Post title={post.title} allAuthors={post.authors} body={post.body} comments={post.comments} />, 
document.getElementById('root'));
registerServiceWorker();
