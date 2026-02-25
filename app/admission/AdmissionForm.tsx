"use client";
import Dropdown, { DropdownOption } from "@/components/Dropdown";
import React, { useState } from "react";

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
  const [course, setCourse] = useState<string>("");
  const [classTime, setClassTime] = useState<string>("");

  return (
    <div className="container mx-auto max-w-4xl px-4 grid grid-cols-12 gap-5 z-10">
      <section className="px-6 lg:px-10 py-5 bg-[#FFFFFF8F] border border-white rounded-lg col-span-12 space-y-3 flex flex-col justify-center">
        <p className="uppercase text-center text-secondary text-3xl xl:text-4xl font-semibold">
          Admission Form
        </p>
      </section>
      <form className="px-6 md:px-10 py-5 col-span-12 bg-[#FFFFFF8F] border border-white rounded-lg space-y-3 text-sm">
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="fullName" className="capitalize">
            Full name
          </label>
          <input
            name="fullName"
            type="text"
            //   value=""
            placeholder="Enter your full name"
            // onChange={}
            className="px-3 py-2 rounded-md bg-white focus-within:outline-0 text-black/65 placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="phone" className="capitalize">
            Phone number
          </label>
          <input
            name="phone"
            type="text"
            //   value=""
            placeholder="Phone number"
            // onChange={}
            className="px-3 py-2 rounded-md bg-white focus-within:outline-0 text-black/65 placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="whatsapp" className="capitalize">
            WhatsApp
          </label>
          <input
            name="whatsapp"
            type="text"
            //   value=""
            placeholder="whatsApp"
            // onChange={}
            className="px-3 py-2 rounded-md bg-white focus-within:outline-0 text-black/65 placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="email" className="capitalize">
            Email
          </label>
          <input
            name="emial"
            type="text"
            //   value=""
            placeholder="email address"
            // onChange={}
            className="px-3 py-2 rounded-md bg-white focus-within:outline-0 text-black/65 placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="address" className="capitalize">
            Address
          </label>
          <input
            name="address"
            type="text"
            //   value=""
            placeholder="Gopalnagor, Mohammadpur, Magura- 7630"
            // onChange={}
            className="px-3 py-2 rounded-md bg-white focus-within:outline-0 text-black/65 placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="qualification" className="capitalize">
            academic qualification
          </label>
          <input
            name="qualification"
            type="text"
            //   value=""
            placeholder="example: SSC, HSC, Diploma"
            // onChange={}
            className="px-3 py-2 rounded-md bg-white focus-within:outline-0 text-black/65 placeholder:capitalize"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="course" className="capitalize">
            Which course you want to enrol?
          </label>
          <Dropdown
            options={courses}
            value={course}
            onChange={setCourse}
            placeholder="Please select an option"
            className={`w-full ${course ? "text-black" : "text-black/50"}`}
          />
        </div>

        <div className="flex flex-col gap-1 col-span-1">
          <label htmlFor="course" className="capitalize">
            Preffered Class Time
          </label>
          <Dropdown
            options={classTimes}
            value={classTime}
            onChange={setClassTime}
            placeholder="Select One"
            className={`w-full ${classTime ? "text-black" : "text-black/50"}`}
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button className="px-3 py-2 rounded-md bg-primary font-medium cursor-pointer hover:bg-primary/80 hover:text-secondary/80 transition-all">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
