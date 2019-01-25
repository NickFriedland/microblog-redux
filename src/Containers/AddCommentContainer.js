import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddComment from '../Components/AddComment';
import { addComment } from '../actionCreators';

class AddCommentContainer extends Component {
  render() {
    return <AddComment {...this.props} />;
  }
}

const connectedComponent = connect(
  null,
  { addComment }
);

export default connectedComponent(AddCommentContainer);
