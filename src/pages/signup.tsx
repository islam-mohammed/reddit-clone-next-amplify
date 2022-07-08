import { useRouter } from "next/router";
import React, { useState } from "react";
import ConfirmAccount from "../components/auth/ConfirmAccount";
import CreateAccount from "../components/auth/CreateAccount";

function Signup() {
  const [currentStep, setCurrentStep] = useState("create");
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const onConfirmHandler = () => router.push("/");
  return (
    <div className="max-w-md m-auto bg-white p-10">
      {currentStep === "create" && (
        <CreateAccount
          onUserCreated={(e) => {
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

export default Signup;
