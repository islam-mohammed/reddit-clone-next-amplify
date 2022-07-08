import React from "react";
import Moment from "react-moment";
import Spinner from "../Spinner";

type Props = {
  owner: string;
  createdAt: string;
  showJoinButton?: boolean;
  className?: string;
};

export default function PostHeader({
  owner,
  createdAt,
  showJoinButton = true,
  className,
}: Props) {
  if (!owner) <Spinner />;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-start p-3">
        <div className="flex gap-1 items-start ">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-full w-8 mt-0 mb-0"
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
            alt="Avatar"
          />
          <span className="font-semibold">
            {owner} -{" "}
            <span className="font-normal">
              created{" "}
              <Moment interval={1000} fromNow>
                {createdAt}
              </Moment>
            </span>
          </span>
        </div>
        {showJoinButton && (
          <button
            type="button"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Join
          </button>
        )}
      </div>
    </div>
  );
}
