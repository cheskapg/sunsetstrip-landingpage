"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  PhotoIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home", icon: HomeIcon },
    { href: "#gallery", label: "Gallery", icon: PhotoIcon },
    { href: "#attractions", label: "Attractions", icon: MapPinIcon },
    { href: "#rooms", label: "Rooms", icon: BuildingOfficeIcon },
    { href: "#contact", label: "Contact", icon: EnvelopeIcon },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      // Default offset = 0
      let offset = 80;

      // If the section is "gallery", subtract 80px for navbar height
      if (targetId === "gallery") {
        offset = 0;
      }

      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar with Logo and Menu Button */}
      <nav className="fixed top-0 left-0 right-0 z-40 blur-effect bg-black/30 backdrop-blur-xs ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/sunsetStripBoardLogo-2.png"
                  alt="Sunset Strip Logo"
                  width={400}
                  height={50}
                  className="w-full h-auto max-h-16 object-contain"
                  priority
                />
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
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/book"
                className="hidden lg:block bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-full text-sm xl:text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-orange-500/25"
              >
                Book Now
              </Link>
              {/* Menu Toggle Button - Hidden on desktop, shown on sm-md */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open menu</span>
                {!isMenuOpen ? (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex-1 flex items-center">
            <Image
              src="/assets/images/sunsetStripBoardLogo-2.png"
              alt="Sunset Strip Logo"
              width={250}
              height={60}
              className="w-full h-auto max-h-16 object-contain"
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 ml-4 flex-shrink-0"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6 space-y-2">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="flex items-center space-x-4 px-4 py-4 rounded-xl hover:bg-orange-50 hover:text-orange-600 text-gray-700 transition-all duration-200 cursor-pointer group"
              >
                <IconComponent className="h-6 w-6 text-gray-400 group-hover:text-orange-500 transition-colors duration-200" />
                <span className="font-medium text-lg">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Book Now Button */}
        <div className="p-6 border-t border-gray-200">
          <Link
            href="/book"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <CalendarIcon className="h-5 w-5" />
            <span>Book Your Stay</span>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <h3 className="font-semibold text-gray-900 mb-3">Quick Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>📞 (323) 555-0123</p>
            <p>📧 hello@sunsetstrip.com</p>
            <p>📍 Alegria, Cebu</p>
          </div>
        </div>
      </div>
    </>
  );
}
