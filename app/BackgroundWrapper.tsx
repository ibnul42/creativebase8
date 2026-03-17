"use client";

import { useState } from "react";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bg] = useState(() => {
    const num = Math.floor(Math.random() * 8) + 1;
    return `/assets/background${num}.webp`;
  });

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-dvh grid grid-rows-[auto_1fr_auto]"
    >
      {children}
    </div>
  );
}
