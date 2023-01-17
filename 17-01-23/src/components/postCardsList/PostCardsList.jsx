import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import PostCard from "../postCard";

const PostCardsList = () => {
  const [PostCardsList, setPostCardsList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setPostCardsList(posts));
  }, []);

  return (
    <div className="PostCardsList">
      {PostCardsList.map((msg) => (
        <PostCard data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default PostCardsList;
