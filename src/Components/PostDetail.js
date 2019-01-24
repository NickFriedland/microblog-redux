import React, { Component } from 'react';
//import './PostDetail.css';
// import styled from 'styled-components';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  static defaultProps = {
    post: {
      title: 'TITLE',
      description: 'DESC',
      body: 'GREAT STORY',
      id: 'id'
    },
    toggleEdit: () => console.log('EDITING'),
    deletePost: () => console.log('DELETE AND REDIRECT')
  };

  handleToggleEdit() {}

  handleDelete() {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    const { title, description, body } = this.props.post;
    return (
      <div className="PostDetail">
        <button onClick={this.handleToggleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <p>{body}</p>
      </div>
    );
  }
}

export default PostDetail;
