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

export default postsReducer;
