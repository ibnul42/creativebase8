'use client'
import React from "react";
import Carousel from "./Carousel";

export default function Mentors() {
  return (
    <div className="py-10 text-white">
      <p className="uppercase text-center text-3xl xl:text-4xl font-semibold">
        Our Mentors
      </p>

      <div className="text-white mx-auto mt-6 px-3 w-full max-w-80 sm:max-w-120 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <Carousel />
      </div>
    </div>
  );
}
