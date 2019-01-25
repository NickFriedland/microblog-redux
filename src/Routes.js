import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import NavBar from './NavBar';
// import PostForm from './Components/PostForm';
// import uuid from 'uuid/v4';
// import Post from './Components/Post';
// import PostList from './Components/PostList';
import PostListContainer from './Containers/PostListContainer';
import PostFormContainer from './Containers/PostFormContainer';
import PostContainer from './Containers/PostContainer';
// import Home from './Home.js';
//import './Routes.css';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    // this.addPost = this.addPost.bind(this);
    // this.deletePost = this.deletePost.bind(this);
    this.renderPost = this.renderPost.bind(this);
    // this.updatePost = this.updatePost.bind(this);
    // this.addComment = this.addComment.bind(this);
    // this.deleteComment = this.deleteComment.bind(this);
  }

  // addPost(post) {
  //   // Create a unique id and add to spread post
  //   const uniquePost = { ...post, id: uuid() };
  //   // Add updated post to this.state.posts w/o mutating

  //   this.setState(st => ({ posts: [...st.posts, uniquePost] }));
  //   // Redirect request to homepage
  //   this.props.history.push('/');
  // }

  // deletePost(id) {
  //   // console.log('DELETE FN');
  //   // take id param and compare against state posts array
  //   this.setState(st => {
  //     const results = st.posts.filter(post => id !== post.id);
  //     return { posts: results };
  //   });
  //   this.props.history.replace('/');
  //   // If id found, remove that post form state
  //   // Return redirect to homepage
  // }

  renderPost(routeProps) {
    const postId = routeProps.match.params.postId;

    // console.log('TARGET POST ID', postId);
    // console.log('ROUTE PROPS', routeProps);
    // const results = this.state.posts.filter(post => post.id === postId);
    // console.log('POST', post);
    // if (results.length) {
    return (
      <PostContainer
        // post={results[0]}
        postId={postId}
        // deletePost={this.deletePost}
        // updatePost={this.updatePost}
        // addComment={this.addComment}
        // deleteComment={this.deleteComment}
      />
    );
    // }
    // return this.props.history.replace('/');
    // return <Redirect to="/" />;
  }

  // updatePost(updatedPost) {
  //   // console.log('POST', post);
  //   // determine if post id matches id of post in state
  //   // Replace state post with updated post
  //   // setState to replace prev state with new state
  //   this.setState(st => {
  //     const updatedPosts = st.posts.map(post => {
  //       if (updatedPost.id === post.id) {
  //         return { ...updatedPost };
  //       }
  //       return { ...post };
  //     });
  //     return { posts: updatedPosts };
  //   });
  // }

  // addComment(text, postId) {
  //   // compare target post id to posts list id
  //   const newComment = { text, id: uuid() };
  //   this.setState(st => {
  //     const updatedPosts = st.posts.map(post => {
  //       if (post.id === postId) {
  //         const newComments = [...post.comments, newComment];
  //         const updatedPost = { ...post, comments: newComments };
  //         return updatedPost;
  //       }
  //       return post;
  //     });
  //     return { posts: updatedPosts };
  //   });
  // }

  // deleteComment(commentId, postId) {
  //   this.setState(st => {
  //     const updatedPosts = st.posts.map(post => {
  //       if (postId === post.id) {
  //         // filter on commentId
  //         const updatedComments = post.comments.filter(comment => {
  //           return comment.id !== commentId;
  //         });
  //         const updatedPost = { ...post, comments: updatedComments };
  //         return updatedPost;
  //       }
  //       return post;
  //     });
  //     return { posts: updatedPosts };
  //   });
  // }

  render() {
    return (
      <div className="Routes">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <PostListContainer />} />
          <Route
            exact
            path="/new"
            render={props => <PostFormContainer {...props} />}
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
