import React from "react";

export default function page() {
  return (
    <div className="bg-fuchsia-900 text-secondary py-10">
      <div className="container mx-auto max-w-4xl px-4 grid grid-cols-12 gap-5 z-10">
        <section className="px-6 lg:px-10 py-5 bg-[#FFFFFF8F] border border-white rounded-lg col-span-12 md:col-span-4 space-y-3 flex flex-col justify-center">
          <p className="capitalize text-3xl xl:text-4xl font-semibold">
            contact us!
          </p>
          <p className="text-white">Anytime is perfect to contact us</p>
        </section>
        <form className="px-6 md:px-10 py-5 col-span-12 md:col-span-8 bg-[#FFFFFF8F] border border-white rounded-lg grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 col-span-1">
            <label htmlFor="firstName" className="capitalize font-medium">
              first name
            </label>
            <input
              name="firstName"
              type="text"
              //   value=""
              placeholder="Hasan"
              // onChange={}
              className="px-3 py-1 rounded-md bg-white focus-within:outline-0 text-black/65"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-1">
            <label htmlFor="lastName" className="capitalize font-medium">
              last name
            </label>
            <input
              name="lastName"
              type="text"
              //   value=""
              placeholder="Jamil"
              // onChange={}
              className="px-3 py-1 rounded-md bg-white focus-within:outline-0 text-black/65"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="email" className="capitalize font-medium">
              Email
            </label>
            <input
              name="email"
              type="text"
              //   value=""
              placeholder="jamil@gmail.co"
              // onChange={}
              className="px-3 py-1 rounded-md bg-white focus-within:outline-0 text-black/65"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="subject" className="capitalize font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              //   value=""
              placeholder="jamil@gmail.co"
              // onChange={}
              className="px-3 py-1 rounded-md bg-white focus-within:outline-0 text-black/65"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="message" className="capitalize font-medium">
              Your message
            </label>
            <textarea
              name=""
              id=""
              placeholder="What is the registration fee"
              className="px-3 py-1 rounded-md bg-white focus-within:outline-0 text-black/65"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-end">
            <button className="px-3 py-2 rounded-md bg-primary font-medium cursor-pointer hover:bg-primary/80 hover:text-secondary/80 transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
