import Image from "next/image";
import FeaturedPhotos from "./components/featured-photos";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NearbyAttractions from "./components/nearby-attractions";
import Rooms from "./components/rooms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero/>
      <FeaturedPhotos/>
      <NearbyAttractions/>
      <Rooms />
      <Footer />
    </div>
  );
}
