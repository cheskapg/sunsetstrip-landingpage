import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-orange-600 via-red-500 to-yellow-400 relative">
          {/* Local sunset skies image */}
          <div className="absolute inset-0 bg-[url('/assets/images/sunset%20skies.jpg')] bg-cover bg-center bg-no-repeat"></div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-transparent to-yellow-900/30"></div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/30">
            <span className="text-orange-600 font-medium text-sm">
              ✨ Experience Luxury on Sunset Strip
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Welcome to
            <span className="block bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">
              Sunset Strip
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Experience Sunset Strip where affordable escapes meets unforgettable memories.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              Alegria, Cebu
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              Luxury Amenities
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
              24/7 Concierge
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/book"
              className="group inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl shadow-2xl hover:bg-orange-700 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Your Stay
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-xl shadow-2xl hover:bg-white hover:shadow-3xl transition-all duration-300 border border-white/30"
            >
              View Gallery
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-300">50+</div>
              <div className="text-white/80 text-sm">Luxury Rooms</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-300">4.9</div>
              <div className="text-white/80 text-sm">Rating</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-300">24/7</div>
              <div className="text-white/80 text-sm">Service</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-300">100%</div>
              <div className="text-white/80 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
