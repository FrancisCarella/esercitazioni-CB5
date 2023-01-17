import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Message">
      <img className="userImg" src={user.image} alt={user.firstName} />
      <div className="Message__textContent">
        <p>@{user.firstName}</p>
        <h4>{data.title}</h4>
        {/* <img src="https://picsum.photos/300?${data.userId}" alt="" /> */}
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Message;
