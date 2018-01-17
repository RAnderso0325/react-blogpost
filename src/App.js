import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.body}</p>
        <ul>
        {this.props.comments.map( comments => <li>{comments}</li>)}
        </ul>
      </div>
    );
  }
}

export default Post;
