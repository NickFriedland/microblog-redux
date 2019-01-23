import React, { Component } from 'react';
//import './PostForm.css';
// import styled from 'styled-components';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // console.log('EVENT', evt.target, 'STATE', this.state);
    const post = { ...this.state };
    this.props.addPost(post);
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className="PostForm">
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input onChange={this.handleChange} type="text" name="title" />
          <label htmlFor="title">Description:</label>
          <input onChange={this.handleChange} type="text" name="description" />
          <label htmlFor="title">Body:</label>
          <input onChange={this.handleChange} type="text" name="body" />
          <button type="submit">Save</button>
          <button type="submit">Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
