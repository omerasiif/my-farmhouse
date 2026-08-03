import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[520px] md:min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/1000052433.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="animate-fade-in delay-200 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[11px] md:text-xs font-medium px-4 py-2 rounded-full tracking-widest uppercase">

            <span className="w-2 h-2 rounded-full bg-green-400"></span>

            Premium Farmhouse Experience

          </div>

          {/* Heading */}
          <h1
            className="animate-slide-up delay-300 mt-6 font-extrabold text-white leading-tight tracking-tight drop-shadow-xl"
            style={{
              fontSize: "clamp(2.3rem,6vw,4.5rem)",
            }}
          >
            Escape the City.
            <br />
            <span className="text-green-300">
              Experience Nature.
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-in delay-500 mt-5 text-white/90 leading-relaxed max-w-xl md:max-w-2xl"
            style={{
              fontSize: "clamp(1rem,2vw,1.2rem)",
            }}
          >
            Experience peaceful stays, beautiful landscapes,
            private swimming pools and unforgettable
            moments with your family and friends.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up delay-700 mt-8 w-full flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#contact"
              className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#388E3C] text-white font-semibold px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book Now
            </a>

            <Link
              to="/gallery"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-9 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </Link>

            <Link
              to="/location"
              className="w-full sm:w-auto bg-white text-[#2E7D32] hover:bg-green-100 font-semibold px-9 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Find Us
            </Link>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="animate-fade-in delay-1000 absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">

        <span className="text-[10px] tracking-widest uppercase font-light">
          Scroll
        </span>

        <ChevronDown className="w-4 h-4 animate-bounce" />

      </div>

    </section>
  );
}
