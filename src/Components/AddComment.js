import React, { Component } from 'react';
//import './AddComment.css';
// import styled from 'styled-components';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  static defaultProps = {
    addComment: () => console.log('COMMENT ADDED'),
    postId: '1'
  };

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addComment(this.state.text, this.props.postId);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="AddComment">
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="New comment"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
