import React from "react";
import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider className="h[100vh] p-2">
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}

export default MyApp;
