import styles from "./postlist.module.scss";
import { GET } from "../utils/https";
import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    GET("posts").then((data) => setPostList(data.posts));
  }, []);

  return (
    <div className={styles.Posts}>
      <div className={styles.wrapper}>
        <h2>POSTS</h2>
        <div className={styles.container}>
          {postList.map((item, index) => (
            <Post data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
