import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, MessageCircle, Star } from 'lucide-react';

const MAPS_LINK =
  'https://www.google.com/maps/place/MY+Farmhouse/@17.3205953,78.236439,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbebddb3b5be17:0x80cc09c99cf64491!8m2!3d17.3205902!4d78.2390139!16s%2Fg%2F11s_tng_b9?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D';

const REVIEWS_LINK =
  'https://www.google.com/maps/place/MY+Farmhouse/@17.3205953,78.236439,17z/data=!4m8!3m7!1s0x3bcbebddb3b5be17:0x80cc09c99cf64491!8m2!3d17.3205902!4d78.2390139!9m1!1b1!16s%2Fg%2F11s_tng_b9?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D';

const WHATSAPP_LINK = 'https://wa.me/918686465007';
const PHONE_DISPLAY = '86864 65007';
const PHONE_LINK = 'tel:+918686465007';

export default function Footer() {
  return (
  <footer id="contact" className="bg-[#2E7D32] pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">

          {/* Left — Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-white/25">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-white font-semibold text-lg tracking-wide">MY Farmhouse</span>
            </Link>
            <p className="text-white/70 font-light text-sm leading-relaxed max-w-xs">
              Escape the City. Experience Nature.
            </p>
          </div>

          {/* Center — Location & Phone */}
          <div className="flex flex-col items-center md:items-center gap-5">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-white/60 text-[11px] font-medium tracking-widest uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Location
              </span>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium text-sm hover:text-green-200 transition-colors duration-200 underline-offset-4 hover:underline"
              >
                MY Farmhouse
              </a>
            </div>
            <div className="w-10 h-px bg-white/15" />
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-white/60 text-[11px] font-medium tracking-widest uppercase flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Call Us
              </span>
              <a
                href={PHONE_LINK}
                className="text-white font-medium text-sm hover:text-green-200 transition-colors duration-200 underline-offset-4 hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right — Buttons */}
          <div className="flex flex-col items-center md:items-end gap-3.5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[220px] bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book Now
            </a>
            <a
              href={REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[220px] bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full border border-white/40 hover:border-white/70 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2"
            >
              <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
              Google Reviews
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/45 text-xs tracking-wide">
            © {new Date().getFullYear()} MY Farmhouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
