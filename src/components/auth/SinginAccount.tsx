import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Auth } from "aws-amplify";

import { useRouter } from "next/router";
import { useUser } from "../../context/AuthContext";
import Alert from "../form/Alert";
import FormInput from "../form/Input";
import Link from "next/link";

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

interface IProps {
  onUserSignIn: (userName: string) => void;
}

function SignInAccount({ onUserSignIn }: IProps) {
  const { user } = useUser();
  const router = useRouter();
  if (user) router.push("/");

  const [signInErrorMessage, setSignInErrorMessage] = useState("");
  const linkStyle = {
    textDecoration: "none",
    color: "darkBlue",
  };
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
      if (error.code === "UserNotConfirmedException")
        onUserSignIn(data.userName);
      setSignInErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="p-2 bg-slate-800">
        <h3
          className=" w-full text-center"
          style={{ color: "#fff", margin: 0 }}
        >
          Sign In your account
        </h3>
      </div>
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
            label="Username *"
            register={register}
            error={errors.userName && errors.userName.message}
          />
          <FormInput
            type="password"
            name="password"
            label="Password *"
            register={register}
            error={errors.password && errors.password.message}
          />
          <div className="mt-2">
            Forget your password?{" "}
            <Link href="/reset-password">
              <a style={linkStyle}>Reset your passwork</a>
            </Link>
          </div>

          <button
            className=" mt-8 w-full inline-block px-7 py-3 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Sign In
          </button>
          <div className="mt-2">
            Forget your password?{" "}
            <Link href="/signup">
              <a style={linkStyle}>Create new account</a>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignInAccount;
