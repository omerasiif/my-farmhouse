import { useEffect } from 'react';
import { MapPin, Car, Phone, MessageCircle, Check, Navigation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MAPS_LINK =
  'https://maps.app.goo.gl/6cZ5dG3XdHJcsDLRA';
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3808.895399176488!2d78.236439!3d17.3205953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbebddb3b5be17%3A0x80cc09c99cf64491!2sMY%20Farmhouse!5e0!3m2!1sen!2sin!4v1785685717008!5m2!1sen!2sin';

const WHATSAPP_LINK =
  'https://wa.me/918686465007?text=Hello%20MY%20Farmhouse,%20I%20would%20like%20to%20know%20about%20booking%20and%20availability.';

const easyAccessItems = [
  'Spacious Parking',
  'Easy Road Connectivity',
  'Family Friendly',
  'Ideal for Events',
];

export default function LocationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysSolid />

      {/* Page Header */}
      <section className="relative pt-36 pb-20 px-6 bg-[#F4FAF3] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#2E7D32] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#2E7D32] blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="animate-fade-in delay-200 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#2E7D32]/15 text-[#2E7D32] text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] inline-block" />
            Location
          </div>
          <h1
            className="animate-slide-up delay-400 text-[#1B5E20] font-extrabold leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)' }}
          >
            Find Us Easily
          </h1>
          <p
            className="animate-fade-in delay-600 text-gray-500 font-light leading-relaxed max-w-xl mx-auto mt-5"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
          >
            Conveniently located and easily accessible, MY Farmhouse is the perfect destination for your next getaway.
          </p>
          <div className="w-16 h-[2.5px] bg-[#2E7D32] mx-auto mt-6 rounded-full" />
        </div>
      </section>

    {/* Two-column content */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    {/* Left — Map */}
    <div className="animate-fade-in-up order-1">
      <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(46,125,50,0.12)] border border-green-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.895399078512!2d78.23643897514268!3d17.32059530472588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbebddb3b5be17%3A0x80cc09c99cf64491!2sMY%20Farmhouse!5e0!3m2!1sen!2sin!4v1787579266697!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="MY Farmhouse location on Google Maps"
        />
      </div>

      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full bg-[#2E7D32] hover:bg-[#388E3C] text-white font-semibold px-7 py-4 rounded-full shadow-lg hover:shadow-green-900/30 hover:scale-[1.02] transition-all duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2.5"
      >
        <MapPin className="w-5 h-5" />
        Open in Google Maps
      </a>
    </div>

    {/* Right — Info cards */}
    <div className="flex flex-col gap-6 order-2">

      {/* Address */}
      <div className="animate-fade-in-up delay-200 bg-[#F4FAF3] rounded-3xl p-7 shadow-[0_8px_30px_rgba(46,125,50,0.08)] hover:shadow-[0_14px_44px_rgba(46,125,50,0.14)] transition-all duration-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm">
            <MapPin
              className="w-5 h-5 text-[#2E7D32]"
              strokeWidth={1.9}
            />
          </div>

          <h3 className="text-[#1B5E20] font-semibold text-lg">
            Address
          </h3>
        </div>

        <p className="text-gray-600 font-light leading-relaxed text-[15px]">
          MY Farmhouse, near Hyderabad, Telangana — a peaceful retreat
          surrounded by greenery, just a short drive from the city.
        </p>

        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#2E7D32] hover:text-[#1B5E20] text-sm font-medium mt-3 transition-colors duration-200 underline-offset-4 hover:underline"
        >
          <Navigation className="w-3.5 h-3.5" />
          View on map
        </a>
      </div>

      {/* Easy Access */}
      <div className="animate-fade-in-up delay-400 bg-[#F4FAF3] rounded-3xl p-7 shadow-[0_8px_30px_rgba(46,125,50,0.08)] hover:shadow-[0_14px_44px_rgba(46,125,50,0.14)] transition-all duration-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm">
            <Car
              className="w-5 h-5 text-[#2E7D32]"
              strokeWidth={1.9}
            />
          </div>

          <h3 className="text-[#1B5E20] font-semibold text-lg">
            Easy Access
          </h3>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {easyAccessItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-gray-600 font-light text-[15px]"
            >
              <span className="w-5 h-5 rounded-full bg-[#2E7D32]/10 flex items-center justify-center flex-shrink-0">
                <Check
                  className="w-3 h-3 text-[#2E7D32]"
                  strokeWidth={3}
                />
              </span>

              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Need Help */}
      <div className="animate-fade-in-up delay-600 bg-[#F4FAF3] rounded-3xl p-7 shadow-[0_8px_30px_rgba(46,125,50,0.08)] hover:shadow-[0_14px_44px_rgba(46,125,50,0.14)] transition-all duration-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm">
            <Phone
              className="w-5 h-5 text-[#2E7D32]"
              strokeWidth={1.9}
            />
          </div>

          <h3 className="text-[#1B5E20] font-semibold text-lg">
            Need Help?
          </h3>
        </div>

        <a
          href="tel:+918686465007"
          className="text-[#1B5E20] font-medium text-xl hover:text-[#2E7D32] transition-colors duration-200 underline-offset-4 hover:underline"
        >
          86864 65007
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg hover:shadow-green-900/30 hover:scale-[1.02] transition-all duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2.5"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </div>

    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}
