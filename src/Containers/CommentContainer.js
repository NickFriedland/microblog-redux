import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Components/Comment';
import { deleteComment } from '../actionCreators';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

const connectedComponent = connect(
  null,
  { deleteComment }
);

export default connectedComponent(CommentContainer);
