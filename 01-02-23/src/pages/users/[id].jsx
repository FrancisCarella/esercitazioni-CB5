import styles from "../../styles/Users.module.scss";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  const id = router.query.id;

  const [User, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className={styles.Main}>
      <h1>{`${User.firstName} ${User.lastName}`}</h1>
    </div>
  );
};

export default User;
