import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Waves, Target, Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

interface GalleryImage {
  src: string;
  label: string;
}

const roomImages: GalleryImage[] = [
  { src: "/images/room2new.jpeg", label: "Room 1" },
  { src: "/images/room2ou.jpeg", label: "Room 2" },
  { src: "/images/room1.png", label: "View All Rooms" },
];
const poolImages: GalleryImage[] = [
  { src: "/images/64df4da9-621d-4df4-852e-c60637c31810.png", label: "Swimming Pool 1" },
  { src: "/images/ae5e133d-f2a3-4c05-9233-1c5a3d95ae30.png", label: "Swimming Pool 2" },
  { src: "/images/c8a7a574-58c0-47b3-b329-b8f212cc564e.png", label: "Swimming Pool 3" },
];

const outdoorImages: GalleryImage[] = [
  { src: "/images/od1new.jpeg", label: "Outdoor Activity 1" },
  { src: "/images/od2new.jpeg", label: "Outdoor Activity 2" },
  { src: "/images/od3new.jpeg", label: "View All Activities" },
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

function ImageGrid({
  images,
  section,
  onImageClick,
}: {
  images: GalleryImage[];
  section: "rooms" | "pool" | "outdoor";
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => {
        const isMoreCard =
          (section === "rooms" && index === 2) ||
          (section === "outdoor" && index === 2);

        const link = section === "rooms" ? "/gallery/rooms" : "/gallery/outdoor";
        const remaining = section === "rooms" ? "+5" : "+6";

        const card = (
          <div className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />
            {isMoreCard ? (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white transition duration-300 group-hover:bg-black/40">
                <h3 className="text-4xl font-bold">{remaining}</h3>
              </div>
            ) : (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <h3 className="text-white text-xl font-semibold">{img.label}</h3>
              </div>
            )}
          </div>
        );

        if (isMoreCard) {
          return (
            <Link key={index} to={link} aria-label={section === 'rooms' ? 'View all rooms' : 'View all activities'}>
              {card}
            </Link>
          );
        }

        return (
          <div key={index} onClick={() => onImageClick(index)}>
            {card}
          </div>
        );
      })}
    </div>
  );
}

function MobileVerticalGallery({
  images,
  section,
  onImageClick,
}: {
  images: GalleryImage[];
  section: 'rooms' | 'pool' | 'outdoor';
  onImageClick: (index: number) => void;
}) {
  const linkForSection = section === 'rooms' ? '/gallery/rooms' : '/gallery/outdoor';

  return (
    <div className="md:hidden space-y-4">
      {images.map((img, index) => {
        const isMoreCard =
          (section === 'rooms' && index === 2) ||
          (section === 'outdoor' && index === 2);

        const remaining = section === 'rooms' ? '+5' : '+6';

        const card = (
          <div className="relative overflow-hidden rounded-3xl shadow-lg w-full">
            <img
              src={img.src}
              alt={img.label}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                display: 'block',
              }}
              draggable={false}
            />
            {isMoreCard ? (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white pointer-events-none">
                <div className="absolute inset-0 bg-black/30 rounded-3xl" />
                <div className="relative z-10 text-3xl font-bold text-white">{remaining}</div>
              </div>
            ) : (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-3xl">
                <h3 className="text-white text-sm font-semibold">{img.label}</h3>
              </div>
            )}
          </div>
        );

        if (isMoreCard) {
          return (
            <Link
              key={index}
              to={linkForSection}
              aria-label={`View all ${section}`}
              className="block w-full"
            >
              {card}
            </Link>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onImageClick(index)}
            aria-label={`Open ${img.label}`}
            className="w-full p-0 border-0 bg-transparent text-left"
          >
            {card}
          </button>
        );
      })}
    </div>
  );
}

function WaveDivider() {
  return (
    <div className="relative -mt-1">
      <svg className="block w-full h-[60px]" viewBox="0 24 150 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-10 50 Q 37.5 20 75 50 T 160 50 V90 H-10 Z" fill="#F4FAF3" />
      </svg>
    </div>
  );
}

function WaveDividerUp() {
  return (
    <div className="relative">
      <svg className="block w-full h-[60px]" viewBox="0 24 150 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-10 50 Q 37.5 20 75 50 T 160 50 V0 H-10 Z" fill="#F4FAF3" />
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar alwaysSolid />

      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/1000052436.jpg')" }} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/40 via-transparent to-black/40" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="animate-fade-in delay-200 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Photo Gallery
          </div>
          <h1 className="animate-slide-up delay-400 text-white font-extrabold leading-[1.1] tracking-tight drop-shadow-xl" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}>
            Explore Our Farmhouse
          </h1>
          <p className="animate-fade-in delay-600 text-white/85 font-light leading-relaxed max-w-xl mx-auto mt-5" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)' }}>
            Discover every corner of our luxurious farmhouse, designed for relaxation, comfort and unforgettable memories.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className="bg-[#F4FAF3] pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Home} title="Luxury Rooms" description="Our spacious and beautifully designed rooms provide the perfect place to relax with your family and friends." />
          <div className="hidden md:block">
            <ImageGrid images={roomImages} section="rooms" onImageClick={(i) => openLightbox(roomImages, i)} />
          </div>
          <div className="md:hidden">
            <MobileVerticalGallery images={roomImages} section="rooms" onImageClick={(i) => openLightbox(roomImages, i)} />
          </div>
        </div>
      </section>

      <WaveDividerUp />

      <section className="bg-white pt-8 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Waves} title="Swimming Pools" description="Enjoy refreshing moments in our clean and spacious swimming pools designed for everyone." />
          <div className="hidden md:block">
            <ImageGrid images={poolImages} section="pool" onImageClick={(i) => openLightbox(poolImages, i)} />
          </div>
          <div className="md:hidden">
            <MobileVerticalGallery images={poolImages} section="pool" onImageClick={(i) => openLightbox(poolImages, i)} />
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="bg-[#F4FAF3] pt-8 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Target} title="Outdoor Activities" description="Spend quality time with your family and friends while enjoying our outdoor recreational facilities." />
          <div className="hidden md:block">
            <ImageGrid images={outdoorImages} section="outdoor" onImageClick={(i) => openLightbox(outdoorImages, i)} />
          </div>
          <div className="md:hidden">
            <MobileVerticalGallery images={outdoorImages} section="outdoor" onImageClick={(i) => openLightbox(outdoorImages, i)} />
          </div>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/1000052433.jpg')" }} />
        <div className="absolute inset-0 bg-[#1B5E20]/85" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="animate-fade-in-up text-white font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)' }}>
            Ready for Your Perfect Getaway?
          </h2>
          <p className="text-white/75 font-light leading-relaxed mb-9" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
            Book your stay today and create unforgettable memories with your loved ones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/918686465007" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition duration-300 inline-flex items-center gap-2">
              Book Now
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="tel:+918686465007" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:border-white/60 transition duration-300 inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {lightbox && (
        <Lightbox images={lightbox.images} currentIndex={lightbox.index} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}
    </div>
  );
}
