import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Amplify, Auth } from "aws-amplify";
import awsConfig from "../../aws-exports";

import { useRouter } from "next/router";
import { useUser } from "../../context/AuthContext";
import Alert from "../form/Alert";
import FormInput from "../form/Input";

const schema = yup
  .object({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

interface IFormInputs {
  userName: string;
  password: string;
}

Amplify.configure({ ...awsConfig, ssr: true });

interface IProps {
  onUserSignIn: (userName: string) => void;
}

function SignInAccount({ onUserSignIn }: IProps) {
  const { user } = useUser();
  const router = useRouter();
  if (user) router.push("/");

  const [signInErrorMessage, setSignInErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      setSignInErrorMessage("");
      await Auth.signIn(data.userName, data.password);
    } catch (error) {
      setSignInErrorMessage(error.message);
      onUserSignIn(data.userName);
    }
  };

  return (
    <>
      <h1>Sigh In</h1>
      {signInErrorMessage && (
        <Alert
          type="error"
          message={signInErrorMessage}
          onDismess={() => setSignInErrorMessage("")}
          className="my-3"
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className=" max-w-lg m-auto"
      >
        <div className="flex flex-col justify-left items-center">
          <FormInput
            type="text"
            name="userName"
            label="Username"
            register={register}
            error={errors.userName && errors.userName.message}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            register={register}
            error={errors.password && errors.password.message}
          />
          <button
            className=" mt-8 w-full inline-block px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}

export default SignInAccount;
