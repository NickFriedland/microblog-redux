import axios from 'axios';

import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function getPostsFromAPI() {
  return async function(dispatch) {
    const res = await axios.get('http://localhost:5000/api/posts/');
    // console.log('API WORKING?', res.data);
    dispatch(gotPosts(res.data));
  };
}

function gotPosts(posts) {
  return { type: 'LOAD_POSTS', payload: posts };
}

export function getPostDetailFromAPI(postId) {
  return async function(dispatch) {
    const res = await axios.get(`http://localhost:5000/api/posts/${postId}`);
    // console.log('API WORKING?', res.data);
    dispatch(gotPostById(res.data));
  };
}

function gotPostById(post) {
  return { type: 'LOAD_POST_DETAIL', payload: post };
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

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: { postId }
  };
}

export function addComment(text, postId) {
  return {
    type: ADD_COMMENT,
    payload: { text, postId }
  };
}
export function deleteComment(id, postId) {
  return {
    type: DELETE_COMMENT,
    payload: { id, postId }
  };
}
