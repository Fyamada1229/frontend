import React from "react";
import "./App.css";
import "./index.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button } from "@mui/material";
import Post from "./page/Post";
import SimpleForm from "./page/SimpleForm";
import showResults from "./page/showResults";

const App = () => {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  console.log(useSelector((state) => state.countReducer.count));

  return (
    <>
      <div className="App">
        <h1 className="text-zinc-400 text-6xl">Redux Learn</h1>
        <p className="mb-4">count:{count}</p>
        <Button variant="outlined" onClick={increase}>
          UP
        </Button>
        <span className="m-2" />
        <Button variant="outlined" onClick={decrease}>
          DOWN
        </Button>
        <h1 className="mb-3">====================================</h1>
        <SimpleForm onSubmit={showResults} />
      </div>
      {/* <Post /> */}
    </>
  );
};

export default App;

/********************
 * redux connect
 ********************/
// const mapStateToProps = (state) => {
//   return { count: state.countReducer.count };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch({ type: "INCREASE_COUNT" }),
//     decrease: () => dispatch({ type: "DECREASE_COUNT" }),
//   };
// };
//export default connect(mapStateToProps, mapDispatchToProps)(App);
