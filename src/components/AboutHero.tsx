import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroSection1 from './gallery_calabar_20260205_115959.jpg';

interface AboutHeroProps {
  onScrollToStory: () => void;
  onScrollToGovernance: () => void;
}

export default function AboutHero({ onScrollToStory, onScrollToGovernance }: AboutHeroProps) {
  return (
    <section className="relative py-[80px] sm:py-[100px] xl:py-[120px] bg-slate-950 overflow-hidden flex items-center justify-center min-h-[50vh] md:min-h-[60vh] w-full">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src={heroSection1} 
          alt="Nigeria Community & Leadership background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-102"
        />
        {/* Modern grid overlay matching Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/45 via-transparent to-[#F57C00]/20" />
        {/* Shading gradient for legibility */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center space-y-8 flex flex-col items-center">
        <motion.span 
          className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 bg-[#F57C00]/10 border border-[#F57C00]/20 rounded-full inline-block"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where dreams come true.
        </motion.span>
        
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Dreams to Reality Youth and Children Initiative (DRYCI)
        </motion.h1>

        <motion.p 
          className="text-slate-200 text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed max-w-[950px] mx-auto font-sans font-light opacity-95"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Raising a generation of purpose-driven, morally grounded, academically equipped, emotionally healthy and transformational young leaders across Nigeria.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button 
            onClick={onScrollToStory}
            className="h-[60px] px-10 bg-[#F57C00] hover:bg-[#E65100] text-white font-poppins font-extrabold text-sm sm:text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group cursor-pointer w-full sm:w-auto uppercase tracking-wider"
          >
            <span>Our Story</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
          <button 
            onClick={onScrollToGovernance}
            className="h-[60px] px-10 bg-white/10 hover:bg-white/15 text-white border-2 border-white/20 hover:border-white/40 font-poppins font-extrabold text-sm sm:text-base rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer w-full sm:w-auto uppercase tracking-wider"
          >
            Our Governance
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
