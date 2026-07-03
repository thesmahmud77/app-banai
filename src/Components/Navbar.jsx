"use client";
import { useState } from "react";
import Logo from "./Re-Useable/Logo";
import Link from "next/link";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Feature", href: "/features" },
    { name: "Work Flow", href: "/work-flow" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/Blog" },
  ];

  return (
    <nav className="px-4 sm:px-6 py-3 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-6">
          {navLinks.map((navitem, index) => (
            <Link
              key={index}
              href={navitem.href}
              className="text-white hover:text-amber-500 transition-colors duration-200"
            >
              {navitem.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-white hover:text-amber-500 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="text-white hover:text-amber-500 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white text-xl cursor-pointer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <PiDotsThreeOutlineVerticalFill />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-800 pt-4">
          {navLinks.map((navitem, index) => (
            <Link
              key={index}
              href={navitem.href}
              className="text-white text-sm font-medium items-center hover:*:text-amber-500"
              onClick={() => setMobileOpen(false)}
            >
              {navitem.name}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="text-white text-sm font-medium items-center"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-white text-sm font-medium items-center"
            onClick={() => setMobileOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
