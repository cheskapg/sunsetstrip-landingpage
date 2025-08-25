import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function NearbyAttractions() {
  const attractions = [
    {
      name: "Canyoneering",
      time: "3 minutes",
      distance: "1km",
      type: "Adventure",
      directionsUrl: "https://maps.google.com/?q=Canyoneering+Cebu",
    },
    {
      name: "Moalboal Sardine Run",
      time: "45 minutes",
      distance: "24km",
      type: "Marine Life",
      directionsUrl: "https://maps.google.com/?q=Moalboal+Sardine+Run+Cebu",
    },
    {
      name: "Oslob Whale Shark Watching",
      time: "80 minutes",
      distance: "55km",
      type: "Marine Life",
      directionsUrl:
        "https://maps.google.com/?q=Oslob+Whale+Shark+Watching+Cebu",
    },
    {
      name: "Cambais Falls",
      time: "19 minutes",
      distance: "10km",
      type: "Waterfall",
      directionsUrl: "https://maps.google.com/?q=Cambais+Falls+Cebu",
    },
    {
      name: "Kawasan Falls",
      time: "5 minutes",
      distance: "2.4km",
      type: "Waterfall",
      directionsUrl: "https://maps.google.com/?q=Kawasan+Falls+Cebu",
    },
    {
      name: "Wonder Falls",
      time: "8 minutes",
      distance: "4.2km",
      type: "Waterfall",
      directionsUrl: "https://maps.google.com/?q=Wonder+Falls+Cebu",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Adventure":
        return "bg-red-100 text-red-700";
      case "Marine Life":
        return "bg-blue-100 text-blue-700";
      case "Waterfall":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="min-h-screen py-16 bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <MapPinIcon className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-medium text-sm">Explore</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nearby Attractions
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing adventures and natural wonders just minutes away
            from Sunset Strip. From thrilling canyoneering to serene waterfalls.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100"
            >
              {/* Type Badge */}
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                    attraction.type
                  )}`}
                >
                  {attraction.type}
                </span>
              </div>

              {/* Attraction Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {attraction.name}
              </h3>

              {/* Time and Distance */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <ClockIcon className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm font-medium">
                    {attraction.time} away
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 text-orange-500 mr-3" />
                  <span className="text-sm font-medium">
                    {attraction.distance} distance
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href={attraction.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center px-4 py-2 bg-orange-50 text-orange-600 font-medium rounded-lg hover:bg-orange-100 transition-colors duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help planning your adventures?
            </h3>
            <p className="text-gray-600 mb-6">
              Our concierge team can help arrange transportation and guide services for all nearby attractions.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300">
              <MapPinIcon className="h-5 w-5 mr-2" />
              Plan My Adventure
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
