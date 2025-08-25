import Contact from "./components/contact";
import FeaturedPhotos from "./components/featured-photos";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NearbyAttractions from "./components/nearby-attractions";
import Rooms from "./components/rooms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Scroll snap container */}
      <div className="scroll-snap-container">
        {/* Hero Section */}
        <section id="hero" className="scroll-snap-section">
          <Hero />
        </section>

        {/* Featured Photos Section */}
        <section id="gallery" className="scroll-snap-section">
          <FeaturedPhotos />
        </section>

        {/* Nearby Attractions Section */}
        <section id="attractions" className="scroll-snap-section">
          <NearbyAttractions />
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="scroll-snap-section">
          <Rooms />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-snap-section">
          <Contact />
        </section>
      </div>

      {/* Footer - Outside scroll snap container for normal scrolling */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
