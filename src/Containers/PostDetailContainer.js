import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetail from '../Components/PostDetail';
import { deletePost } from '../actionCreators';

class PostDetailContainer extends Component {
  render() {
    return <PostDetail {...this.props} />;
  }
}

const connectedComponent = connect(
  null,
  { deletePost }
);

export default connectedComponent(PostDetailContainer);
