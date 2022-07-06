import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../form/Input";
import Alert from "../form/Alert";
import { Amplify, Auth } from "aws-amplify";
import awsConfig from "../../aws-exports";

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

Amplify.configure({ ...awsConfig, ssr: true });

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
      <h1>Sigh Up</h1>
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
            className=" mt-8 w-full inline-block px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateAccount;
