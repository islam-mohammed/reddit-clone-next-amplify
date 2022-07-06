import React from "react";

export type AlertType = "info" | "error" | "success" | "warning";
type Props = {
  type: AlertType;
  message: string;
  className?: string;
  onDismess?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Alert({ type, message, className, onDismess }: Props) {
  let colors = "bg-blue-100 text-blue-700";
  if (type === "error") colors = "bg-red-100 text-red-700";
  if (type === "success") colors = "bg-green-100 text-green-700";
  if (type === "warning") colors = "bg-yellow-100 text-yellow-700";
  return (
    <div
      className={`rounded-sm py-5 px-6 mb-4 text-base my-4 ${colors} ${className}`}
      role={type}
      dangerouslySetInnerHTML={{ __html: message }}
    >
      {onclose && (
        <button
          type="button"
          className="btn-close box-content w-4 h-4 p-1 ml-auto text-gray-700 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onDismess}
        ></button>
      )}
    </div>
  );
}
