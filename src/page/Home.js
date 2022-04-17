import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const Home = ({ count }) => {
  const counter = useSelector((state) => state.count);

  const number = counter * 100;
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {number}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(Home);
