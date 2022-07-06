import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";

interface IAuthContext {
  user: CognitoUser;
  setUser: Dispatch<SetStateAction<CognitoUser>>;
}
export const AuthContext = createContext<IAuthContext | null>(null);

interface IProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    checkUser();
  }, []);
  useEffect(() => {
    Hub.listen("auth", () => {
      checkUser();
    });
  }, []);

  const checkUser = async () => {
    try {
      const returnedUser = await Auth.currentAuthenticatedUser();
      console.log(returnedUser);
      setUser(returnedUser);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useUser = () => useContext(AuthContext);
