import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
//import './PostPreview.css';
// import styled from 'styled-components';

class PostPreview extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle>{this.props.post.title}</CardTitle>
          <CardText>{this.props.post.description}</CardText>
        </Card>
      </div>
    );
  }
}

export default PostPreview;
