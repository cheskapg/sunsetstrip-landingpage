import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-orange-200">
            <span className="text-orange-600 font-medium text-sm">
              ✨ Experience Luxury on Sunset Strip
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Sunset Strip
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the ultimate luxury experience in the heart of Los Angeles.
            Where glamour meets comfort and every moment becomes a memory.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Prime Location
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Luxury Amenities
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              24/7 Concierge
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/book"
              className="group inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Your Stay
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              View Gallery
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600 text-sm">Luxury Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">4.9</div>
              <div className="text-gray-600 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 text-sm">Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
