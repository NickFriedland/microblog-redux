import React, { Component } from 'react';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';

//import './PostList.css';
// import styled from 'styled-components';

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Link to={`/${post.id}`}>
            <PostPreview post={post} />
          </Link>
        ))}
      </div>
    );
  }
}

export default PostList;
