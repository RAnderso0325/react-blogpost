import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import Blog from './Blog.js';
import About from './About.js';
import Movies from './Movies.js';
import Food from './Food.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <div className="nav-wrapper">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Main Blog</Link></li>
                <li><Link to="/about">About ME</Link></li>
                <li><Link to="/mymovies">What to Watch</Link></li>
                <li><Link to="/myfood">What to Eat</Link></li>
              </ul>
            </div>
          </nav>
          <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={() => <Blog post={this.props.post} />} />
          <Route path="/about" component={About} />
          <Route path="/mymovies" component={Movies} />
          <Route path="/myfood" component={Food} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
