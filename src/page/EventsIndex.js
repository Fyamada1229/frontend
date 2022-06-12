import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { readEvents } from "../actions";

const EventsIndex = (count) => {
  useEffect(() => {
    console.log("hello");
  }, []);

  const posts = useSelector((state) => state.countReducer);

  console.log(count.count);

  return (
    <>
      <div>
        <h1>className: {count.count}</h1>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.countReducer.count };
};

//const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps)(EventsIndex);
