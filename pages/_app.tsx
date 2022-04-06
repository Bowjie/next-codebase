import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const userSession = false;
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
    return <Component {...pageProps} />;
  }
};

export default MyApp;
