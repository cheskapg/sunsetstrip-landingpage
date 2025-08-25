import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Concierge", href: "/services/concierge" },
    { name: "Room Service", href: "/services/room-service" },
    { name: "Spa & Wellness", href: "/services/spa" },
    { name: "Business Center", href: "/services/business" },
    { name: "Valet Parking", href: "/services/valet" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Sunset Strip
              </h3>
              <p className="text-gray-400 mt-2">
                Experience luxury in the heart of Los Angeles. Where every
                moment becomes a cherished memory.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Purok 3, Tambis, Sangi, Madridejos, Alegria</p>
                  <p className="text-gray-300">  Cebu 8030 Philippines</p>
                </div>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">(323) 555-0123</p>
              </div>

              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">hello@sunsetstrip.com</p>
              </div>

              <div className="flex items-start">
                <ClockIcon className="h-5 w-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7 Concierge</p>
                  <p className="text-gray-400 text-sm">Always here to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to receive exclusive offers and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-r-lg transition-colors duration-300">
                  <EnvelopeIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <span className="text-sm font-bold">fb</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <span className="text-sm font-bold">ig</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300"
                >
                  <span className="text-sm font-bold">tw</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Sunset Strip. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
