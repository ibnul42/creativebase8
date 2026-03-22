import clsx from "clsx";
import React from "react";

type GlassEffectProps = {
  topGlow?: true | false;
  bottomGlow?: true | false;
  top?: true | false;
  bottom?: true | false;
  left?: true | false;
  right?: true | false;
  bottomClass?: string;
};

export default function GlassEffect({
  topGlow = true,
  bottomGlow = true,
  top = true,
  bottom = true,
  left = true,
  right = true,
  bottomClass = "",
}: GlassEffectProps) {
  return (
    <>
      {topGlow && (
        <div className="absolute -top-30 -left-40 w-40 h-40 rounded-full -z-10 backdrop-blur-3xl shadow-[20px_20px_50px_30px_rgba(255,255,255,0.5)] opacity-40"></div>
      )}
      {bottomGlow && (
        <div className="absolute -bottom-30 -right-40 w-40 h-40 rounded-full -z-10 backdrop-blur-3xl shadow-[-10px_-10px_50px_30px_rgba(255,255,255,0.5)] opacity-40"></div>
      )}
      {top && (
        <div className="absolute top-0 left-0 bg-linear-to-r from-transparent from-5% via-white via-20% to-trafrom-transparent to-100% w-full h-px rounded-full animate-pulse"></div>
      )}
      {bottom && (
        <div className={clsx("absolute bottom-0 left-0 bg-linear-to-l from-transparent from-5% via-white via-20% to-trafrom-transparent to-100% w-full h-px rounded-full animate-pulse", bottomClass)}></div>
      )}
      {right && (
        <div className="absolute top-0 right-0 bg-linear-to-b from-transparent from-5% via-white via-20% to-trafrom-transparent to-100% w-px h-full rounded-full animate-pulse"></div>
      )}
      {left && (
        <div className="absolute top-0 left-0 bg-linear-to-t from-transparent from-5% via-white via-20% to-trafrom-transparent to-100% w-px h-full rounded-full animate-pulse"></div>
      )}
    </>
  );
}
