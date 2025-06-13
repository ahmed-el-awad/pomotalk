import React from "react";
import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}

export default MyApp;
