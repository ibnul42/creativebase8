import React from "react";

export default function Course() {
  return (
    <div className="py-10 bg-secondary text-white">
      <p className="uppercase text-center text-3xl xl:text-4xl font-semibold">
        Our courses
      </p>
      <div className="px-3">
        <SingleCourse />
      </div>
    </div>
  );
}

const SingleCourse = () => {
  return (
    <div className="bg-[#b1c2ba] w-full max-w-55 rounded-xl overflow-hidden flex flex-col">
      <p className="text-center py-5 text-secondary text-xl font-bold">
        Graphic Design
      </p>
      <section className="bg-[#b1abba] border border-white/50 flex-1 rounded-xl shadow-2xl shadow-black px-3 py-4 space-y-2">
        <article className="h-20"></article>
        <section className="bg-[#352c4d]/20 rounded-lg w-full text-lg font-bold flex items-center text-center">
          <p className="px-3 flex-1">15000</p>
          <p className="bg-[#b1c2ba]/20 px-3 text-xs w-20 py-1 text-secondary">
            Regular Price
          </p>
        </section>
        <section className="bg-[#352c4d]/20 rounded-lg w-full text-lg font-bold flex items-center text-center h-10">
          <p className="bg-[#b1c2ba]/20 px-3 text-xs w-20 py-1 text-secondary">
            45% Discount
          </p>
          <p className="px-3 flex-1">12500</p>
        </section>
      </section>
    </div>
  );
};
