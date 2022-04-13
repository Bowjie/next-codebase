import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Customer from "./customer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const userSession = true;

  useEffect(() => {
    if (router.pathname !== "/" && !userSession) {
      /**
       * When Shallow is true page won't get replaced,
       * only the state of the route is changed.
       */
      console.log(Date.now());
      router.push({ pathname: "/" }, undefined, { shallow: true });
    }
  });

  if (userSession) {
    return (
      <div className="row m-0 main-body">
        <div className="col-2 bg-light">sample</div>
        <div className="col">
          <Component {...pageProps} />
        </div>
      </div>
    );
  } else {
    return <Customer></Customer>;
  }
};

export default MyApp;
