"use client";
import Image from "next/image";
import {
  PhotoIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function FeaturedPhotos() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'sunset'>('grid');

  const photos = [
    {
      id: 1,
      title: "Sunset Views",
      description:
        "Relax and enjoy a warm, calming sunset right from our restaurant.",
      imageUrl: [
        "/assets/images/sunset skies 2.jpg",
        "/assets/images/sunset skies 3.jpg",
        "/assets/images/sunset yellow.jpg",
      ],
      category: "Views",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Rooms",
      description:
        "Comfortable and budget-friendly rooms designed for families and couples. Simple and relaxing.",
      imageUrl: [
        "/assets/images/room 1/FamilyRoom1-1.jpg",
        "/assets/images/room 2/FamilyRoom2-1.jpg",
        "/assets/images/room 2/FamilyRoom2-2.jpg",
        "/assets/images/room 3/CoupleRoom3-1.jpg",
      ],
      category: "Accommodation",
      featured: false,
    },
    {
      id: 3,
      title: "Resort Amenities",
      description: "Experience our resort amenities and activities",
      imageUrl: [
        "/assets/images/Kayak.jpg",
        "/assets/images/SummerShore.jpg",
        "/assets/images/Shoreline.jpg",
        "/assets/images/FeatureGirl.jpg",
      ],
      category: "Activities",
      featured: false,
    },
  ];

  const sunsetPhotos = photos.find(p => p.id === 1);
  const otherPhotos = photos.filter(p => p.id !== 1);

  const nextImage = (photoId: number, maxIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [photoId]: ((prev[photoId] || 0) + 1) % maxIndex,
    }));
  };

  const prevImage = (photoId: number, maxIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [photoId]: ((prev[photoId] || 0) - 1 + maxIndex) % maxIndex,
    }));
  };

  // Auto-cycle sunset images
  useEffect(() => {
    if (!sunsetPhotos) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [1]: ((prev[1] || 0) + 1) % sunsetPhotos.imageUrl.length,
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, [sunsetPhotos]);

  // Auto-cycle images on hover for other cards
  useEffect(() => {
    if (hoveredCard === null || hoveredCard === 1) return;

    const photo = photos.find((p) => p.id === hoveredCard);
    if (!photo || photo.imageUrl.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [hoveredCard]: ((prev[hoveredCard] || 0) + 1) % photo.imageUrl.length,
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, [hoveredCard, photos]);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Sunset Section */}
      <div className="relative h-screen">
        {sunsetPhotos && (
          <>
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={sunsetPhotos.imageUrl[currentImageIndex[1] || 0]}
                alt="Sunset Views"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                    <PhotoIcon className="h-5 w-5 text-orange-400 mr-3" />
                    <span className="text-white font-medium">Featured Gallery</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Breathtaking
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent block">
                      Sunset Views
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                    Experience magical sunsets that paint the sky in brilliant colors. 
                    Every evening brings a new masterpiece right from the resto.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setActiveView('grid')}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      View All Photos
                      <PhotoIcon className="ml-2 h-5 w-5" />
                    </button>
                    <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      Watch Video Tour
                      <PlayIcon className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {sunsetPhotos.imageUrl.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() =>
                    setCurrentImageIndex((prev) => ({
                      ...prev,
                      [1]: imgIndex,
                    }))
                  }
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    imgIndex === (currentImageIndex[1] || 0)
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 flex flex-col items-center text-white/60">
              <span className="text-sm font-medium mb-2 rotate-90 origin-center whitespace-nowrap">
                Scroll to explore
              </span>
              <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
            </div>
          </>
        )}
      </div>

      {/* Other Photos Grid */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More to Discover
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From affordable accommodations to exciting activities, 
              explore everything that makes your stay unforgettable.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherPhotos.map((photo, index) => {
              const currentIndex = currentImageIndex[photo.id] || 0;
              const totalImages = photo.imageUrl.length;

              return (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-3xl bg-gray-800 shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 transform hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredCard(photo.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={photo.imageUrl[currentIndex]}
                      alt={`${photo.title} - Image ${currentIndex + 1}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Navigation Buttons */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(photo.id, totalImages)}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
                        >
                          <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => nextImage(photo.id, totalImages)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
                        >
                          <ChevronRightIcon className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold rounded-full">
                        {photo.category}
                      </span>
                    </div>

                    {/* Image Counter */}
                    {totalImages > 1 && (
                      <div className="absolute top-6 right-6">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                          {currentIndex + 1}/{totalImages}
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {photo.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {photo.description}
                    </p>
                    
                    {/* Image Indicators */}
                    {totalImages > 1 && (
                      <div className="flex space-x-2">
                        {photo.imageUrl.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [photo.id]: imgIndex,
                              }))
                            }
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              imgIndex === currentIndex
                                ? "bg-orange-400 scale-125"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105">
              Book Your Stay
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}