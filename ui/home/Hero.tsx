import Countdown from "@/components/Countdown";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="container mx-auto px-3 py-10 text-white">
      <section className="space-y-4 text-center">
        <p className="text-xl">Expanding Horizons</p>
        <p className="uppercase text-3xl xl:text-4xl font-bold flex flex-col gap-3">
          <span>আমরা</span>
          <span className="font-extrabold text-4xl xl:text-5xl text-primary">
            Creative Base8
          </span>
        </p>
        <p className="text-sm">
          আমরা আপনার ভেতরে লুকিয়ে থাকা সম্ভাবনাগুলো খুঁজে বের করি। এরপর আধুনিক
          ও বিশ্বমানের চিন্তাধারার মাধ্যমে সেই সম্ভাবনাকে গড়ে তুলি এবং আপনাকে
          এমনভাবে প্রস্তুত করি যেন আপনি আন্তর্জাতিক মার্কেটপ্লেসে আত্মবিশ্বাসের
          সাথে কাজ করতে পারেন।
        </p>
        <section className="bg-white/5 bg-clip-padding backdrop-filter backdrop-blur-[3px] bg-opacity-70 border border-gray-100/20 mx-auto w-full max-w-sm py-4 rounded-xl shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)]">
          <p className="uppercase text-3xl xl:text-4xl font-bold">
            সময় খুবই সীমিত
          </p>
          <p className="text-3xl xl:text-4xl font-bold text-yellow-900">
            Secure your Spot
          </p>
          <div className="w-full py-2">
            <Countdown targetDate="2026-04-01T00:00:00" />
          </div>
          <Link
            href="/"
            className="px-4 py-1.5 w-fit mx-auto font-semibold transition-all cursor-pointer duration-300 rounded-full border border-white/40 flex items-center justify-center group overflow-hidden relative"
          >
            <span className="group-hover:-translate-x-2 transition-all">
              এখনই ভর্তি হন!
            </span>
            <FaRegArrowAltCircleRight className="absolute top-2.5 -right-5 group-hover:right-1.5 transition-all" />
            {/* <FaRegArrowAltCircleRight className="translate-x-10 group-hover:translate-x-0 transition-all" /> */}
          </Link>
        </section>
        {/* 
        <p className="uppercase text-3xl xl:text-4xl font-extrabold flex flex-col">
          <span>সময় খুবই সীমিত</span>
        </p> */}
      </section>
    </div>
  );
}
