import client from "@/app/client";
import Footer from "@/component/footer";
import "@/styles/globals.css";
import theme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme({})}>
          <SnackbarProvider>
            <Component {...pageProps} />
            <Footer />
          </SnackbarProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
