import React, { Component } from 'react';
import './App.css';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <CreatePost />
        </div>
        <div className="App">
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
