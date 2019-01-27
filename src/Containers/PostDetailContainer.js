import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from '../Components/PostDetail';
import { deletePost, getPostDetailFromAPI } from '../actionCreators';

class PostDetailContainer extends Component {
  render() {
    console.log('POST DETAIL CONTAINER PROPS', this.props);
    return <PostDetail {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deletePost, getPostDetailFromAPI }
);

export default connectedComponent(PostDetailContainer);
