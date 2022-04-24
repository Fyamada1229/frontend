import { combineReducers } from "redux";
import countReducer from "./CountReducer";
import postsReducer from "./PostReducer";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer,
});

export default combineReducers({
  reducer,
  countReducer,
  postsReducer,
});
