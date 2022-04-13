import { NextRouter, useRouter } from "next/router";

export const Doc = () => {
  const router = useRouter();

  const { params = [] } = router.query;

  console.log(params);

  return <p>This is main page of Doc</p>;
};

export default Doc;
