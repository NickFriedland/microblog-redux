import React, { Component } from 'react';
import CommentList from './CommentList';
import { withRouter } from 'react-router';
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
      id: 'id',
      comments: []
    },
    toggleEdit: () => console.log('EDITING'),
    deletePost: () => console.log('DELETE AND REDIRECT')
    // addComment: () => console.log('Add comment from post detail'),
    // deleteComment: () => console.log('Delete comment from post detail')
  };

  async componentDidMount() {
    await this.props.getPostDetailFromAPI(this.props.match.params.postId);
  }

  handleToggleEdit() {
    this.props.toggleEdit();
  }

  handleDelete() {
    this.props.deletePost(this.props.post.id);
    this.props.history.replace('/');
  }

  render() {
    console.log('GET REQUEST POST DETAIL', this.props);
    const { title, description, body, comments, id } = this.props.post;

    return (
      <div className="PostDetail">
        <button onClick={this.handleToggleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <p>{body}</p>
        <CommentList
          comments={comments}
          postId={id}
          // addComment={this.props.addComment}
          // deleteComment={this.props.deleteComment}
        />
      </div>
    );
  }
}

export default withRouter(PostDetail);
