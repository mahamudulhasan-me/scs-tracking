import "@/styles/globals.css";
// import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
