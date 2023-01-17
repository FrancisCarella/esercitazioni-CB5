import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import SuggestedUser from "../suggestedUser";

const SuggestedUsersList = () => {
  const [suggestedUsersList, setSuggestedUsersList] = useState([]);

  useEffect(() => {
    GET("users").then(({ users }) => setSuggestedUsersList(users));
  }, []);

  return (
    <div className="SuggestedUserListContainer">
      <p className="TitleContainer">Chi seguire</p>
      <div className="SuggestedUserList">
        {suggestedUsersList.map((suggestedUser) => (
          <SuggestedUser data={suggestedUser} key={suggestedUser.id} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsersList;
