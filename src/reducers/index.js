import { combineReducers } from "redux";
import countReducer from "./CountReducer";
import postsReducer from "./PostReducer";

export default combineReducers({ countReducer, postsReducer });
