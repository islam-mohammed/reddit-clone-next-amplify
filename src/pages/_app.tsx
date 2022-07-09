import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import * as React from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/Layout";
import AuthProvider from "../context/AuthContext";
import awsConfig from "../aws-exports";
import { Amplify } from "aws-amplify";
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

      <ThemeProvider attribute="class">
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
