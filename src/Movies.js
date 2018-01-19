import React, { Component } from 'react';

class Movies extends Component {
  render() {
    return (
        <div className="Movies">
            <h1>You need to see these movies</h1>
            <h5>So basically here is my list of movies you should see</h5>
            <ul>
                <li>City of God</li>
                <li>Love Actually</li>
                <li>The Princess Bride</li>
            </ul>
            <h5>Honestly, if you don't watch these, we might not be able to be friends.</h5>
        </div>
    );
  }
}

export default Movies;