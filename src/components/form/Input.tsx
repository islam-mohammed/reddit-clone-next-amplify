import React from "react";

interface IFormField {
  error?: string;
  label?: string;
  name?: string;
  type: "text" | "tel" | "password" | "email";
  register: any;
}

export default function FormInput({
  error,
  label,
  name,
  register,
  type,
}: IFormField) {
  return (
    <div className="flex flex-col w-full mt-5">
      <div className="form-floating w-full">
        <input
          type={type}
          {...register(name)}
          className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
            focus:border-gray-600 focus:outline-none ${
              error && "border-2 border-red-700 focus:border-red-700"
            }`}
          placeholder={label}
          id={name}
        />
        <label
          htmlFor={name}
          className={`text-gray-700 ${error && "text-red-700"}`}
        >
          {label}
        </label>
      </div>
      {error && <span className="text-red-700">{error}</span>}
    </div>
  );
}
