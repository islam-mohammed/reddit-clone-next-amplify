import React from "react";

import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import withCustomAuthenticator from "../components/hoc/withCustomAuthenticator";

type Props = {};

const Profile = (props: Props) => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
};
export default withCustomAuthenticator(Profile);
