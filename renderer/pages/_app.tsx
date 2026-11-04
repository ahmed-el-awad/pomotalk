import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h[100vh] p-2">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
