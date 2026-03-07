import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course() {
  return (
    <div className="container mx-auto py-10 space-y-5 text-white">
      <p className="backdrop-blur-xs w-fit mx-auto px-4 py-2 rounded-full border border-white/10 shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] uppercase text-center text-3xl xl:text-4xl font-semibold">
        আমাদের কোর্স সমূহ
      </p>
      <div className="px-3 flex flex-wrap justify-center mt-6 gap-4">
        <SingleCourse
          title="Graphic Design"
          source="/assets/course/graphic.png"
          regularPrice={15000}
          discountedPrice={12500}
        />
        <SingleCourse
          title="Web Design"
          source="/assets/course/design.png"
          regularPrice={15000}
          discountedPrice={12500}
        />
        <SingleCourse
          title="Digital Marketing"
          source="/assets/course/marketing.png"
          regularPrice={15000}
          discountedPrice={12500}
        />
        <SingleCourse
          title="Wordpress Development"
          source="/assets/course/development.png"
          regularPrice={15000}
          discountedPrice={12500}
        />
      </div>
    </div>
  );
}

type CourseProps = {
  title: string;
  source: string;
  regularPrice: number;
  discountedPrice: number;
};

const SingleCourse = ({
  title,
  source,
  regularPrice,
  discountedPrice,
}: CourseProps) => {
  return (
    <div className="backdrop-blur-xs bg-white/5 w-full max-w-55 rounded-2xl border shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] border-white/20 overflow-hidden flex flex-col">
      <p className="text-center py-5 text-xl font-bold h-20">
        {title}
      </p>
      <section className="backdrop-blur-sm flex-1 rounded-xl shadow-2xl shadow-black px-3 py-4 space-y-2">
        <article className="px-3 py-1 h-24 relative">
          <Image src={source} alt={title} fill className="object-contain" />
        </article>
        <section className="rounded-lg border border-white/50 overflow-hidden w-full text-lg font-bold flex items-center text-center">
          <p className="px-3 flex-1">{regularPrice}</p>
          <p className="bg-white/50 px-3 text-xs w-20 py-1 text-secondary">
            Regular Price
          </p>
        </section>
        <section className="rounded-lg border border-white/50 overflow-hidden w-full text-lg font-bold flex items-center text-center h-10">
          <p className="bg-white/50 px-3 text-xs w-20 py-1 text-secondary">
            45% Discount
          </p>
          <p className="px-3 flex-1">{discountedPrice}</p>
        </section>
        <div className="mt-5 flex items-center justify-center">
          <Link
            href="/"
            className="block text-center w-fit transition-all py-2 px-4 rounded-lg border border-white/40 hover:bg-white/20 transition-all shadow-[-1px_6px_4px_2px_rgba(0,0,0,0.3)] font-bold"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};
