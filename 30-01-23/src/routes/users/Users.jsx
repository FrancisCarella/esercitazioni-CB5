import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/https";
import UserCard from "../userCard/UserCard";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setUsersList(data.users));
  }, []);

  return (
    <div className={styles.Users}>
      <div className={styles.wrapper}>
        <h2>USERS PAGE</h2>
        <div className={styles.container}>
          {usersList.map((item, index) => (
            <UserCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
