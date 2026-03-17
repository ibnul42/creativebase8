"use client";
import React from "react";
import ContactForm from "./ContactForm";

export default function page() {
  return (
    <div className="py-10">
      <div className="container mx-auto max-w-4xl px-3 grid grid-cols-12 gap-5 z-10">
        <section className="px-6 lg:px-10 py-5 border border-white/20 backdrop-blur-xs shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] rounded-lg col-span-12 md:col-span-4 space-y-3 flex flex-col justify-center">
          <p className="capitalize text-3xl xl:text-4xl font-semibold">
            contact us!
          </p>
          <p className="text-white">Anytime is perfect to contact us</p>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}
