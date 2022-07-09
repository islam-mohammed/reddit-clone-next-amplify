import React from "react";

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { SignInHeader } from "../components/auth/SigninHeader";
import { SignInFooter } from "../components/auth/SigninFooter";
import { Header } from "../components/auth/Header";
import { Footer } from "../components/auth/Footer";

type Props = {};

const Profile = (props: Props) => {
  return (
    <Authenticator initialState="signUp" socialProviders={["amazon", "apple"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};
export default withAuthenticator(Profile, {
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
