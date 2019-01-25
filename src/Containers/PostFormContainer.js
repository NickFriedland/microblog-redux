import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../Components/PostForm';
import { addPost, updatePost } from '../actionCreators';

class PostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

const connectedComponent = connect(
  null,
  { addPost, updatePost }
);

export default connectedComponent(PostFormContainer);
