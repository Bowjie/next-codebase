import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (true) {
      router.push("customer");
    }
  });

  return <div></div>;
};

export default Home;
