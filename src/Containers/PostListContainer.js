import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../Components/PostList';
// import { ACTION } from '../actionCreators';

class PostListContainer extends Component {
  render() {
    return <PostList {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(PostListContainer);
