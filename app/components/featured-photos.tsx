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
  const [activeView, setActiveView] = useState<"grid" | "sunset">("grid");

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
      title: "Standard Rooms",
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
        "/assets/images/sunsetstriptables.jpg",
        "/assets/images/sunsetstripbar.jpg",
        "/assets/images/sunsetstripbarfront.jpg",
        "/assets/images/Shoreline.jpg",
        "/assets/images/FeatureGirl.jpg",
      ],
      category: "Activities",
      featured: false,
    },
  ];

  const sunsetPhotos = photos.find((p) => p.id === 1);
  const otherPhotos = photos.filter((p) => p.id !== 1);

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
                    <span className="text-white font-medium">
                      Featured Gallery
                    </span>
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
                    Experience magical sunsets that paint the sky in brilliant
                    colors. Every evening brings a new masterpiece right from
                    your window.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setActiveView("grid")}
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
      <div className="relative z-10 pt-24 pb-32">
        {/* Modern Background with Sunset Strip Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 via-red-900/20 to-amber-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,146,60,0.25),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.15),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern Section Header */}
          <div className="text-center mb-12">
            {/* <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-600/30 to-red-500/30 backdrop-blur-xl rounded-full border border-orange-400/40 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-100 font-medium text-sm uppercase tracking-wider">Experience Collection</span>
            </div> */}
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent">
                Discover Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Perfect Moment
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From intimate sunset dinners to adventure-filled days, every
              corner of Sunset Strip offers unforgettable experiences crafted
              just for you.
            </p>
          </div>

          {/* Modern Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {otherPhotos.map((photo, index) => {
              const currentIndex = currentImageIndex[photo.id] || 0;
              const totalImages = photo.imageUrl.length;

              return (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-orange-400/20 shadow-xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-[1.02]"
                  onMouseEnter={() => setHoveredCard(photo.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <div
                    className="aspect-[4/3] relative overflow-hidden"
                    onClick={() => nextImage(photo.id, totalImages)}
                  >
                    <Image
                      src={photo.imageUrl[currentIndex]}
                      alt={`${photo.title} - Image ${currentIndex + 1}`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Simple Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    {/* Navigation Buttons */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(photo.id, totalImages);
                          }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                        >
                          <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(photo.id, totalImages);
                          }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                        >
                          <ChevronRightIcon className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {photo.category}
                      </span>
                    </div>

                    {/* Image Counter */}
                    {totalImages > 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/60 text-white text-sm rounded-full backdrop-blur-sm">
                          {currentIndex + 1}/{totalImages}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
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
                                ? "bg-orange-500 scale-125"
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

          {/* Modern Bottom CTA
          <div className="text-center mt-24">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-orange-900/60 to-red-900/60 backdrop-blur-xl rounded-3xl p-12 border border-orange-400/30 shadow-2xl">
                <div className="max-w-lg mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg shadow-orange-400/40">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready for Your 
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Sunset Strip</span> Experience?
                  </h3>
                  <p className="text-orange-100 mb-8 leading-relaxed">
                    Don't just dream about paradise – live it. Book your unforgettable getaway today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center">
                        <span>Book Your Stay</span>
                        <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </button>
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-800/40 to-red-800/40 hover:from-orange-700/60 hover:to-red-700/60 text-orange-100 hover:text-white font-semibold rounded-2xl border border-orange-400/30 hover:border-orange-300/50 backdrop-blur-xl transition-all duration-300 transform hover:scale-105">
                      View All Galleries
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
