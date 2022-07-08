import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../form/Input";
import Alert from "../form/Alert";
import { Auth } from "aws-amplify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  verificationCode: yup.string().required("Confirmation code is required"),
});

interface IFormInputs {
  verificationCode: string;
}

function ConfirmAccount({
  userName,
  onConfirm,
}: {
  userName: string;
  onConfirm: () => void;
}) {
  const [confirmErrorMessage, setConfirmErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      setConfirmErrorMessage("");
      const confirm = await Auth.confirmSignUp(userName, data.verificationCode);
      console.log(confirm);
      onConfirm();
    } catch (error) {
      setConfirmErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="p-2 bg-slate-800">
        <h3
          className=" w-full text-center"
          style={{ color: "#fff", margin: 0 }}
        >
          Confirm your account
        </h3>
      </div>
      {confirmErrorMessage && (
        <Alert
          type="error"
          message={confirmErrorMessage}
          onDismess={() => setConfirmErrorMessage("")}
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
            name="verificationCode"
            label="Verification code"
            register={register}
            error={errors.verificationCode && errors.verificationCode.message}
          />

          <button
            className=" mt-8 w-full inline-block px-7 py-3 bg-gray-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}

export default ConfirmAccount;
