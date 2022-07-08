import { useRouter } from "next/router";
import React, { useState } from "react";
import ConfirmAccount from "../components/auth/ConfirmAccount";
import SignInAccount from "../components/auth/SinginAccount";

export default function SignIn() {
  const [currentStep, setCurrentStep] = useState("create");
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const onConfirmHandler = () => router.push("/");
  return (
    <div className="max-w-md m-auto bg-white p-10">
      {currentStep === "create" && (
        <SignInAccount
          onUserSignIn={(e) => {
            setCurrentStep("confirm");
            setUserName(e);
          }}
        />
      )}
      {currentStep === "confirm" && (
        <ConfirmAccount onConfirm={onConfirmHandler} userName={userName} />
      )}
    </div>
  );
}
