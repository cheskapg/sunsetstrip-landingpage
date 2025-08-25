import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  UserGroupIcon,
  WifiIcon,
  TvIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Couple Room",
      imagePath: "/assets/images/room 3/CoupleRoom3-1.jpg",
      regularPrice: "₱1,199",
      weekendPrice: "₱1,500",
      period: "per night",
      description:
        "Perfect for couples seeking a romantic getaway with beachfront access",
      features: [
        "1 Standard Double Bed",
        "Air Conditioning",
        "2 Guests Max",
        "Free WiFi",
        "Bathroom Amenities",
      ],
      maxGuests: 2,
      extraPerson: "₱300",
      available: "2 rooms available",
      popular: false,
    },
    {
      id: 2,
      name: "Family Room #1",
      imagePath: "/assets/images/room 1/FamilyRoom1-1.jpg",
      regularPrice: "₱2,399",
      weekendPrice: "₱2,600",
      period: "per night",
      description:
        "Spacious family accommodation with double bed and bunk bed setup",
      features: [
        "1 Standard Double Bed",
        "1 Bunk Bed",
        "Air Conditioning",
        "4 Guests Max",
        "Free WiFi",
      ],
      maxGuests: 4,
      extraPerson: "₱300",
      available: "1 room available",
      popular: true,
    },
    {
      id: 3,
      name: "Family Room #2",
      imagePath: "/assets/images/room 2/FamilyRoom2-1.jpg",
      regularPrice: "₱2,599",
      weekendPrice: "₱2,900",
      period: "per night",
      description: "Premium family room with enhanced amenities and comfort",
      features: [
        "1 Standard Double Bed",
        "1 Bunk Bed",
        "Air Conditioning",
        "4 Guests Max",
        "Premium Setup",
      ],
      maxGuests: 4,
      extraPerson: "₱300",
      available: "1 room available",
      popular: false,
    },
  ];

  const amenities = [
    {
      category: "Resort Features",
      items: [
        "Beachfront location",
        "Car parking available",
        "All rooms air-conditioned",
        "24-hour security & CCTV",
        "Semi-open outdoor restaurant",
      ],
    },
    {
      category: "Safety & Hygiene",
      items: [
        "UV disinfection",
        "Lifeguard on duty",
        "Smoke detectors",
        "Fog disinfectant machine",
        "Bathroom amenities provided",
      ],
    },
    {
      category: "Water Activities",
      items: [
        "Body boards",
        "Kayak rentals",
        "Paddle boards",
        "Life jackets provided",
        "Free coffee at restaurant",
      ],
    },
  ];

  return (
    <section className="min-h-screen pt-5 pb-16 bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <HomeIcon className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-medium text-sm">
              Accommodations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Available Rooms
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book early to secure your beachfront getaway experience.
          </p>

          {/* Important Notice */}
          <div className="mt-3 p-4 bg-orange-50 border border-orange-200 rounded-lg max-w-2xl mx-auto">
            <p className="text-orange-800 text-sm font-medium">
              ⚠️ Limited Availability: Only a few rooms available at the moment.
              Book now to avoid disappointment!
            </p>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                room.popular ? "ring-2 ring-orange-500" : ""
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

              {/* Room Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                {room.imagePath ? (
                  <Image
                    src={room.imagePath}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  /* Fallback content when no image path */
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100">
                    <div className="text-center text-orange-600">
                      <HomeIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm font-medium opacity-75">
                        {room.name}
                      </p>
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Room Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  {/* Room Details */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      {room.maxGuests} guests max
                    </div>
                    <div className="text-orange-600 font-medium">
                      {room.available}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Regular Rate:
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {room.regularPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Weekend Rate:
                      </span>
                      <span className="text-xl font-semibold text-orange-600">
                        {room.weekendPrice}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Extra Person: {room.extraPerson} • No free breakfast
                      included
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/`}
                  className={`group w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    room.popular
                      ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
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
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help choosing the perfect room?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is available to help you find the ideal accommodation for
              your stay.
            </p>

            {/* Important Policies */}
            <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Check-in/Check-out
                </h4>
                <p className="text-sm text-gray-600">
                  Check-in: 2:00 PM
                  <br />
                  Check-out: 12:00 NN
                </p>

                <h4 className="font-semibold text-gray-900">Children Policy</h4>
                <p className="text-sm text-gray-600">
                  • Ages 0-3: Free
                  <br />
                  • Ages 4-7: 50% of extra person fee
                  <br />• Ages 8+: Full extra person fee (₱300)
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Pet Policy</h4>
                <p className="text-sm text-gray-600">
                  Pets welcome! Owners responsible for damages and cleanliness.
                </p>

                <h4 className="font-semibold text-gray-900">Food & Drinks</h4>
                <p className="text-sm text-gray-600">
                  Outside food not allowed. Corkage fee: ₱2,000 minimum.
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300"
            >
              Contact Us for Booking
            </Link>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Resort Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {amenities.map((amenityGroup, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                    {amenityGroup.category}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2 max-w-xs mx-auto text-center">
                    {amenityGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-center">
                        <span className="text-orange-500">•</span>
                        <span className="ml-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
