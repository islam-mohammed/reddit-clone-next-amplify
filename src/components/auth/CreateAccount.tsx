import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../form/Input";
import Alert from "../form/Alert";
import { Auth } from "aws-amplify";
import Link from "next/link";

const schema = yup
  .object({
    userName: yup.string().required("Username is required"),
    emailAddress: yup
      .string()
      .required("Email address is required")
      .email("Provide a valid email address"),
    name: yup.string().required("Your name is required"),
    password: yup
      .string()
      .matches(
        /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "The password length must be greater than or equal to 8, must contain one or more uppercase characters, one or more lowercase characters, one or more numeric values, and one or more special chacters",
      ),
  })
  .required();

interface IFormInputs {
  userName: string;
  name: string;
  emailAddress: string;
  password: string;
}

interface IProps {
  onUserCreated: (userName: string) => void;
}

function CreateAccount({ onUserCreated }: IProps) {
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      setSignUpErrorMessage("");
      const { user } = await Auth.signUp({
        username: data.userName,
        password: data.password,
        attributes: {
          email: data.emailAddress,
          name: data.name,
        },
      });
      console.log(user);
      onUserCreated(data.userName);
    } catch (error) {
      setSignUpErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="p-2 bg-slate-800">
        <h3
          className=" w-full text-center"
          style={{ color: "#fff", margin: 0 }}
        >
          Create a new account
        </h3>
      </div>
      {signUpErrorMessage && (
        <Alert
          type="error"
          message={signUpErrorMessage}
          onDismess={() => setSignUpErrorMessage("")}
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
            type="email"
            name="emailAddress"
            label="Email"
            register={register}
            error={errors.emailAddress && errors.emailAddress.message}
          />
          <FormInput
            type="text"
            name="name"
            label="Name"
            register={register}
            error={errors.name && errors.name.message}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            register={register}
            error={errors.password && errors.password.message}
          />

          <button
            className=" mt-8 w-full inline-block px-7 py-3 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Sign up
          </button>
          <div className="mt-2">
            Have an account?{" "}
            <Link href="/signin">
              <a
                style={{
                  textDecoration: "none",
                  color: "darkBlue",
                }}
              >
                Sign in
              </a>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateAccount;
