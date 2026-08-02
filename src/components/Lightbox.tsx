import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; label: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-xs font-medium tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-all duration-200 hover:scale-110"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] mx-16 md:mx-24 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.label}
          className="w-full h-full object-contain rounded-2xl shadow-2xl animate-fade-in"
          style={{ maxHeight: '80vh' }}
        />
        {current.label && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl px-6 py-4">
            <p className="text-white font-medium text-sm tracking-wide">{current.label}</p>
          </div>
        )}
      </div>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-all duration-200 hover:scale-110"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
