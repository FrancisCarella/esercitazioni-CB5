import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const UserCard = ({ data }) => {
  const navigate = useNavigate();

  const redirectHandler = (url) => {
    navigate(url);
  };

  return (
    <div className={styles.Usersitem}>
      <img src={data.image} alt={data.username} />
      <div className={styles.info}>
        <h4>
          {data.firstName} {data.lastName}
        </h4>
        <button onClick={() => redirectHandler(`${data.id}`)}>INFO</button>
      </div>
    </div>
  );
};

export default UserCard;
