import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const PostCard = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  const imageUrl = "https://picsum.photos/1920/1080?"; 

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="PostCard">
      <img className="userImage" src={user.image} alt={user.firstName} />
      <div className="postContent">
        <div className="textContent">
          <p>
            <span>{`${user.firstName} ${user.lastName}`} </span>
            <span>
              @{user.firstName} · {randomNumber(1, 24)}h
            </span>
          </p>
          <p>{data.body}</p>
        </div>
        <div className="LinkPreview">
          <img className="linkImage" src={imageUrl + user.id} />
          <div className="linkContent">
            <p className="WebLink">{`${user.firstName}${user.lastName}.it`}</p>
            <p className="Title">{data.title}.</p>
          </div>
        </div>
        <div className="postBarCounter">
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-c-w.svg" alt="" />
            <span>{randomNumber(1, 300)}</span>
          </div>
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-r-w.svg" alt="" />
            <span>{randomNumber(1, 300)}</span>
          </div>
          <div className="iconNumb">
            <img className="icon" src="img/tw-post-l-w.svg" alt="" />
            <span>{randomNumber(1, 300)}</span>
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
