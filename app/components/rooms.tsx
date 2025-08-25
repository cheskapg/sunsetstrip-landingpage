import Link from 'next/link';
import { 
  HomeIcon, 
  UserGroupIcon, 
  WifiIcon, 
  TvIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: "$299",
      period: "per night",
      description: "Spacious suite with city views and modern amenities",
      features: ["King Bed", "City View", "WiFi", "TV", "Mini Bar"],
      maxGuests: 2,
      size: "450 sq ft",
      popular: false
    },
    {
      id: 2,
      name: "Premium Suite",
      price: "$449",
      period: "per night",
      description: "Luxury suite with panoramic views and premium services",
      features: ["King Bed", "Panoramic View", "WiFi", "Smart TV", "Jacuzzi"],
      maxGuests: 2,
      size: "650 sq ft",
      popular: true
    },
    {
      id: 3,
      name: "Penthouse",
      price: "$899",
      period: "per night",
      description: "Ultimate luxury with private terrace and butler service",
      features: ["Master Suite", "Private Terrace", "Butler", "Full Kitchen", "Hot Tub"],
      maxGuests: 4,
      size: "1200 sq ft",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <HomeIcon className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-medium text-sm">Accommodations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Luxury Rooms & Suites
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of thoughtfully designed rooms and suites, 
            each offering unparalleled comfort and stunning views.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                room.popular ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {room.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Room Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-orange-600">
                    <HomeIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm font-medium opacity-75">{room.name}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Room Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  
                  {/* Room Details */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      {room.maxGuests} guests
                    </div>
                    <div>{room.size}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">{room.price}</span>
                    <span className="text-gray-500 ml-1">/{room.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/book?room=${room.id}`}
                  className={`group w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    room.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Book Now
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help choosing the perfect room?
            </h3>
            <p className="text-gray-600 mb-6">
              Our concierge team is available 24/7 to help you find the ideal accommodation for your stay.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
