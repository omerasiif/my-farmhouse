import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Background image with zoom */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url('/images/1000052433.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="animate-fade-in delay-200 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          Premium Farmhouse Experience
        </div>

        {/* Heading */}
        <h1
          className="animate-slide-up delay-400 text-white font-extrabold leading-[1.1] tracking-tight drop-shadow-xl"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
        >
          Escape the City.
          <br />
          <span className="text-green-300">Experience Nature.</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-in delay-600 text-white/85 font-light leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)' }}
        >
          Experience peaceful stays, beautiful landscapes, and unforgettable moments with your family and friends.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-800 flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#contact"
            className="group bg-[#2E7D32] hover:bg-[#388E3C] text-white font-semibold px-8 py-3.5 rounded-full shadow-xl shadow-green-900/40 hover:shadow-green-700/50 transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            Book Now
          </a>

          <Link
            to="/gallery"
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">
        <span className="text-[10px] tracking-widest uppercase font-light">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
