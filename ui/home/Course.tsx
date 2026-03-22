import GlassEffect from "@/components/GlassEffect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course() {
  return (
    <div className="container mx-auto py-10 space-y-5 text-white">
      <p className="backdrop-blur-xs w-fit mx-auto px-6 py-3 rounded-full shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] uppercase text-center text-3xl xl:text-4xl font-semibold overflow-hidden relative">
        <GlassEffect left={false} right={false} />
        আমাদের কোর্স সমূহ
      </p>
      <div className="px-3 flex flex-wrap justify-center mt-6 gap-4">
        <SingleCourse
          title="গ্রাফিক্স ডিজাইন"
          source="/assets/course/graphic.png"
          regularPrice="১৫,০০০"
          discountedPrice="৮,২৫০"
        />
        <SingleCourse
          title="ওয়েব ডিজাইন"
          source="/assets/course/design.png"
          regularPrice="১৬,০০০"
          discountedPrice="৮,৮০০"
        />
        <SingleCourse
          title="ডিজিটাল মার্কেটিং"
          source="/assets/course/marketing.png"
          regularPrice="১৬,০০০"
          discountedPrice="৮,৮০০"
        />
        <SingleCourse
          title="ওয়ার্ড প্রেস ডেভেলপমেন্ট"
          source="/assets/course/development.png"
          regularPrice="১৭,০০০"
          discountedPrice="৯,৩৫০"
        />
      </div>
    </div>
  );
}

type CourseProps = {
  title: string;
  source: string;
  regularPrice: string;
  discountedPrice: string;
};

const SingleCourse = ({
  title,
  source,
  regularPrice,
  discountedPrice,
}: CourseProps) => {
  return (
    <div className="backdrop-blur-xs bg-white/5 w-full max-w-72 rounded-2xl shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative">
      <GlassEffect />
      <p className="text-center py-5 text-xl font-bold h-20">{title}</p>
      <section className="backdrop-blur-sm flex-1 rounded-xl shadow-2xl shadow-black bg-white/5 border-t border-white/20 px-3 py-4 space-y-5">
        <article className="px-3 py-1 h-24 relative">
          <Image src={source} alt={title} fill className="object-contain" />
        </article>
        <section className="rounded-lg border border-white/50 overflow-hidden w-full text-lg font-bold flex items-center text-center">
          <p className="px-3 flex-1">{regularPrice}</p>
          <p className="bg-white/50 px-3 text-xs w-24 py-1 text-secondary">
            রেগুলার প্রাইস
          </p>
        </section>
        <section className="rounded-lg border border-white/50 overflow-hidden w-full text-lg font-bold flex items-center text-center h-10">
          <p className="bg-white/50 px-3 text-xs w-24 h-full flex items-center justify-center py-1 text-secondary">
            ৪৫% ছাড়
          </p>
          <p className="px-3 flex-1">{discountedPrice}</p>
        </section>
        <div className="mt-5 py-3 flex items-center justify-center">
          <Link
            href="/"
            className="block text-center w-fit transition-all py-2 px-6 rounded-full border border-white/40 bg-white/10 hover:bg-white/15 shadow-[-1px_6px_4px_2px_rgba(0,0,0,0.3)] font-bold"
          >
            এখনই ভর্তি হন!
          </Link>
        </div>
      </section>
    </div>
  );
};
