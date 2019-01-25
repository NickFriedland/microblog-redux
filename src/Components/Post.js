import React, { Component } from 'react';
// import PostForm from './PostForm';
import PostDetailContainer from '../Containers/PostDetailContainer';
import PostFormContainer from '../Containers/PostFormContainer';
//import './Post.css';
// import styled from 'styled-components';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    // console.log('TOGGLE EDIT');
    this.setState(st => ({ isEditing: !st.isEditing }));
  }

  render() {
    return (
      <div className="Post">
        {this.state.isEditing ? (
          <PostFormContainer
            post={this.props.post}
            isEditing={this.state.isEditing}
            toggleEdit={this.toggleEdit}
            // updatePost={this.props.updatePost}
            postId={this.props.postId}
          />
        ) : (
          <PostDetailContainer
            post={this.props.post}
            // deletePost={this.props.deletePost}
            toggleEdit={this.toggleEdit}
            // addComment={this.props.addComment}
            // deleteComment={this.props.deleteComment}
          />
        )}
      </div>
    );
  }
}

export default Post;
