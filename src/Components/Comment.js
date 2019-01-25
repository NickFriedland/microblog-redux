import React, { Component } from 'react';
//import './Comment.css';
// import styled from 'styled-components';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  static defaultProps = {
    id: '1',
    text: 'text',
    postId: '1',
    deleteComment: () => console.log('Comment deleted')
  };

  handleDelete() {
    this.props.deleteComment(this.props.id, this.props.postId);
  }

  render() {
    return (
      <div className="Comment">
        <button onClick={this.handleDelete}>X</button>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comment;
