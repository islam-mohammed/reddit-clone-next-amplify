import React from "react";

interface IFormField {
  error: string;
  label: string;
  name: string;
  rows?: number;
  register: any;
}

export default function FormText({
  error,
  label,
  name,
  register,
  rows = 3,
}: IFormField) {
  return (
    <>
      <div className="flex flex-col w-full mt-5">
        <div className="mb-3">
          <textarea
            className={`form-control block w-full px-3 py-1.5  text-base font-normal text-gray-700
                      bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                          error &&
                          "text-red-700 border-2 border-red-700 focus:border-red-700"
                        }`}
            id={name}
            rows={rows}
            {...register(name)}
            placeholder={label}
          ></textarea>
        </div>
        {error && <span className="text-red-700">{error}</span>}
      </div>
    </>
  );
}
