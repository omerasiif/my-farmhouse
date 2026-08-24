import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Waves, Target, Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface GalleryVideo {
  src: string;
  label: string;
  more?: boolean;
}

const roomVideos: GalleryVideo[] = [
  {
    src: "https://lh7wdv9o8ld31a7a.public.blob.vercel-storage.com/my-room1.mp4",
    label: "Room 1",
  },
  {
    src: "https://lh7wdv9o8ld31a7a.public.blob.vercel-storage.com/my-room2.mp4",
    label: "Room 2",
  },
  {
    src: "https://lh7wdv9o8ld31a7a.public.blob.vercel-storage.com/my-room2.2.mp4",
    label: "View All Rooms",
    more: true,
  },
];

const poolVideos: GalleryVideo[] = [
  {
    src: "https://lh7wdv9o8ld31a7a.public.blob.vercel-storage.com/my-swim.mp4",
    label: "Swimming Pool",
  },
];

const outdoorImages = [
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

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Home;
  title: string;
  description: string;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="inline-flex w-14 h-14 rounded-2xl bg-[#F4FAF3] items-center justify-center mb-5">
        <Icon
          className="w-7 h-7 text-[#2E7D32]"
          strokeWidth={1.8}
        />
      </div>

      <h2
        className="text-[#1B5E20] font-bold tracking-tight mb-3"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
      >
        {title}
      </h2>

      <p className="text-gray-500 font-light leading-relaxed text-[15px]">
        {description}
      </p>

      <div className="w-16 h-[2.5px] bg-[#2E7D32] mx-auto mt-5 rounded-full" />
    </div>
  );
}

/* =========================
   VIDEO GALLERY - DESKTOP
========================= */

function VideoGrid({
  videos,
  section,
}: {
  videos: GalleryVideo[];
  section: "rooms" | "pool";
}) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video, index) => (
        <div
          key={video.src}
          className="group relative overflow-hidden rounded-3xl shadow-lg"
        >
          <video
            src={video.src}
            controls
            playsInline
            preload="metadata"
            className="w-full h-72 object-cover bg-black"
          />

          {!video.more && (
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none bg-gradient-to-t from-black/70 to-transparent p-5">
              <h3 className="text-white text-xl font-semibold">
                {video.label}
              </h3>
            </div>
          )}

          {video.more && (
            <Link
              to="/gallery/rooms"
              aria-label="View all rooms"
              className="absolute right-4 top-4 z-20 grid w-12 h-12 place-items-center rounded-full bg-white/90 hover:bg-white text-black text-4xl font-light shadow-xl transition duration-300 hover:scale-105"
            >
              +
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================
   VIDEO GALLERY - MOBILE
========================= */

function MobileVideoGallery({
  videos,
}: {
  videos: GalleryVideo[];
}) {
  return (
    <div className="md:hidden space-y-4">
      {videos.map((video) => (
        <div
          key={video.src}
          className="relative overflow-hidden rounded-3xl shadow-lg w-full"
        >
          <video
            src={video.src}
            controls
            playsInline
            preload="metadata"
            className="block w-full h-[250px] object-cover bg-black"
          />

          {!video.more && (
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white text-sm font-semibold">
                {video.label}
              </h3>
            </div>
          )}

          {video.more && (
            <Link
              to="/gallery/rooms"
              aria-label="View all rooms"
              className="absolute right-4 top-4 z-20 grid w-11 h-11 place-items-center rounded-full bg-white/90 hover:bg-white text-black text-3xl font-light shadow-xl transition duration-300"
            >
              +
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================
   IMAGE GALLERY
========================= */

function ImageGrid({
  images,
  section,
}: {
  images: { src: string; label: string }[];
  section: "outdoor";
}) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => {
        const isMoreCard = index === 2;
        const remaining = "+6";

        const card = (
          <div className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            {isMoreCard ? (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white transition duration-300 group-hover:bg-black/40">
                <h3 className="text-4xl font-bold">
                  {remaining}
                </h3>
              </div>
            ) : (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <h3 className="text-white text-xl font-semibold">
                  {img.label}
                </h3>
              </div>
            )}
          </div>
        );

        if (isMoreCard) {
          return (
            <Link
              key={index}
              to="/gallery/outdoor"
              aria-label="View all activities"
            >
              {card}
            </Link>
          );
        }

        return <div key={index}>{card}</div>;
      })}
    </div>
  );
}

function MobileImageGallery({
  images,
}: {
  images: { src: string; label: string }[];
}) {
  return (
    <div className="md:hidden space-y-4">
      {images.map((img, index) => {
        const isMoreCard = index === 2;

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
                <div className="relative z-10 text-3xl font-bold text-white">
                  +6
                </div>
              </div>
            ) : (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-3xl">
                <h3 className="text-white text-sm font-semibold">
                  {img.label}
                </h3>
              </div>
            )}
          </div>
        );

        if (isMoreCard) {
          return (
            <Link
              key={index}
              to="/gallery/outdoor"
              aria-label="View all activities"
              className="block w-full"
            >
              {card}
            </Link>
          );
        }

        return (
          <div key={index}>
            {card}
          </div>
        );
      })}
    </div>
  );
}

/* =========================
   WAVE DIVIDERS
========================= */

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

/* =========================
   MAIN GALLERY PAGE
========================= */

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar alwaysSolid />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/1000052436.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1B5E20]/40 via-transparent to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="animate-fade-in delay-200 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Photo Gallery
          </div>

          <h1
            className="animate-slide-up delay-400 text-white font-extrabold leading-[1.1] tracking-tight drop-shadow-xl"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            }}
          >
            Explore Our Farmhouse
          </h1>

          <p
            className="animate-fade-in delay-600 text-white/85 font-light leading-relaxed max-w-xl mx-auto mt-5"
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            }}
          >
            Discover every corner of our luxurious farmhouse,
            designed for relaxation, comfort and unforgettable memories.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* =========================
          ROOMS
      ========================= */}

      <section className="bg-[#F4FAF3] pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Home}
            title="Luxury Rooms"
            description="Our spacious and beautifully designed rooms provide the perfect place to relax with your family and friends."
          />

          {/* Desktop */}
          <div className="hidden md:block">
            <VideoGrid
              videos={roomVideos}
              section="rooms"
            />
          </div>

          {/* Mobile */}
          <MobileVideoGallery videos={roomVideos} />
        </div>
      </section>

      <WaveDividerUp />

      {/* =========================
          POOLS
      ========================= */}

      <section className="bg-white pt-8 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Waves}
            title="Swimming Pools"
            description="Enjoy refreshing moments in our clean and spacious swimming pools designed for everyone."
          />

          {/* Desktop */}
          <div className="hidden md:block">
            <VideoGrid
              videos={poolVideos}
              section="pool"
            />
          </div>

          {/* Mobile */}
          <MobileVideoGallery videos={poolVideos} />
        </div>
      </section>

      <WaveDivider />

      {/* =========================
          OUTDOOR ACTIVITIES
      ========================= */}

      <section className="bg-[#F4FAF3] pt-8 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Target}
            title="Outdoor Activities"
            description="Spend quality time with your family and friends while enjoying our outdoor recreational facilities."
          />

          {/* Desktop */}
          <div className="hidden md:block">
            <ImageGrid
              images={outdoorImages}
              section="outdoor"
            />
          </div>

          {/* Mobile */}
          <MobileImageGallery
            images={outdoorImages}
          />
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/1000052433.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#1B5E20]/85" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2
            className="animate-fade-in-up text-white font-bold tracking-tight mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)',
            }}
          >
            Ready for Your Perfect Getaway?
          </h2>

          <p
            className="text-white/75 font-light leading-relaxed mb-9"
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            }}
          >
            Book your stay today and create unforgettable memories with your loved ones.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918686465007"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition duration-300 inline-flex items-center gap-2"
            >
              Book Now
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+918686465007"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 hover:border-white/60 transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
