"use client";
import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";

export default function KnowUs() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="py-10 text-white">
      <p className="uppercase text-center text-3xl xl:text-4xl font-semibold">
        Know Us!
      </p>

      {/* Tabs */}
      <div className="px-3 mx-auto mt-6 max-w-3xl">
        <div className="flex gap-4 backdrop-blur-3xl text-black rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab("mission")}
            className={`
              flex-1 py-3 rounded-xl font-semibold transition-all cursor-pointer duration-300
              backdrop-blur-md border border-white/20 flex items-center justify-center gap-2
              ${
                activeTab === "mission"
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }
            `}
          >
            <FaBullseye />
            <span>Mission</span>
          </button>

          <button
            onClick={() => setActiveTab("vision")}
            className={`
              flex-1 py-3 rounded-xl font-semibold transition-all cursor-pointer duration-300
              backdrop-blur-md border border-white/20 flex items-center justify-center gap-2
              ${
                activeTab === "vision"
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }
            `}
          >
            <IoEyeSharp />
            <span>Vision</span>
          </button>
        </div>

        {/* Content */}
        <div className="mt-6  text-white p-6 rounded-md">
          {activeTab === "mission" && (
            <p>
              আমরা বেকারদের ভেতরে বিশ্বমানের ব্যবসায়িক মানসিকতা তৈরি করা এবং
              তাদের দক্ষতা ও আত্মবিশ্বাস দিয়ে গড়ে তুলে একটি বৈশ্বিক কর্মশক্তি
              বিপ্লবের সূচনা করা। আমরা বেকার মানুষদের এমন উচ্চমানের ব্যবসায়িক
              নেতৃত্বে রূপান্তর করি, যারা মানসিক দৃঢ়তা ও আধুনিক প্রযুক্তিগত
              দক্ষতায় পারদর্শী হয়ে বিশ্ববাজারের ক্লায়েন্টদের জন্য অসাধারণ
              মূল্য সৃষ্টি করতে সক্ষম।
            </p>
          )}

          {activeTab === "vision" && (
            <p>
              আমাদের লক্ষ্য হলো বিশ্বমানের মানদণ্ড স্থাপন করা এবং এমন একটি
              ভবিষ্যৎ গড়ে তোলা, যেখানে কোনো প্রতিভাই নষ্ট হবে না। আমরা
              ফ্রিল্যান্সিং উৎকর্ষতার ক্ষেত্রে বৈশ্বিক চূড়ান্ত মানদণ্ডে পরিণত
              হতে চাই—এই প্রমাণ দিয়ে যে, যারা দ্বিতীয় সুযোগ পেয়েছে তারাই
              সবচেয়ে নিবেদিত, দক্ষ এবং নেতৃত্ব দেওয়ার যোগ্য পেশাজীবী।
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
