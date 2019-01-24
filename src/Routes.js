import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import NavBar from './NavBar';
import PostForm from './Components/PostForm';
import uuid from 'uuid/v4';
import Post from './Components/Post';
import PostList from './Components/PostList';
// import Home from './Home.js';
//import './Routes.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: 'Hello',
          description: 'Hope this works',
          body: 'taco',
          id: '1'
        },
        {
          title: 'Hello',
          description: 'Hope this works',
          body: 'burrito',
          id: '2'
        }
      ]
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
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
    // console.log('DELETE FN');
    // take id param and compare against state posts array
    this.setState(st => {
      const results = st.posts.filter(post => id !== post.id);
      return { posts: results };
    });
    this.props.history.replace('/');
    // If id found, remove that post form state
    // Return redirect to homepage
  }

  renderPost(routeProps) {
    const postId = routeProps.match.params.postId;

    // console.log('TARGET POST ID', postId);
    // console.log('ROUTE PROPS', routeProps);
    const results = this.state.posts.filter(post => post.id === postId);
    // console.log('POST', post);
    if (results.length) {
      return (
        <Post
          post={results[0]}
          deletePost={this.deletePost}
          updatePost={this.updatePost}
        />
      );
    }
    // return this.props.history.replace('/');
    return <Redirect to="/" />;
  }

  updatePost(updatedPost) {
    // console.log('POST', post);
    // determine if post id matches id of post in state
    // Replace state post with updated post
    // setState to replace prev state with new state
    this.setState(st => {
      const updatedPosts = st.posts.map(post => {
        if (updatedPost.id === post.id) {
          return { ...updatedPost };
        }
        return { ...post };
      });
      return { posts: updatedPosts };
    });
  }

  render() {
    return (
      <div className="Routes">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostList posts={this.state.posts} />}
          />
          <Route
            exact
            path="/new"
            render={() => <PostForm addPost={this.addPost} />}
          />
          <Route exact path="/:postId" render={this.renderPost} />
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
