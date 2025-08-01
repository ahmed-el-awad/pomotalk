import React from "react";
import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider className="m-2 h-[97vh] rounded-xl bg-slate-400 p-4">
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}

export default MyApp;
