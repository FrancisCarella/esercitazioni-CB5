
import styles from "../../styles/Users.module.scss";
import UserCard from "../../components/userCard/UserCard";

//SERVER SIDE
export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();
  
  return {
    props: {
      users: dataUsers.users,
    },
  };
}

//CLIENT SIDE
export default function Test({ users }) {
  return (
    <div className={styles.Main}>
      <div className={styles.users}>
        {users && users.map((user) => <UserCard data={user} key={user?.id} />)}
      </div>
    </div>
  );   
}


