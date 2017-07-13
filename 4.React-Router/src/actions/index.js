import axios from 'axios';
const API_KEY = require('../../config.js').API_KEY;

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function getPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: GET_POST,
        payload: request
    };
}

export function deletePost(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: id
    };
}