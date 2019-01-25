import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../Components/Post';
// import { ACTION } from '../actionCreators';

class PostContainer extends Component {
  render() {
    const result = this.props.posts.filter(
      post => post.id === this.props.postId
    );
    const post = result[0];
    return <Post {...this.props} post={post} />;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(PostContainer);
