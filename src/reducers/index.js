import { combineReducers } from "redux";
import countReducer from "./CountReducer";
import postsReducer from "./PostReducer";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  countReducer,
  postsReducer,
  form: reduxFormReducer,
});
