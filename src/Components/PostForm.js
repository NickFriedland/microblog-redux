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
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  static defaultProps = {
    addPost: () => console.log('Check wiring of update post'),
    updatePost: () => console.log('Check wiring of add post')
  };

  componentDidMount() {
    if (this.props.post) {
      this.setState({ ...this.state, ...this.props.post });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const post = { ...this.state };
    this.props.addPost(post);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    // Update state in routes (existing post is changed)
    const post = { ...this.state };
    // console.log('POST', post);
    this.props.updatePost(post);
    // calling toggleEdit prop
    this.props.toggleEdit();
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    let handleForm = this.props.isEditing
      ? this.handleUpdate
      : this.handleSubmit;
    return (
      <div className="PostForm">
        <h1>Post Form</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="title">Title:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}
          />
          <label htmlFor="title">Description:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}
          />
          <label htmlFor="title">Body:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="body"
            value={this.state.body}
          />
          <button type="submit">Save</button>
          <button type="submit">Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
