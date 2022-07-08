import React from "react";
import DownArrowIcon from "../icons/DownArrowIcon";
import UpArrowIcon from "../icons/UpArrowIcon";

type Props = {
  voteUp: number;
  voteDown: number;
};

export default function Vote({ voteUp, voteDown }: Props) {
  return (
    <div className="flex py-3 lg:flex-col justify-center items-center mt-2">
      <UpArrowIcon width="13px" className="cursor-pointer" />
      <input
        readOnly
        type="text"
        value={
          new Intl.NumberFormat("en", { notation: "compact" }).format(
            voteUp - voteDown,
          ) || 0
        }
        className="text-center bg-transparent text-xs w-14"
      />
      <DownArrowIcon width="12px" className="cursor-pointer" />
    </div>
  );
}
