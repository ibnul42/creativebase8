import Countdown from "@/components/Countdown";
import GlassEffect from "@/components/GlassEffect";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="container mx-auto px-3 py-10 text-white">
      <section className="space-y-4 text-center">
        <section className="space-y-1">
          <p className="text-xl">Expanding Horizons</p>
          <p className="uppercase text-2xl xl:text-3xl font-bold flex flex-col gap-1">
            <span>আমরা</span>
            <span className="font-extrabold text-4xl xl:text-5xl text-primary">
              Creative Base8
            </span>
          </p>
          <p className="text-sm max-w-xl mx-auto">
            আমরা আপনার ভেতরে লুকিয়ে থাকা সম্ভাবনাগুলো খুঁজে বের করি। এরপর
            আধুনিক ও বিশ্বমানের চিন্তাধারার মাধ্যমে সেই সম্ভাবনাকে গড়ে তুলি এবং
            আপনাকে এমনভাবে প্রস্তুত করি যেন আপনি আন্তর্জাতিক মার্কেটপ্লেসে
            আত্মবিশ্বাসের সাথে কাজ করতে পারেন।
          </p>
        </section>
        <section className="bg-white/5 backdrop-blur-xs mx-auto w-full max-w-md py-4 rounded-xl overflow-hidden shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] relative">
          <GlassEffect />
          <p className="uppercase text-3xl xl:text-4xl font-bold">
            সময় খুবই সীমিত
          </p>
          <p className="text-3xl xl:text-4xl font-bold text-yellow-200">
            Secure your Spot
          </p>
          <div className="w-full py-2">
            <Countdown targetDate="2026-04-01T00:00:00" />
          </div>
          <Link
            href="/"
            className="px-6 py-2 w-fit mx-auto font-semibold transition-all cursor-pointer duration-300 rounded-full bg-white/10 flex items-center justify-center group overflow-hidden relative"
          >
            <GlassEffect topGlow={false} bottomGlow={false} left={false} right={false} bottomClass="right-10" />
            <span className="group-hover:-translate-x-2 transition-all">
              এখনই ভর্তি হন!
            </span>
            <FaRegArrowAltCircleRight className="absolute top-3 -right-5 group-hover:right-1.5 transition-all" />
          </Link>
        </section>
      </section>
    </div>
  );
}
