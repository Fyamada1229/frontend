import React from "react";
import axios from "axios";

const initialState = {
  posts: [],
};

export const reedEvents = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_DATA":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

// 非同期処理
export const postsEvent = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "GET_POST_DATA",
      payload: data,
    });
  };
};

export default postsReducer;
