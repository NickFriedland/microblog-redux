import {
  DELETE_COMMENT,
  ADD_COMMENT,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST
} from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: [
    {
      title: 'Hello',
      description: 'Hope this works',
      body: 'taco',
      id: '1',
      comments: [{ id: '1', text: 'Here is a comment' }]
    },
    {
      title: 'Hello',
      description: 'Hope this works',
      body: 'burrito',
      id: '2',
      comments: []
    }
  ]
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_COMMENT: {
      const { id, postId } = action.payload;
      const commentId = id;
      // Map to filter
      const updatedPosts = state.posts.map(post => {
        if (postId === post.id) {
          console.log('POST ID', postId);
          console.log('POST', post);
          // filter on commentId
          const updatedComments = post.comments.filter(comment => {
            return comment.id !== commentId;
          });
          const updatedPost = { ...post, comments: updatedComments };
          return updatedPost;
        }
        return post;
      });
      return { ...state, posts: updatedPosts };
    }

    case ADD_COMMENT: {
      const { text, postId } = action.payload;
      const newComment = { text, id: uuid() };
      const updatedPosts = state.posts.map(post => {
        if (post.id === postId) {
          const newComments = [...post.comments, newComment];
          const updatedPost = { ...post, comments: newComments };
          return updatedPost;
        }
        return post;
      });
      return { ...state, posts: updatedPosts };
    }

    case DELETE_POST: {
      const { postId } = action.payload;
      const results = state.posts.filter(post => postId !== post.id);
      return { ...state, posts: results };
    }

    case ADD_POST: {
      const { post } = action.payload;
      const uniquePost = { ...post, id: uuid() };
      // Add updated post to this.state.posts w/o mutating

      return { ...state, posts: [...state.posts, uniquePost] };
    }

    case UPDATE_POST: {
      const { updatedPost } = action.payload;
      const updatedPosts = state.posts.map(post => {
        if (updatedPost.id === post.id) {
          return { ...updatedPost };
        }
        return { ...post };
      });
      return { ...state, posts: updatedPosts };
    }

    default:
      return state;
  }
}

export default rootReducer;
