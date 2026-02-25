"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admission", href: "/admission" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold">Logo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "px-4 py-3 font-bold uppercase transition-all duration-200",
                    isActive(link.href)
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/90"
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
                isOpen && "rotate-45 translate-y-1.5"
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "-rotate-45 -translate-y-1.5"
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 py-4" : "max-h-0"
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
                      : "hover:bg-white/20"
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
