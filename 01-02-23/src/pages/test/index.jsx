import styles from "../../styles/Test.module.scss"

//CLIENT SIDE
export default function Test({ users, posts }) {
  return (
    <div className={styles.Test}>
      <div className={styles.Test__users}>
        {users && users.map((user) => <h4 key={user.id}>{user.email}</h4>)}
      </div>
      <br></br>
      <div className={styles.Test__posts}>
        {posts && posts.map((post) => <h4 key={post.id}>{post.title}</h4>)}
      </div>
    </div>
  );   
}

//SERVER SIDE
// This function gets called at build time
// export async function getServerSideProps() {
export async function getStaticProps() {
  // Call an external API endpoint to get data
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();
  const resPosts = await fetch("https://dummyjson.com/posts");
  const dataPosts = await resPosts.json();
  
  // By returning { props: { data } }, the Blog component
  // will receive `data` as a prop at build time
  return {
    props: {
      users: dataUsers.users,
      posts: dataPosts.posts,
    },
  };
}
