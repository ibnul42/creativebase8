import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-secondary">
      <div className="relative h-100 w-full flex items-center justify-center">
        {/* blurred purple background */}
        <div className="absolute inset-0 bg-purple-600/40 blur-3xl rounded-2xl"></div>

        {/* content in front */}
        <div className="relative bg-white p-6 rounded-xl shadow-lg">
          admission
        </div>
      </div>
    </div>
  );
}
