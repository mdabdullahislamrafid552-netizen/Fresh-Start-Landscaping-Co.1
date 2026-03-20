import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      isTransparent 
        ? 'bg-transparent py-8'
        : 'bg-white/95 backdrop-blur-xl border-b border-black/5 py-4' 
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://i.imgur.com/NMgV0ZT.png" 
                alt="Fresh Start Landscaping Co." 
                className={cn(
                  "w-auto transition-all duration-700",
                  isScrolled ? "h-10" : "h-14 drop-shadow-2xl"
                )} 
                referrerPolicy="no-referrer" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative group',
                  isTransparent 
                    ? (location.pathname === link.path ? 'text-white' : 'text-white/70 hover:text-white')
                    : (location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-900')
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-full h-[1px] transform origin-left transition-transform duration-300",
                  location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  isTransparent ? "bg-white" : "bg-[var(--color-primary)]"
                )}></span>
              </Link>
            ))}
            <Link
              to="/free-quote"
              className={cn(
                "px-8 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-500 border",
                isTransparent
                  ? "bg-white border-white text-gray-900 hover:bg-transparent hover:text-white"
                  : "bg-[var(--color-primary)] border-[var(--color-primary)] text-white hover:bg-transparent hover:text-[var(--color-primary)]"
              )}
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "focus:outline-none transition-colors",
                isTransparent ? "text-white drop-shadow-md" : "text-gray-900"
              )}
            >
              {isOpen ? <X className="h-8 w-8 stroke-[1.5]" /> : <Menu className="h-8 w-8 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 h-screen border-t border-gray-100">
          <div className="px-6 pt-12 pb-6 space-y-8 flex flex-col items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block text-2xl font-serif tracking-wide transition-colors',
                  location.pathname === link.path
                    ? 'text-[var(--color-primary)] italic'
                    : 'text-gray-900 hover:text-[var(--color-primary)]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/free-quote"
              onClick={() => setIsOpen(false)}
              className="mt-8 border border-[var(--color-primary)] text-[var(--color-primary)] px-12 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}