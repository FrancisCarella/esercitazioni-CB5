import styles from "./styles.module.scss";
import Link from "next/link";


const UserCard = ({ data }) => {

  return (
    <div className={styles.Usersitem}>
      <img src={data.image} alt={data.username} />
      <div className={styles.info}>
        <h4>
          {data.firstName} {data.lastName}
        </h4>
        <button>
          <Link href={`/users/${data?.id}`}>INFO</Link>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
