import { useState, useRef, useEffect } from 'react';
import { Menu, Heart, Info, Monitor, MousePointer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NavbarSimulator() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Monitor scroll inside the simulator box
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrolled = scrollContainerRef.current.scrollTop > 40;
      setIsScrolled(scrolled);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const menuItems = ['Home', 'About', 'Programs', 'Impact', 'EPIPHANY', 'Volunteer', 'Partner', 'Contact'];

  return (
    <div className="space-y-8" id="navbar-simulator-section">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
            5. Sticky Navbar & Header System
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            A dynamic, scroll-responsive navigation bar. Transparent over heroes for immersive imagery, merging smoothly into solid white with a soft depth shadow on scroll.
          </p>
        </div>
      </div>

      {/* Browser Mockup Wrapper */}
      <div className="bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-800 relative overflow-hidden">
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/70 block" />
          </div>
          <div className="bg-slate-800/80 rounded-lg text-[10px] font-mono text-slate-400 px-4 py-1 flex items-center gap-2 border border-slate-700/30 max-w-xs sm:max-w-md w-full justify-center">
            <span className="text-emerald-500">https://</span>
            <span className="font-semibold text-slate-200">dryci-youth.org</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono hidden sm:flex">
            <Monitor className="w-4 h-4" />
            <span>Desktop Preview</span>
          </div>
        </div>

        {/* Scroll Instruction Bar */}
        <div className="bg-[#0D47A1]/10 text-[#0D47A1] p-3 text-xs font-medium flex items-center justify-center gap-2 border-b border-slate-800/20">
          <MousePointer className="w-4 h-4 animate-bounce" />
          <span>Interactive Container: Scroll downwards below to test transparent-to-white header morphing.</span>
        </div>

        {/* Inner Scrollable Browser Frame */}
        <div
          ref={scrollContainerRef}
          className="h-[460px] overflow-y-auto relative scroll-smooth rounded-2xl bg-slate-950"
        >
          {/* SIMULATED NAVBAR - Fixed within scrollable box container */}
          <div
            className={`sticky top-0 left-0 right-0 z-30 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
              isScrolled
                ? 'bg-white text-slate-800 shadow-md border-b border-slate-100'
                : 'bg-transparent text-white'
            }`}
          >
            {/* Logo Left */}
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold ${
                isScrolled ? 'bg-[#0D47A1]' : 'bg-white/15 backdrop-blur border border-white/20'
              }`}>
                D
              </div>
              <span className={`font-poppins font-extrabold text-sm tracking-tight ${
                isScrolled ? 'text-[#0D47A1]' : 'text-white'
              }`}>
                DRYCI
              </span>
            </div>

            {/* Desktop Navigation links center */}
            <nav className="hidden xl:flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isScrolled
                        ? isActive
                          ? 'text-[#0D47A1] bg-slate-100'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        : isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item}</span>
                  </button>
                );
              })}
            </nav>

            {/* Donate highlighted Right */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('Donate')}
                className={`text-xs font-bold uppercase tracking-wider rounded-full px-5 py-2.5 transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md ${
                  isScrolled
                    ? 'bg-[#F57C00] text-white hover:bg-[#D86D00]'
                    : 'bg-white text-[#0D47A1] hover:bg-white/90 border border-transparent'
                }`}
              >
                <Heart className="w-3.5 h-3.5 fill-current animate-pulse text-red-500" />
                <span>Donate</span>
              </button>

              {/* Mobile trigger */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="xl:hidden p-2 rounded-lg hover:bg-white/10"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* SIMULATED CONTENT HERO HEADER */}
          <div className="relative h-[480px] flex items-center justify-center overflow-hidden">
            {/* Immersive abstract gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1]/40 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#020617_90%)]" />

            <div className="relative z-10 text-center px-6 max-w-2xl space-y-4">
              <span className="inline-block bg-[#F57C00] text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                Global Humanitarian Excellence
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Dreams To Reality Initiative
              </h1>
              <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                Empowering the youth and protecting children through robust leadership training, education pipelines, and community support networks.
              </p>
            </div>
          </div>

          {/* BELOW THE HERO CONTENT TO SHOW SCROLL CHANGE */}
          <div className="bg-white p-8 sm:p-12 space-y-6 text-slate-800">
            <h2 className="font-serif text-2xl font-bold text-[#0D47A1]">A Global Network For Social Hope</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We stand together with mothers, fathers, school coordinators, and young mentors to build scalable schools, clean water pipelines, and interactive digital labs. By blending qualitative technology with traditional resilience, DRYCI establishes a model of self-development that empowers youths from infancy to active university leadership.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="block font-poppins font-extrabold text-xl text-[#0D47A1]">94%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Direct Impact Ratio</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="block font-poppins font-extrabold text-xl text-[#F57C00]">12+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Active Countries</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="block font-poppins font-extrabold text-xl text-[#2E7D32]">15k+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Trained Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
