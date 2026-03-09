"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <nav className="px-3">
      <div className="container mx-auto px-4 border backdrop-blur-xs bg-white/5 border-white/20 shadow-[13px_11px_14px_1px_rgba(0,0,0,0.5)] rounded-lg md:rounded-full mt-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 font-bold uppercase transition-all duration-200 border border-transparent rounded-full",
                    isActive(link.href)
                      ? "border-white/40 text-white bg-white/20"
                      : "hover:text-white/70",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={clsx(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "rotate-45 translate-y-1.5",
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "-rotate-45 -translate-y-1.5",
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 py-4" : "max-h-0",
          )}
        >
          <ul className="flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-4 py-2 rounded-md transition-all",
                    isActive(link.href)
                      ? "bg-white text-primary font-semibold"
                      : "hover:bg-white/20",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
