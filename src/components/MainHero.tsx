import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  BookOpen, 
  Check, 
  GraduationCap, 
  Handshake 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import {
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  heroSlide5
} from '../data/mediaAssets';

const HERO_SLIDES = [
  {
    image: heroSlide1,
    region: "Calabar, Nigeria",
    focus: "Youth & Children Empowerment Outreach",
    subtitle: "Where Dreams Come True",
    titleFirst: "Transforming Dreams",
    titleHighlight: "Into Reality",
    description: "Raising a generation of purpose-driven, morally grounded, and academically equipped leaders through our Calabar empowerment drives."
  },
  {
    image: heroSlide2,
    region: "Calabar, Nigeria",
    focus: "Educational Materials & Support Drive",
    subtitle: "Education & Sponsorship",
    titleFirst: "The Calabar",
    titleHighlight: "Scholars Drive",
    description: "Providing school bags, notebooks, and writing materials to vulnerable children to make education accessible and inspiring."
  },
  {
    image: heroSlide3,
    region: "Calabar, Nigeria",
    focus: "Mentorship & Moral Foundation Workshops",
    subtitle: "Character & Guidance",
    titleFirst: "Awakening Purpose",
    titleHighlight: "& Leadership",
    description: "Nurturing curiosity, confidence, and moral foundation in young scholars through interactive mentorship sessions."
  },
  {
    image: heroSlide4,
    region: "Calabar, Nigeria",
    focus: "Scholarship & Academic Excellence Launch",
    subtitle: "Empowerment & Growth",
    titleFirst: "Academic Support",
    titleHighlight: "Launches",
    description: "Coordinating resources, books, bags, and writing materials to support underserved public schools."
  },
  {
    image: heroSlide5,
    region: "Calabar, Nigeria",
    focus: "Community Outreach & Youth Development",
    subtitle: "Opportunity & Hope",
    titleFirst: "Giving Every Child",
    titleHighlight: "A Voice",
    description: "Removing financial and educational barriers to help bright young minds reach their full scholarly potential."
  }
];

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function MainHero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Infinite cyclic timer every 8 seconds, with automatic pause if preferred
  useEffect(() => {
    if (prefersReducedMotion) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [prefersReducedMotion]);

  const handleCTA = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full overflow-hidden flex flex-col justify-between bg-slate-950 text-white"
    >
      {/* 1. BACKGROUND GRADIENT + IMAGES WITH GPU-ACCELERATED TRANSITIONS */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.focus}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = heroSlide1;
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out will-change-transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          />
        ))}
        
        {/* Modern grid & vignette overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 20%, #020617 85%)' }} />
      </div>

      {/* 2. THE REQUIRED DESIGN OVERLAY: rgba(0,0,0,0.45) & Left-heavy shading to guarantee legibility */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} 
      />
      {/* Additional subtle left-aligned dark shading gradient specifically for white text readability on bright images */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/25 to-transparent z-10 pointer-events-none" />

      {/* Subtle organic background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0D47A1]/10 rounded-full blur-[140px] z-10 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F57C00]/10 rounded-full blur-[140px] z-10 pointer-events-none animate-pulse" />

      {/* 3. HERO CONTENT CONTAINER (EXPANSIVE, PREMIUM FULL-WIDTH DESIGN) */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-20 flex flex-col justify-between h-full pt-28 pb-8 lg:pt-36 lg:pb-12 flex-grow gap-12 lg:gap-16">
        
        {/* Middle Content Area: Left-aligned, expanded horizontally to prevent vertical "string" stacking */}
        <div className="w-full lg:w-[95%] xl:w-[95%] max-w-none space-y-8 text-left my-auto">
          
          {/* Epic Main Headline with high visual scale, allowed to expand horizontally */}
          <div className="min-h-[290px] sm:min-h-[250px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold px-3 py-1.5 bg-[#F57C00]/10 border border-[#F57C00]/20 rounded-full inline-block">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-extrabold tracking-tighter leading-[1.05] sm:leading-[0.95] text-white block">
                  {HERO_SLIDES[currentSlide].titleFirst}{' '}
                  <span className="text-[#F57C00] block sm:inline">{HERO_SLIDES[currentSlide].titleHighlight}</span>
                </h1>

                {/* Description paragraph matching 18-22px on comfortable line-height, with expanded maximum width */}
                <p className="text-slate-100 text-base sm:text-lg lg:text-[21px] leading-relaxed font-sans max-w-[950px] font-light">
                  {HERO_SLIDES[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Substantial buttons styled with min-height 60px in one row with generous gap */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 pt-2"
          >
            <button
              onClick={() => handleCTA('programs')}
              className="h-[60px] px-10 bg-[#0D47A1] hover:bg-[#0A3780] text-white font-extrabold rounded-full shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer text-base uppercase tracking-wider"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#F57C00]" />
            </button>

            <button
              onClick={() => handleCTA('volunteer')}
              className="h-[60px] px-10 border-2 border-white/30 hover:border-white/60 text-white font-extrabold rounded-full backdrop-blur-sm bg-black/20 hover:bg-white hover:text-[#0D47A1] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer text-base uppercase tracking-wider"
            >
              <Heart className="w-5 h-5 text-[#F57C00] fill-current animate-pulse" />
              <span>Become a Volunteer</span>
            </button>
          </motion.div>

          {/* Underlined Partner link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="pt-2 text-left"
          >
            <button
              onClick={() => handleCTA('volunteer')}
              className="text-slate-300 hover:text-white font-bold text-sm tracking-widest uppercase inline-flex items-center gap-2 group cursor-pointer transition-colors"
            >
              <span>Partner With DRYCI</span>
              <span className="group-hover:translate-x-2 transition-transform text-[#F57C00] font-black">&rarr;</span>
            </button>
          </motion.div>
        </div>

        {/* 4. STATISTICS - SEPARATE FULL-WIDTH BOTTOM STRIP WITH GLASSMORPHISM AND HOVER ELEVATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full pt-8 border-t border-white/10 mt-auto"
        >
          {/* Stat Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl flex items-center gap-5 hover:bg-white/15 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 text-white text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 shadow-inner">
              <GraduationCap className="w-8 h-8 text-[#F57C00]" />
            </div>
            <div className="space-y-1">
              <div className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-none">
                10,000+
              </div>
              <div className="font-bold text-white text-sm xl:text-base leading-tight">
                Children Impacted
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Empowered through education, mentorship and life skills.
              </p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl flex items-center gap-5 hover:bg-white/15 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 text-white text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 shadow-inner">
              <Users className="w-8 h-8 text-[#F57C00]" />
            </div>
            <div className="space-y-1">
              <div className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-none">
                200+
              </div>
              <div className="font-bold text-white text-sm xl:text-base leading-tight">
                Communities Reached
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Creating lasting change in remote regions across Nigeria.
              </p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl flex items-center gap-5 hover:bg-white/15 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 text-white text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 shadow-inner">
              <BookOpen className="w-8 h-8 text-[#F57C00]" />
            </div>
            <div className="space-y-1">
              <div className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-none">
                25+
              </div>
              <div className="font-bold text-white text-sm xl:text-base leading-tight">
                Programs Delivered
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Transformational workshops and boot camps launched.
              </p>
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 shadow-2xl flex items-center gap-5 hover:bg-white/15 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 text-white text-left">
            <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 shadow-inner">
              <Handshake className="w-8 h-8 text-[#F57C00]" />
            </div>
            <div className="space-y-1">
              <div className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-none">
                100+
              </div>
              <div className="font-bold text-white text-sm xl:text-base leading-tight">
                Partners & Supporters
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                Working together side-by-side to build a brighter future.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. BOTTOM SCROLL INDICATOR */}
      <div className="relative bottom-4 left-1/2 -translate-x-1/2 z-25 hidden lg:flex flex-col items-center gap-1 select-none text-center">
        <button
          onClick={() => handleCTA('about')}
          className="flex flex-col items-center group cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-white uppercase transition-colors">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-4.5 h-7.5 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 mt-0.5 group-hover:border-white transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-[#F57C00] rounded-full" />
          </motion.div>
        </button>
      </div>

      {/* Dynamic Slide Location Attribution Badge on the bottom right */}
      <div className="absolute bottom-36 right-12 z-20 hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full flex items-center gap-2 text-[11px] text-white/90 font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>📍 {HERO_SLIDES[currentSlide].region}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Navigation Dots on the right-hand side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group flex items-center gap-3 text-right cursor-pointer"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/0 group-hover:text-white/80 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 select-none pointer-events-none">
              {HERO_SLIDES[idx].region.split(',')[0]}
            </span>
            <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-[#F57C00] scale-125 shadow-[0_0_8px_#F57C00]' : 'bg-white/30 hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}
