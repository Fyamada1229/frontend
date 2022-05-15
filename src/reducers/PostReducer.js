import React from "react";

const initialState = {
  posts: [],
  name: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_DATA":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({
      type: "GET_POST_DATA",
      payload: data,
    });
  };
};

export default postsReducer;
