import { Loader } from "@aws-amplify/ui-react";
import React from "react";

type Props = {
  progress: number;
};

export default function Progress({ progress }: Props) {
  const percentage = Math.round(progress * 100);
  return (
    <>
      <Loader percentage={percentage} isDeterminate />
      <Loader variation="linear" percentage={percentage} isDeterminate />
    </>
  );
}
