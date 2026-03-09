"use client";
import React, { useState } from "react";

export default function KnowUs() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="mx-3">
      <div className="mx-auto max-w-3xl py-3 text-white border border-white/20 backdrop-blur-xs bg-white/5 rounded-2xl shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] px-6 space-y-5">
        <p className="uppercase text-center text-3xl xl:text-4xl font-semibold">
          আমাদেরকে জানুন!
        </p>

        {/* Tabs */}
        <div className="space-y-3">
          <div className="flex overflow-hidden border-t">
            <button
              onClick={() => setActiveTab("mission")}
              className={`
              flex-1 py-3 font-semibold transition-all cursor-pointer duration-300
              flex items-center justify-center gap-2
              ${
                activeTab === "mission"
                  ? "bg-white/20 shadow-lg"
                  : "bg-transparent text-white hover:bg-white/5"
              }
            `}
            >
              <span>Mission</span>
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`
              flex-1 py-3 font-semibold transition-all cursor-pointer duration-300
              flex items-center justify-center gap-2
              ${
                activeTab === "vision"
                  ? "bg-white/20 shadow-lg"
                  : "bg-transparent text-white hover:bg-white/5"
              }
            `}
            >
              <span>Vision</span>
            </button>
          </div>

          {/* Content */}
          <div className="text-white rounded-md text-center text-sm">
            {activeTab === "mission" && (
              <p>
                আমরা বেকারদের ভেতরে বিশ্বমানের ব্যবসায়িক মানসিকতা তৈরি করা এবং
                তাদের দক্ষতা ও আত্মবিশ্বাস দিয়ে গড়ে তুলে একটি বৈশ্বিক
                কর্মশক্তি বিপ্লবের সূচনা করা। আমরা বেকার মানুষদের এমন উচ্চমানের
                ব্যবসায়িক নেতৃত্বে রূপান্তর করি, যারা মানসিক দৃঢ়তা ও আধুনিক
                প্রযুক্তিগত দক্ষতায় পারদর্শী হয়ে বিশ্ববাজারের ক্লায়েন্টদের
                জন্য অসাধারণ মূল্য সৃষ্টি করতে সক্ষম।
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
    </div>
  );
}
