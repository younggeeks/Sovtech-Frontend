import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppContext from "../components/AppContext";
import { useState } from "react";
import ErrorBoundary from "../components/ErorrBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  const [showModal, toggleModal] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showModal,
        toggleModal,
      }}
    >
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </AppContext.Provider>
  );
}
export default MyApp;
