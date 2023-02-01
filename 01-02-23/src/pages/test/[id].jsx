import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  return <h1>Pagina dinamica Posts {id}</h1>;
};

export default Test;
