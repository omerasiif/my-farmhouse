import { Waves, PartyPopper, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Relax and enjoy our clean swimming pool.',
    target: '/gallery#pool',
  },
  {
    icon: PartyPopper,
    title: 'Perfect for Events',
    description: 'Ideal for birthdays, family gatherings, and celebrations.',
    target: '/gallery#rooms',
  },
  {
    icon: Trees,
    title: 'Peaceful Nature',
    description: "Escape the city's noise and reconnect with nature.",
    target: '/gallery#outdoor',
  },
];

export default function Features() {
  return (
    <section id="amenities" className="bg-[#F4FAF3] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#2E7D32] text-xs font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-[#1B5E20] font-bold tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
          >
            Everything You Need for a Perfect Getaway
          </h2>
          <div className="w-16 h-[2.5px] bg-[#2E7D32] mx-auto mt-5 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                to={feature.target}
                aria-label={`Go to ${feature.title} in gallery`}
                className="block"
              >
                <div
                  className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(46,125,50,0.06)] hover:shadow-[0_20px_50px_rgba(46,125,50,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F4FAF3] group-hover:bg-[#2E7D32] flex items-center justify-center mb-6 transition-all duration-500">
                    <Icon className="w-7 h-7 text-[#2E7D32] group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[#1B5E20] text-xl font-semibold mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
