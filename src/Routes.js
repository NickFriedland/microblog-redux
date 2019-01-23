import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import NavBar from './NavBar';
import PostForm from './Components/PostForm';
import uuid from 'uuid/v4';
import Post from './Components/Post';
// import Home from './Home.js';
//import './Routes.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  addPost(post) {
    // Create a unique id and add to spread post
    const uniquePost = { ...post, id: uuid() };
    // Add updated post to this.state.posts w/o mutating

    this.setState(st => ({ posts: [...st.posts, uniquePost] }));
    // Redirect request to homepage
    this.props.history.push('/');
  }

  deletePost(id) {
    console.log('DELETE FN');
    // take id param and compare against state posts array
    // If id found, remove that post form state
    // Return redirect to homepage
  }

  render() {
    return (
      <div className="Routes">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <h1>HELLO FROM HOME!</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/new"
            render={() => <PostForm addPost={this.addPost} />}
          />
          <Route exact path="/:postId" render={() => <Post />} />
          <Route
            path="*"
            render={() => (
              <div>
                <h1>COULD NOT FIND</h1>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
