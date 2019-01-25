import {
  DELETE_COMMENT,
  ADD_COMMENT,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST
} from './actionTypes';

export function deleteComment(id, postId) {
  return {
    type: DELETE_COMMENT,
    payload: { id, postId }
  };
}

export function addComment(text, postId) {
  return {
    type: ADD_COMMENT,
    payload: { text, postId }
  };
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: { postId }
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: { post }
  };
}
export function updatePost(updatedPost) {
  return {
    type: UPDATE_POST,
    payload: { updatedPost }
  };
}
