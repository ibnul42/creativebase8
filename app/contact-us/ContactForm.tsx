"use client";

import { type FormState, submitContactForm } from "@/actions";
import GlassEffect from "@/components/GlassEffect";
import React, { useActionState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitContactForm, {});

  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Reset form only after success
  useEffect(() => {
    if (currentState.success) {
      formRef.current?.reset();
    }
  }, [currentState.success]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="px-6 md:px-10 py-5 col-span-12 md:col-span-8 backdrop-blur-xs shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] rounded-lg grid grid-cols-2 gap-3 text-sm overflow-hidden relative"
    >
      <GlassEffect />
      <div className="flex flex-col gap-1">
        <label>First name</label>
        <input name="firstName" placeholder="Hasan" className="px-3 py-1.5 rounded-md bg-white focus-within:outline-0 placeholder:text-gray-500 text-gray-800" />
      </div>

      <div className="flex flex-col gap-1">
        <label>Last name</label>
        <input name="lastName" placeholder="Jamil" className="px-3 py-1.5 rounded-md bg-white focus-within:outline-0 placeholder:text-gray-500 text-gray-800" />
      </div>

      <div className="col-span-2 flex flex-col gap-1">
        <label>Email</label>
        <input name="email" placeholder="jamil@gmail.com" className="px-3 py-1.5 rounded-md bg-white focus-within:outline-0 placeholder:text-gray-500 text-gray-800" />
      </div>

      <div className="col-span-2 flex flex-col gap-1">
        <label>Subject</label>
        <input name="subject" placeholder="Subject..." className="px-3 py-1.5 rounded-md bg-white focus-within:outline-0 placeholder:text-gray-500 text-gray-800" />
      </div>

      <div className="col-span-2 flex flex-col gap-1">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          className="px-3 py-1.5 rounded-md bg-white focus-within:outline-0 placeholder:text-gray-500 text-gray-800"
        />
      </div>

      <div className="col-span-2 flex justify-end">
        <button disabled={isPending} className="py-2 px-6 rounded-full border border-white/40 bg-white/10 hover:bg-white/15 shadow-[-1px_6px_4px_2px_rgba(0,0,0,0.3)] cursor-pointer transition-all">
          {isPending ? "Sending..." : "Submit"}
        </button>
      </div>

      {currentState.success && (
        <p className="text-green-600 text-center">
          ✓ {currentState.message}
        </p>
      )}

      {currentState.error && (
        <p className="text-red-600 text-center">
          {currentState.error}
        </p>
      )}
    </form>
  );
}