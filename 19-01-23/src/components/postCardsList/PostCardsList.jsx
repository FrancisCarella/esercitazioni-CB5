import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import PostCard from "../postCard";

const PostCardsList = ({ nPost, filterSearch }) => {
  const [PostCardsList, setPostCardsList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      nPost === "full"
        ? setPostCardsList(
            posts.filter(
              (post) =>
                post.title.includes(filterSearch)
            )
          )
        : setPostCardsList(posts.filter((post) => post.id <= nPost))
    );
  }, [filterSearch]);

  return (
    <>
      <div className="PostCardsList">
        {PostCardsList.map((post) => (
          <PostCard
            data={post}
            textContent={nPost === "full" ? "full" : "partial"}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};



export default PostCardsList;
