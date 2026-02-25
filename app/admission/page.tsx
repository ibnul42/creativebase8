import React from "react";
import AdmissionForm from "./AdmissionForm";

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-secondary py-10">
      <div className="relative w-full flex items-center justify-center">
        {/* blurred purple background */}
        {/* <div className="absolute inset-0 bg-purple-600/40 blur-3xl rounded-2xl"></div> */}

        {/* content in front */}
        <AdmissionForm />
      </div>
    </div>
  );
}
