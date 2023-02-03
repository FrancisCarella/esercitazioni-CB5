import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/PagePost.module.scss";

export default function () {
  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    GET(`posts/${id}`).then((data) => setPostData(data));
  }, [{ id }]);

  return (
    <div className={styles.PagePost}>
      <img
        src={`https://picsum.photos/800/600/?${id})}`}
        alt={postData.title}
      />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
  then ();
}
