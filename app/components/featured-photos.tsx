import Image from 'next/image';
import { PhotoIcon } from '@heroicons/react/24/outline';

export default function FeaturedPhotos() {
  const photos = [
    {
      id: 1,
      title: "Sunset View",
      description: "Breathtaking sunset from our rooftop terrace",
      imageUrl: "/api/placeholder/400/300",
      category: "Views"
    },
    {
      id: 2,
      title: "Luxury Suite",
      description: "Our premium suite with panoramic city views",
      imageUrl: "/api/placeholder/400/300",
      category: "Rooms"
    },
    {
      id: 3,
      title: "Rooftop Pool",
      description: "Infinity pool overlooking the Hollywood Hills",
      imageUrl: "/api/placeholder/400/300",
      category: "Amenities"
    },
    {
      id: 4,
      title: "Fine Dining",
      description: "World-class cuisine in our signature restaurant",
      imageUrl: "/api/placeholder/400/300",
      category: "Dining"
    },
    {
      id: 5,
      title: "Spa & Wellness",
      description: "Rejuvenate in our luxurious spa facilities",
      imageUrl: "/api/placeholder/400/300",
      category: "Wellness"
    },
    {
      id: 6,
      title: "Hollywood Lights",
      description: "The glittering cityscape from your window",
      imageUrl: "/api/placeholder/400/300",
      category: "Views"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
            <PhotoIcon className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-medium text-sm">Gallery</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Photos
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the beauty and luxury that awaits you at Sunset Strip. 
            From stunning views to world-class amenities.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 to-yellow-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-orange-600">
                    <PhotoIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm font-medium opacity-75">{photo.title}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-semibold rounded-full">
                    {photo.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            View All Photos
            <PhotoIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
