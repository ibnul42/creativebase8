import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course() {
  return (
    <div className="py-10 space-y-5 bg-secondary text-white">
      <p className="uppercase text-center text-3xl xl:text-4xl font-semibold">
        Our courses
      </p>
      <div className="px-3 flex flex-wrap gap-4">
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
    <div className="bg-[#b1c2ba] w-full max-w-55 rounded-xl overflow-hidden flex flex-col">
      <p className="text-center py-5 text-secondary text-xl font-bold h-20">
        {title}
      </p>
      <section className="bg-[#b1abba] border border-white/50 flex-1 rounded-xl shadow-2xl shadow-black px-3 py-4 space-y-2">
        <article className="px-3 py-1 h-24 relative">
          <Image src={source} alt={title} fill className="object-contain" />
        </article>
        <section className="bg-[#352c4d]/20 rounded-lg overflow-hidden w-full text-lg font-bold flex items-center text-center">
          <p className="px-3 flex-1">{regularPrice}</p>
          <p className="bg-[#b1c2ba]/50 px-3 text-xs w-20 py-1 text-secondary">
            Regular Price
          </p>
        </section>
        <section className="bg-[#352c4d]/20 rounded-lg overflow-hidden w-full text-lg font-bold flex items-center text-center h-10">
          <p className="bg-[#b1c2ba]/50 px-3 text-xs w-20 py-1 text-secondary">
            45% Discount
          </p>
          <p className="px-3 flex-1">{discountedPrice}</p>
        </section>
        <div className="mt-5 flex items-center justify-center">
          <Link
            href="/"
            className="block text-center w-fit bg-[#b1c2ba]/80 hover:bg-[#b1c2ba] transition-all text-white py-2 px-4 rounded-lg border border-white/40 shadow-2xl font-bold"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};
