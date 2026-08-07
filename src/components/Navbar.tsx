import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
];

interface NavbarProps {
  alwaysSolid?: boolean;
}

export default function Navbar({ alwaysSolid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = alwaysSolid || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 navbar-enter transition-all duration-500 ease-in-out ${
        isSolid ? 'bg-[#1B5E20] shadow-2xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isSolid ? 'bg-white/20' : 'bg-white/15'
          }`}>
            <Leaf className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-[15px] font-semibold tracking-wide">MY Farmhouse</span>
            <span className="text-white/70 text-[10px] font-light tracking-widest uppercase">Escape the City</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => {
            const isActive =
              (to === '/' && location.pathname === '/') ||
              location.pathname === to ||
              (to === '/gallery' && location.pathname.startsWith('/gallery'));
            return (
              <Link
                key={label}
                to={to}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
          <a
            href="https://wa.me/918686465007"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-900/40"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#1B5E20]/98 backdrop-blur-sm`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-white/90 hover:text-white text-sm font-medium py-1 border-b border-white/10 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/918686465007"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
