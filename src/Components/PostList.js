import React, { Component } from 'react';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';

//import './PostList.css';
// import styled from 'styled-components';

class PostList extends Component {
  async componentDidMount() {
    await this.props.getPostsFromAPI();
  }
  render() {
    // console.log('POSTLIST PROPS', this.props.posts);

    if (!this.props.posts) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        {this.props.posts.map(post => (
          <Link to={`/${post.id}`} key={post.id}>
            <PostPreview post={post} />
          </Link>
        ))}
      </div>
    );
  }
}

export default PostList;
