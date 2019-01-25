import React, { Component } from 'react';
import CommentContainer from '../Containers/CommentContainer';
import AddCommentContainer from '../Containers/AddCommentContainer';

//import './CommentList.css';
// import styled from 'styled-components';

class CommentList extends Component {
  static defaultProps = {
    postId: '1',
    comments: [{ id: '1', text: 'Comment1' }, { id: '2', text: 'Comment2' }]
    // deleteComment: () => console.log('CommentDeleted - CommentList'),
    // addComment: () => console.log('addComment - CommentList')
  };

  render() {
    return (
      <div className="CommentList">
        {this.props.comments.map(comment => {
          return (
            <CommentContainer
              id={comment.id}
              postId={this.props.postId}
              text={comment.text}
              // deleteComment={this.props.deleteComment}
            />
          );
        })}
        <AddCommentContainer
          // addComment={this.props.addComment}
          postId={this.props.postId}
        />
      </div>
    );
  }
}

export default CommentList;
