"use client";

import Dropdown, { DropdownOption } from "@/components/Dropdown";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { submitAdmissionForm, type FormState } from "@/actions";
import GlassEffect from "@/components/GlassEffect";

const courses: DropdownOption[] = [
  { value: "Graphic design", label: "Graphic Design" },
  { value: "Web Design", label: "Web Design" },
  { value: "WordPress Web Development", label: "WordPress Web Development" },
  { value: "digital marketing", label: "Digital Marketing" },
];

const classTimes: DropdownOption[] = [
  { value: "8:00 AM - 10:00 AM", label: "8:00 AM - 10:00 AM" },
  { value: "3:00 PM - 5:00 PM", label: "3:00 PM - 5:00 PM" },
  { value: "5:00 PM - 7:00 PM", label: "5:00 PM - 7:00 PM" },
  { value: "9:00 PM - 11:00 PM", label: "9:00 PM - 11:00 PM" },
];

export default function AdmissionForm() {
  const [course, setCourse] = useState("");
  const [classTime, setClassTime] = useState("");

  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitAdmissionForm, {});

  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Reset after success
  useEffect(() => {
    if (currentState.success) {
      formRef.current?.reset();
      setCourse("");
      setClassTime("");
    }
  }, [currentState.success]);

  return (
    <div className="container mx-auto max-w-4xl px-3 grid grid-cols-12 gap-5 z-10">
      <section className="px-6 lg:px-10 py-5 backdrop-blur-xs shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] rounded-lg col-span-12 space-y-3 flex flex-col justify-center overflow-hidden relative">
        <GlassEffect bottomClass="bottom-[-12px]" />
        <p className="uppercase text-center text-3xl xl:text-4xl font-semibold">
          Admission Form
        </p>
      </section>

      <form
        ref={formRef}
        action={formAction}
        className="px-6 md:px-10 py-5 col-span-12 backdrop-blur-xs shadow-[5px_5px_14px_1px_rgba(0,0,0,0.5)] rounded-lg grid grid-cols-2 gap-3 text-sm overflow-hidden relative"
      >
        <GlassEffect />
        <div className="flex flex-col gap-1">
          <label>Full name</label>
          <input
            name="fullName"
            placeholder="Enter your full name"
            className="px-3 py-1.5 rounded-md bg-white focus:outline-0 text-gray-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Phone number</label>
          <input
            name="phone"
            placeholder="Phone number"
            className="px-3 py-1.5 rounded-md bg-white focus:outline-0 text-gray-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>WhatsApp</label>
          <input
            name="whatsapp"
            placeholder="+8801XXXXXXXXX"
            className="px-3 py-1.5 rounded-md bg-white focus:outline-0 text-gray-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            name="email"
            placeholder="email address"
            className="px-3 py-1.5 rounded-md bg-white focus:outline-0 text-gray-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Address</label>
          <input
            name="address"
            placeholder="Your address"
            className="px-3 py-1.5 rounded-md bg-white focus:outline-0 text-gray-800"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Academic qualification</label>
          <input
            name="qualification"
            placeholder="SSC, HSC, Diploma"
            className="px-3 py-1.5 rounded-md bg-white focus:outline-0 text-gray-800"
          />
        </div>

        {/* Course */}
        <div className="flex flex-col gap-1">
          <label>Course</label>
          <Dropdown
            options={courses}
            value={course}
            onChange={setCourse}
            placeholder="Please select an option"
            className={`w-full ${course ? "text-black" : "text-black/50"}`}
          />
          <input type="hidden" name="course" value={course} />
        </div>

        {/* Class Time */}
        <div className="flex flex-col gap-1">
          <label>Preferred Class Time</label>
          <Dropdown
            options={classTimes}
            value={classTime}
            onChange={setClassTime}
            placeholder="Select One"
            className={`w-full ${classTime ? "text-black" : "text-black/50"}`}
          />
          <input type="hidden" name="classTime" value={classTime} />
        </div>

        {/* Submit */}
        <div className="col-span-2 flex justify-end">
          <button
            disabled={isPending}
            className="py-2 px-6 rounded-full border border-white/40 bg-white/10 hover:bg-white/15 shadow-[-1px_6px_4px_2px_rgba(0,0,0,0.3)] transition-all cursor-pointer"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Success */}
        {currentState.success && (
          <p className="text-green-600 text-center col-span-2">
            ✓ {currentState.message}
          </p>
        )}

        {/* Error */}
        {currentState.error && (
          <p className="text-red-600 text-center col-span-2">
            {currentState.error}
          </p>
        )}
      </form>
    </div>
  );
}
