import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const PostCard = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  const imageUrl = "https://picsum.photos/1080/1080?"; 

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="PostCard">
      <img className="userImage" src={user.image} alt={user.firstName} />
      <div className="textContent">
        <p>
          <span>{`${user.firstName} ${user.lastName}`}</span> @{user.firstName}{" "}
          · {randomNumber(1, 24)}h
        </p>
        <h4>{data.title}</h4>
        <p>{data.body}</p>
        <img className="postImage" src={imageUrl + user.id} />
        <div className="postBarCounter">
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-c-w.svg" alt="" />
            <p>{randomNumber(1, 300)}</p>
          </div>
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-r-w.svg" alt="" />
            <p>{randomNumber(1, 300)}</p>
          </div>
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-l-w.svg" alt="" />
            <p>{randomNumber(1, 300)}</p>
          </div>
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-s-w.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
