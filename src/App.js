import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Button } from "@mui/material";
import Post from "./page/Post";
import EventsIndex from "./page/EventsIndex";
import SimpleForm from "./page/SimpleForm";
import { data } from "autoprefixer";
import axios from "axios";

const App = () => {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  const getPostDate = () => {
    dispatch({ type: "GET_POST_DATA" });
  };

  const [dervie, setDervie] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/list")
      .then((response) => setDervie(response.data))
      .catch((error) => console.log(error));
  }, []);

  const names = [];
  for (let city in dervie) {
    console.log(city, dervie[city]);
    names.push(city, dervie[city]);
  }

  const test = names[1]?.map((data) => data.id);
  console.log(test);

  //データをとってきて非同期で即時反映させることをする
  return (
    <>
      <div className="App">
        <h1 className="text-zinc-400 text-6xl">Redux Learn</h1>
        <p className="mb-4">count:{count}カウントです</p>
        <Button variant="outlined" onClick={increase}>
          UP
        </Button>
        <span className="m-2" />
        <Button variant="outlined" onClick={decrease}>
          DOWN
        </Button>
        <h1 className="mb-3">====================================</h1>
        <SimpleForm onSubmit={getPostDate} />
      </div>
      {/* <Post /> */}
      <EventsIndex />

      <div>
        {test?.map((data, index) => (
          <li>{data}</li>
        ))}
      </div>
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
