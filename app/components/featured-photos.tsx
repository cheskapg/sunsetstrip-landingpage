'use client'
import Image from "next/image";
import { PhotoIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function FeaturedPhotos() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  const photos = [
    {
      id: 1,
      title: "Sunset View",
      description: "Breathtaking sunset from our rooftop terrace",
      imageUrl: [
        "/assets/images/sunset skies.jpg",
        "/assets/images/sunset skies 2.jpg",
        "/assets/images/sunset skies 3.jpg",
        "/assets/images/sunset yellow.jpg"
      ],
      category: "Views",
    },
    {
      id: 2,
      title: "Rooms",
      description: "Our premium suite with panoramic city views",
      imageUrl: [
        "/assets/images/room 1/FamilyRoom1-1.jpg",
        "/assets/images/room 2/FamilyRoom2-1.jpg",
        "/assets/images/room 2/FamilyRoom2-2.jpg",
        "/assets/images/room 3/CoupleRoom3-1.jpg"
      ],
      category: "Rooms",
    },
    {
      id: 3,
      title: "Amenities",
      description: "Experience our resort amenities and activities",
      imageUrl: [
        "/assets/images/Kayak.jpg",
        "/assets/images/SummerShore.jpg",
        "/assets/images/Shoreline.jpg",
        "/assets/images/FeatureGirl.jpg"
      ],
      category: "Amenities",
    },
      // {
    //   id: 4,
    //   title: "RestoBar",
    //   description: "World-class cuisine in our signature restaurant",
    //   imageUrl: "/api/placeholder/400/300",
    //   category: "Dining",
    // },
    // {
    //   id: 5,
    //   title: "Spa & Wellness",
    //   description: "Rejuvenate in our luxurious spa facilities",
    //   imageUrl: "/api/placeholder/400/300",
    //   category: "Wellness",
    // },
    // {
    //   id: 6,
    //   title: "Hollywood Lights",
    //   description: "The glittering cityscape from your window",
    //   imageUrl: "/api/placeholder/400/300",
    //   category: "Views",
    // },

  ];

  const nextImage = (photoId: number, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [photoId]: ((prev[photoId] || 0) + 1) % maxIndex
    }));
  };

  const prevImage = (photoId: number, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [photoId]: ((prev[photoId] || 0) - 1 + maxIndex) % maxIndex
    }));
  };
  
  return (
    <section className="py-20 bg-gray-50">
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
          {photos.map((photo, index) => {
            const currentIndex = currentImageIndex[photo.id] || 0;
            const totalImages = photo.imageUrl.length;
            
            return (
              <div
                key={photo.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Carousel */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={photo.imageUrl[currentIndex]}
                    alt={`${photo.title} - Image ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Navigation Buttons */}
                  {totalImages > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(photo.id, totalImages)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      >
                        <ChevronLeftIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => nextImage(photo.id, totalImages)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      >
                        <ChevronRightIcon className="h-4 w-4" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {totalImages > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                      {photo.imageUrl.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setCurrentImageIndex(prev => ({ ...prev, [photo.id]: imgIndex }))}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            imgIndex === currentIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-semibold rounded-full">
                      {photo.category}
                    </span>
                  </div>

                  {/* Image Counter */}
                  {totalImages > 1 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        {currentIndex + 1}/{totalImages}
                      </span>
                    </div>
                  )}

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
            );
          })}
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
