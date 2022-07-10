import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import * as React from "react";
import Layout from "../components/layout/Layout";
import awsConfig from "../aws-exports";
import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import theme from "../helpers/Theme";

Amplify.configure({ ...awsConfig, ssr: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Authenticator.Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Authenticator.Provider>
      </ThemeProvider>
    </>
  );
}
