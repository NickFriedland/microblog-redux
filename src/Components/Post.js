import React, { Component } from 'react';
import PostForm from './PostForm';
import PostDetail from './PostDetail';
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
    console.log('TOGGLE EDIT');
    // this.state.isEditing: !this.state.isEditing
  }

  render() {
    return (
      <div className="Post">
        {this.state.isEditing ? <PostForm /> : <PostDetail />}
      </div>
    );
  }
}

export default Post;
