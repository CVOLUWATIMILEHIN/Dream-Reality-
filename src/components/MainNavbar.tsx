import { useState, useEffect } from 'react';
import { Heart, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import DryciLogo from './DryciLogo';

interface NavbarProps {
  onToggleGuide: () => void;
  showGuide: boolean;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function MainNavbar({ onToggleGuide, showGuide, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On pages other than 'home', the navbar should always have the white scrolled styling for contrast
  const forceScrolledStyle = isScrolled || activeSection !== 'home' || showGuide;

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'EPIPHANY', id: 'epiphany' },
    { label: 'Programs', id: 'programs' },
    { label: 'Impact', id: 'impact' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Volunteer', id: 'volunteer' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          forceScrolledStyle
            ? 'bg-white/95 text-slate-800 shadow-md backdrop-blur border-b border-slate-150 py-3'
            : 'bg-transparent text-white py-5'
        }`}
      >
        <div className="w-full px-6 sm:px-[48px] lg:px-[80px] xl:px-[120px] flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 cursor-pointer text-left group"
          >
            <DryciLogo
              className="w-11 h-11"
              showText={true}
              textColor={forceScrolledStyle ? 'text-slate-800' : 'text-white'}
              subtextColor={forceScrolledStyle ? 'text-slate-400' : 'text-slate-300'}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 rounded-full transition-all relative cursor-pointer ${
                    isActive
                      ? forceScrolledStyle
                        ? 'text-[#0D47A1] bg-slate-100'
                        : 'text-white bg-white/10'
                      : forceScrolledStyle
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && !forceScrolledStyle && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Menu: Highlighted Donation CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavigate('volunteer')}
              className={`hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider rounded-full px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${
                forceScrolledStyle
                  ? 'bg-[#F57C00] text-white hover:bg-[#D86D00]'
                  : 'bg-white text-[#0D47A1] hover:bg-white/95'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current text-red-500 animate-pulse" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors cursor-pointer ${
                forceScrolledStyle ? 'hover:bg-slate-100 text-slate-800' : 'hover:bg-white/10 text-white'
              }`}
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] bg-white border-b border-slate-200 shadow-xl z-35 lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="p-6 space-y-6">
              <nav className="flex flex-col gap-2 font-poppins font-bold text-lg text-slate-800">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className="text-left py-2 border-b border-slate-50 hover:text-[#0D47A1] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                {/* Mobile Donate Button */}
                <button
                  onClick={() => handleNavigate('volunteer')}
                  className="w-full bg-[#F57C00] hover:bg-[#D86D00] text-white font-bold py-3.5 rounded-xl transition-all text-sm text-center flex items-center justify-center gap-2 shadow"
                >
                  <Heart className="w-4 h-4 fill-current text-white animate-pulse" />
                  <span>Donate to DRYCI</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
