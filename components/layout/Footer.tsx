import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-sm text-white">
      <div className="container mx-auto px-4 py-3">
        <section className="grid grid-cols-1 md:grid-cols-3 space-y-3">
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
          </Link>
          <section className="flex flex-col gap-2 md:gap-3 items-start font-semibold">
            <h5 className="text-xl font-bold mb-2">creativebase8</h5>
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Admission</Link>
            <Link href="">Payment</Link>
            <Link href="">Contact</Link>
          </section>
          <section className="flex flex-col gap-2 md:gap-3 items-start font-semibold">
            <h5 className="text-xl font-bold mb-2">Contact Us</h5>
            <a href="mailto:creativebase8@gmail.com">creativebase8@gmail.com</a>
            <a href="tel:+8801644466663">+8801644466663</a>
          </section>
        </section>
        <hr className="my-5" />
        <p>Copyright © 2026 creativebase8.com</p>
      </div>
    </footer>
  );
}
