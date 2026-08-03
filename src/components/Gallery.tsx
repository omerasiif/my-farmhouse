const galleryImages = [
 "/images/od1.png",
  "/images/od2.png",
  "/images/od3.png",
];

export default function Gallery() {
  // Duplicate the list for seamless infinite scroll
  const track = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="bg-white py-24 overflow-hidden">
      {/* Header */}
      <div className="text-center px-6 mb-14">
        <span className="inline-block text-[#2E7D32] text-xs font-semibold tracking-widest uppercase mb-3">
          Gallery
        </span>
        <h2 className="text-[#1B5E20] font-bold tracking-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
        >
          A Glimpse of MY Farmhouse
        </h2>
        <div className="w-16 h-[2.5px] bg-[#2E7D32] mx-auto mt-5 rounded-full" />
      </div>

      {/* Scrolling track */}
      <div className="relative">
        <div className="gallery-track gap-6 px-3">
          {track.map((src, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-[320px] sm:w-[420px] md:w-[520px] h-[260px] sm:h-[340px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={src}
                alt={`Farmhouse view ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
