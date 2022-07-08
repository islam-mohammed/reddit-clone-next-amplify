import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Alert from "../components/form/Alert";
import FormInput from "../components/form/Input";
import Spinner from "../components/Spinner";
import { Auth } from "aws-amplify";
import Link from "next/link";

interface IFormInputs {
  userName: string;
}

export default function ResetPassword() {
  const [resetErrorMessage, setResetErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setLoading(true);
    setResetErrorMessage("");
    try {
      await Auth.forgotPassword(data.userName);
    } catch (error) {
      setResetErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <div className="max-w-md m-auto bg-white p-10">
        <div className="p-2 bg-slate-800">
          <h3
            className=" w-full text-center"
            style={{ color: "#fff", margin: 0 }}
          >
            Reset your password
          </h3>
        </div>
        {resetErrorMessage && (
          <Alert
            type="error"
            message={resetErrorMessage}
            onDismess={() => setResetErrorMessage("")}
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

            <button
              className=" mt-8 w-full inline-block px-7 py-3 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            >
              Send code
            </button>
            <div className="mt-2">
              Forget your password?{" "}
              <Link href="/login">
                <a
                  style={{
                    textDecoration: "none",
                    color: "darkBlue",
                  }}
                >
                  Back to sign in
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
