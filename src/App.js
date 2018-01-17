import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        {<Author authors={this.props.allAuthors} />}
        <p>{this.props.body}</p>
        <h3>Comments:</h3>
        {<Comment comments={this.props.comments} />}
      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div className="Author">
      {this.props.authors.map( authors => <p>Written by {authors}</p>)}
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
      {this.props.comments.map( comments => <p>{comments}</p>)}
      </div>
    );
  }
}

export default Post;
