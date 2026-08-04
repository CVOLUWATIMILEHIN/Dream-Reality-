import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, ShieldCheck, Compass, GraduationCap, Users, Camera, MapPin } from 'lucide-react';

import heroSection1 from './gallery_calabar_20260205_115959.jpg';
import heroSection2 from './gallery_calabar_20260205_112724.jpg';
import heroSection3 from './gallery_calabar_20260205_113039.jpg';
import heroSection4 from './gallery_calabar_20260205_114311.jpg';
import heroSection5 from './gallery_calabar_20260205_114701.jpg';

const MATTERS_SLIDES = [
  {
    image: heroSection1,
    location: "Lagos State, Nigeria",
    caption: "Secondary school students in uniform collaborating on class work"
  },
  {
    image: heroSection2,
    location: "Calabar, Cross River State",
    caption: "EPIPHANY Youth Assembly and leadership workshops"
  },
  {
    image: heroSection3,
    location: "Enugu State, Nigeria",
    caption: "Young girls reading together in mentoring circles"
  },
  {
    image: heroSection4,
    location: "Abuja FCT, Nigeria",
    caption: "Educational advocacy and textbook distribution drives"
  },
  {
    image: heroSection5,
    location: "Port Harcourt, Rivers State",
    caption: "Educational libraries and school book handovers"
  }
];

export default function AboutFocus() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MATTERS_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const focusAreas = [
    {
      title: 'Leadership Development',
      desc: 'Nurturing ethical guidance, moral orientation, and value systems in Nigerian teenagers to prepare them for global responsibility.',
      icon: Award,
      color: 'text-[#F57C00]',
      bg: 'bg-[#F57C00]/10',
      border: 'hover:border-[#F57C00]/30 hover:shadow-[#F57C00]/5'
    },
    {
      title: 'Education & Mentorship',
      desc: 'Providing qualitative books, academic scholarships, and linking young minds with supportive, experienced professional guides.',
      icon: BookOpen,
      color: 'text-[#0D47A1]',
      bg: 'bg-[#0D47A1]/10',
      border: 'hover:border-[#0D47A1]/30 hover:shadow-[#0D47A1]/5'
    },
    {
      title: 'Youth Empowerment',
      desc: 'Equipping grassroots adolescents with digital literacy, technical life skills, and active channels for community advocacy.',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'hover:border-emerald-200 hover:shadow-emerald-100/50'
    }
  ];

  const mattersCards = [
    {
      title: 'Lack of Quality Mentorship & Resources',
      desc: 'Across many communities, countless children and young people possess extraordinary potential but remain limited by circumstances beyond their control. Some lack access to quality mentorship. Some struggle under financial limitations. Others battle trauma, abuse, addiction or harmful social influences.',
      icon: Compass,
      theme: 'blue'
    },
    {
      title: 'Education Gaps in Practical Skills',
      desc: 'Many complete formal education without practical leadership abilities, entrepreneurial thinking, financial literacy or life skills necessary for adulthood. These realities continue to limit not only individual lives but also national development.',
      icon: GraduationCap,
      theme: 'orange'
    },
    {
      title: 'Additional Barriers for Girls',
      desc: 'Girls in particular often face additional barriers including harmful stereotypes, limited opportunities, low self-esteem, sexual exploitation and inadequate access to transformational leadership platforms specifically designed for them.',
      icon: ShieldCheck,
      theme: 'blue'
    },
    {
      title: 'Unprecedented Info, Limited Guidance',
      desc: 'Today\'s young people face unprecedented access to information, yet many lack wisdom. They possess remarkable potential, yet many struggle with direction. They have dreams but no opportunities, or opportunities but no guiding values.',
      icon: Users,
      theme: 'orange'
    }
  ];

  return (
    <section className="py-[140px] xl:py-[180px] bg-white relative overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D47A1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F57C00]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 space-y-36">
        
        {/* Focus Areas Subsection */}
        <div className="space-y-16">
          <div className="max-w-4xl text-left space-y-4">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
              Core Interventions
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-none">
              Strategic Focus Areas
            </h2>
            <p className="text-slate-500 text-base sm:text-lg lg:text-xl max-w-3xl font-sans font-light leading-relaxed">
              We focus our structural initiatives where they yield the maximum long-term benefit for grassroots children and adolescents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
            {focusAreas.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className={`bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[32px] transition-all duration-300 flex flex-col justify-between ${card.border} group`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.08)' }}
                >
                  <div className="space-y-5">
                    <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-poppins font-extrabold text-slate-800 text-lg sm:text-xl leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Our Work Matters Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-stretch w-full">
          
          {/* Left Column: Emotionally compelling Hero Slideshow - Exact 45% Width */}
          <motion.div 
            className="w-full lg:w-[45%] shrink-0 order-last lg:order-first relative flex flex-col justify-between min-h-[450px] lg:min-h-[550px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full w-full flex flex-col pb-12">
              {/* Slideshow frame */}
              <div className="relative flex-grow w-full rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800/10 shadow-2xl flex flex-col justify-between p-8 select-none group min-h-[350px]">
                
                {/* Image Cross-fade */}
                <div className="absolute inset-0 z-0">
                  {MATTERS_SLIDES.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={slide.caption}
                      referrerPolicy="no-referrer"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[800ms] ease-in-out will-change-transform ${
                        index === currentSlide 
                          ? 'opacity-50 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/75 pointer-events-none z-10" />
                </div>

                {/* Top indicator row */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold text-slate-200 uppercase tracking-widest">
                    <Camera className="w-3.5 h-3.5 text-[#F57C00]" />
                    <span>Field Program View</span>
                  </div>
                  
                  {/* Miniature dot navigation */}
                  <div className="flex items-center gap-1.5">
                    {MATTERS_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === idx ? 'bg-[#F57C00] scale-125 shadow-[0_0_8px_#F57C00]' : 'bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Details overlays */}
                <div className="relative z-10 mt-auto text-left space-y-2 pb-24">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs uppercase tracking-wider font-extrabold">
                        <MapPin className="w-4 h-4 text-[#F57C00]" />
                        <span>{MATTERS_SLIDES[currentSlide].location}</span>
                      </div>
                      
                      <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans font-light">
                        {MATTERS_SLIDES[currentSlide].caption}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Floating quote card */}
              <div className="absolute -bottom-2 sm:-bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800/60 p-6 sm:p-7 rounded-[24px] text-white z-20 shadow-xl text-left">
                <p className="text-sm italic leading-relaxed text-slate-200">
                  "When we give children libraries, mentors, and structure, we are not just helping individuals; we are securing the future of Nigerian society."
                </p>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F57C00] font-bold block mt-3">
                  — DRYCI Community Volunteer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Why Our Work Matters content blocks - Exact 55% Width */}
          <div className="w-full lg:w-[55%] flex-grow flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                The Nigerian Context
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-none">
                Why Our Work Matters
              </h2>
              <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed font-sans font-light max-w-2xl">
                These realities require more than conventional education. At DRYCI, we seek to bridge this gap by raising children and young people who are intellectually equipped, emotionally resilient, morally grounded, spiritually conscious and socially responsible.
              </p>
            </div>

            {/* Elegant Content Blocks */}
            <div className="space-y-6 w-full">
              {mattersCards.map((card, idx) => {
                const Icon = card.icon;
                const isBlue = card.theme === 'blue';
                return (
                  <motion.div
                    key={card.title}
                    className={`p-6 sm:p-7 rounded-2xl border transition-all duration-500 flex items-start gap-5 text-left group cursor-pointer ${
                      isBlue 
                        ? 'bg-slate-50/50 hover:bg-white border-slate-100 hover:border-l-4 hover:border-l-[#0D47A1] hover:border-r-[#0D47A1]/10 hover:border-t-[#0D47A1]/10 hover:border-b-[#0D47A1]/10 hover:shadow-xl hover:shadow-[#0D47A1]/5' 
                        : 'bg-slate-50/50 hover:bg-white border-slate-100 hover:border-l-4 hover:border-l-[#F57C00] hover:border-r-[#F57C00]/10 hover:border-t-[#F57C00]/10 hover:border-b-[#F57C00]/10 hover:shadow-xl hover:shadow-[#F57C00]/5'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ x: 6, scale: 1.015 }}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      isBlue 
                        ? 'bg-[#0D47A1]/5 text-[#0D47A1] group-hover:bg-[#0D47A1]/10' 
                        : 'bg-[#F57C00]/5 text-[#F57C00] group-hover:bg-[#F57C00]/10'
                    }`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className={`font-poppins font-extrabold text-slate-800 text-base sm:text-lg leading-tight transition-colors duration-300 ${
                        isBlue ? 'group-hover:text-[#0D47A1]' : 'group-hover:text-[#F57C00]'
                      }`}>
                        {card.title}
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
