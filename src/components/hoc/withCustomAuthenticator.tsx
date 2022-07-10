import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { FC } from "react";
import { SignInHeader } from "../../components/auth/SigninHeader";
import { SignInFooter } from "../../components/auth/SigninFooter";
import { Header } from "../../components/auth/Header";
import { Footer } from "../../components/auth/Footer";

export default function withCustomAuthenticator(WrappedComponent: CC) {
  const HOC = () => {
    return <WrappedComponent />;
  };
  return withAuthenticator(HOC, {
    socialProviders: ["facebook", "google"],
    components: {
      Header,
      SignIn: {
        Header: SignInHeader,
        Footer: SignInFooter,
      },
      Footer,
    },
  });
}
