import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getPosts } from "../reducers/PostReducer";

const Post = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.id}:{post.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Post;
