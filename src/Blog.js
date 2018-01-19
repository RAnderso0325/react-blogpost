import React, { Component } from "react";
import Author from "./Author.js";
import Comment from "./Comment.js";

class Post extends Component {
  render() {
    const allPosts = this.props.post.map(posts => {
      return (
        <div>
          <h1 className="Title">{posts.title}</h1>
          <Author author={posts.author} />
          <p>{posts.content}</p>
          <h3>Comments:</h3>
          <Comment comments={posts.comments} />
          <hr />
        </div>
      );
    });

    return (
      <div className="Post">
        <h1>Main Blog</h1>
        {allPosts}
      </div>
    );
  }
}

export default Post;
