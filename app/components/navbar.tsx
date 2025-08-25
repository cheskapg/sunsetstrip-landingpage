"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#attractions", label: "Attractions" },
    { href: "#rooms", label: "Rooms" },
    { href: "#contact", label: "Contact" },
    // { href: "#footer", label: "About" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className={`${isMenuOpen? "" :" px-4 sm:px-6 lg:px-8"} max-w-7xl mx-auto`}>
      <div className={`flex justify-between items-center h-16 sm:h-20 lg:h-24 ${
        isMenuOpen ? 'bg-white/95 backdrop-blur-lg shadow-lg px-4' : ''
      }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                {/* Logo Image */}
                <Image
                  src="/assets/images/sunsetStripBoardLogo-2.png"
                  alt="Sunset Strip Logo"
                  width={500}
                  height={60}
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-top-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white hover:text-orange-400 px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 cursor-pointer relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <div className="ml-4 xl:ml-8">
                <Link
                  href="/book"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-full text-sm xl:text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-orange-500/25"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Tablet Menu */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-1">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white hover:text-orange-400 px-2 py-2 text-sm font-medium transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-400 px-2 py-2 text-sm font-medium transition-colors duration-300"
              >
                More
              </button>
              <Link
                href="/book"
                className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ml-2"
              >
                Book
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-center space-x-3">
              <Link
                href="/book"
                className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              >
                Book
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden lg:hidden">
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-lg shadow-xl border-b border-white/20 rounded-b-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-900 hover:text-orange-600 block px-4 py-3 text-base font-medium cursor-pointer rounded-lg hover:bg-orange-50 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/book"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 block px-4 py-3 rounded-lg text-base font-semibold text-center transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Your Stay Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="hidden md:block lg:hidden">
          <div className="absolute right-4 top-full mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 py-2">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-900 hover:text-orange-600 block px-4 py-2 text-sm font-medium cursor-pointer hover:bg-orange-50 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
