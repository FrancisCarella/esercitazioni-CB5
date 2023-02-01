import styles from "./post.module.scss";
import { useNavigate } from "react-router-dom";
const PostItem = ({ data }) => {
  const navigate = useNavigate();

  const redirectHandler = (url) => {
    navigate(url);
  };

  return (
    <div className={styles.PostItem}>
      <h2>{data?.id}</h2>
      <div className={styles.info}>
        <p>{data?.title}</p>
      </div>
    </div>
  );
};

export default PostItem;
