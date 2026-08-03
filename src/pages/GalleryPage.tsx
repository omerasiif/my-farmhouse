import { useState, useRef, useEffect } from 'react';
import { Home, Waves, Target, Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

interface GalleryImage {
  src: string;
  label: string;
}

const roomImages: GalleryImage[] = [
  { src: "/images/room1.png", label: "Room 1" },
  { src: "/images/room2.png", label: "Room 2" },
  { src: "/images/room3.png", label: "Room 3" },
];

const poolImages: GalleryImage[] = [
  { src: "/images/64df4da9-621d-4df4-852e-c60637c31810.png", label: "Swimming Pool 1" },
  { src: "/images/ae5e133d-f2a3-4c05-9233-1c5a3d95ae30.png", label: "Swimming Pool 2" },
  { src: "/images/c8a7a574-58c0-47b3-b329-b8f212cc564e.png", label: "Swimming Pool 3" },
];

const outdoorImages: GalleryImage[] = [
  { src: "/images/od1.png", label: "Outdoor Activity 1" },
  { src: "/images/od2.png", label: "Outdoor Activity 2" },
  { src: "/images/od3.png", label: "Outdoor Activity 3" },
];
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function SectionHeader({ icon: Icon, title, description }: { icon: typeof Home; title: string; description: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="inline-flex w-14 h-14 rounded-2xl bg-[#F4FAF3] items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-[#2E7D32]" strokeWidth={1.8} />
      </div>
      <h2 className="text-[#1B5E20] font-bold tracking-tight mb-3"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
      >
        {title}
      </h2>
      <p className="text-gray-500 font-light leading-relaxed text-[15px]">{description}</p>
      <div className="w-16 h-[2.5px] bg-[#2E7D32] mx-auto mt-5 rounded-full" />
    </div>
  );
}

function ImageGrid({ images, onImageClick }: { images: GalleryImage[]; onImageClick: (i: number) => void }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {images.map((img, i) => (
        <button
          key={img.src + i}
          onClick={() => onImageClick(i)}
          className={`group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(46,125,50,0.08)] hover:shadow-[0_20px_50px_rgba(46,125,50,0.18)] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer text-left ${
            i === 0 && images.length === 4 ? 'sm:col-span-2 sm:row-span-2' : ''
          }`}
          style={{
            aspectRatio: images.length === 4 && i === 0 ? '16 / 9' : '4 / 3',
            animationDelay: `${i * 0.1}s`,
          }}
        >
          <img
            src={img.src}
            alt={img.label}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white font-medium text-sm tracking-wide">{img.label}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function WaveDivider() {
  return (
    <div className="relative -mt-1">
      <svg
        className="block w-full h-[60px]"
        viewBox="0 24 150 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-10 50 Q 37.5 20 75 50 T 160 50 V90 H-10 Z"
          fill="#F4FAF3"
        />
      </svg>
    </div>
  );
}

function WaveDividerUp() {
  return (
    <div className="relative">
      <svg
        className="block w-full h-[60px]"
        viewBox="0 24 150 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-10 50 Q 37.5 20 75 50 T 160 50 V0 H-10 Z"
          fill="#F4FAF3"
        />
      </svg>
    </div>
  );
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (images: GalleryImage[], index: number) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null));
  const nextImage = () =>
    setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null));

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysSolid />

      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/1000052436.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/40 via-transparent to-black/40" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="animate-fade-in delay-200 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Photo Gallery
          </div>
          <h1 className="animate-slide-up delay-400 text-white font-extrabold leading-[1.1] tracking-tight drop-shadow-xl"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
          >
            Explore Our Farmhouse
          </h1>
          <p className="animate-fade-in delay-600 text-white/85 font-light leading-relaxed max-w-xl mx-auto mt-5"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)' }}
          >
            Discover every corner of our luxurious farmhouse, designed for relaxation, comfort and unforgettable memories.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* Rooms Section */}
      <section className="bg-[#F4FAF3] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Home}
            title="Luxury Rooms"
            description="Our spacious and beautifully designed rooms provide the perfect place to relax with your family and friends."
          />
          <ImageGrid images={roomImages} onImageClick={(i) => openLightbox(roomImages, i)} />
        </div>
      </section>

      <WaveDividerUp />

      {/* Swimming Pools Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Waves}
            title="Swimming Pools"
            description="Enjoy refreshing moments in our clean and spacious swimming pools designed for everyone."
          />
          <ImageGrid images={poolImages} onImageClick={(i) => openLightbox(poolImages, i)} />
        </div>
      </section>

      <WaveDivider />

      {/* Outdoor Activities Section */}
      <section className="bg-[#F4FAF3] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Target}
            title="Outdoor Activities"
            description="Spend quality time with your family and friends while enjoying our outdoor recreational facilities."
          />
          <ImageGrid images={outdoorImages} onImageClick={(i) => openLightbox(outdoorImages, i)} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/1000052433.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1B5E20]/85" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="animate-fade-in-up text-white font-bold tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)' }}
          >
            Ready for Your Perfect Getaway?
          </h2>
          <p className="text-white/75 font-light leading-relaxed mb-9"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}
          >
            Book your stay today and create unforgettable memories with your loved ones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918686465007"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-3.5 rounded-full shadow-xl hover:shadow-green-900/50 transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-flex items-center gap-2"
            >
              Book Now
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+918686465007"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 text-sm tracking-wide inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
