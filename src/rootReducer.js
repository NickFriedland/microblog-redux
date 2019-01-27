import {
  LOAD_POSTS,
  LOAD_POST_DETAIL,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: [
    {
      title: 'Redux Default Posts State',
      description: 'Default state for posts data',
      body: 'taco',
      id: '1',
      comments: [{ id: '1', text: 'Here is a comment' }]
    }
  ],
  titles: [
    {
      title: 'Redux Default Titles State',
      description: 'Default state for title data',
      id: '2'
    }
  ]
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_POSTS: {
      // console.log('POST LIST POSTS FROM API', action.payload);
      const posts = action.payload;
      return { ...state, posts };
    }

    case LOAD_POST_DETAIL: {
      console.log('PAYLOAD FROM API', action.payload);
      // Need logic to add single post to state
      
      const posts = action.payload;
      return { ...state };
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

    case DELETE_POST: {
      const { postId } = action.payload;
      const results = state.posts.filter(post => postId !== post.id);
      return { ...state, posts: results };
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

    case DELETE_COMMENT: {
      const { id, postId } = action.payload;
      const commentId = id;
      // Map to filter
      const updatedPosts = state.posts.map(post => {
        if (postId === post.id) {
          // console.log('POST ID', postId);
          // console.log('POST', post);
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

    default:
      return state;
  }
}

export default rootReducer;
