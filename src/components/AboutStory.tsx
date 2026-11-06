import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, Heart, Sparkles, ShieldCheck, Award, Users } from 'lucide-react';
import AuthenticNigerianImage from './AuthenticNigerianImage';
import FounderProfile from './FounderProfile';

import {
  calabar2 as heroSection2,
  calabar3 as heroSection3,
  calabar4 as heroSection4,
  calabar5 as heroSection5,
} from '../data/mediaAssets';

const whoWeAreSlides = [
  {
    url: heroSection2,
    title: 'EPIPHANY Youth Assembly',
    location: 'Calabar, Cross River State',
    caption: 'EPIPHANY Youth Assembly and leadership workshops.'
  },
  {
    url: heroSection3,
    title: 'Mentoring Circles',
    location: 'Enugu State, Nigeria',
    caption: 'Young girls reading together in mentoring circles.'
  },
  {
    url: heroSection4,
    title: 'Educational Advocacy',
    location: 'Abuja FCT, Nigeria',
    caption: 'Educational advocacy and textbook distribution drives.'
  },
  {
    url: heroSection5,
    title: 'Resource Handover',
    location: 'Port Harcourt, Rivers State',
    caption: 'Educational libraries and school book handovers.'
  }
];

export default function AboutStory() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % whoWeAreSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const storyMilestones = [
    {
      year: 'March 2024',
      title: 'Official NGO Incorporation',
      subtitle: 'Dreams into Institution',
      desc: 'Although officially established and incorporated in March 2024, the vision that birthed Dreams to Reality Youth and Children Initiative had been expressed through years of consistent youth development, mentorship and educational interventions. The formal incorporation marked a significant step towards building a sustainable institution capable of expanding its impact across communities and generations.',
      icon: ShieldCheck,
      color: 'bg-[#0D47A1]'
    },
    {
      year: 'Milestone 1',
      title: 'Birthquake Conference',
      subtitle: 'Nsukka Landmark Event',
      desc: "One of DRYCI's earliest landmark initiatives was the Birthquake Conference, organised in collaboration with the Students' Union Government (SUG), University of Nigeria, Nsukka. The conference convened an exceptional faculty of speakers, including university administrators, professors, deans, heads of departments, media professionals and influential thought leaders. Among the distinguished speakers were the Vice Chancellor of Margaret Lawrence University and the Deputy Vice Chancellor (Academic) of the Federal University of Technology, Akure (FUTA), alongside other accomplished academics, professionals and social influencers. The conference created a powerful platform for inspiring university students towards purposeful leadership, excellence and societal transformation.",
      icon: Sparkles,
      color: 'bg-rose-500'
    },
    {
      year: 'Milestone 2',
      title: 'Teens Activation Bootcamp',
      subtitle: 'American Corner Calabar',
      desc: 'In partnership with the American Corner, Calabar, DRYCI organised the Teens Activation Bootcamp—a transformational programme designed to prepare teenagers for purposeful living through leadership development, personal growth and practical life skills. The bootcamp provided participants with exposure to mentorship, self-discovery and transformational learning experiences beyond the traditional classroom environment.',
      icon: Award,
      color: 'bg-[#F57C00]'
    },
    {
      year: 'Ongoing',
      title: 'Strategic Partnerships',
      subtitle: 'Unified Progress',
      desc: 'Since then, DRYCI has continued to build strategic partnerships with educational institutions, professionals, churches and development-minded organisations committed to raising purpose-driven children and young people. Every programme represents another step towards the vision of ensuring that no child or young person is denied the opportunity to fulfil their potential because of poverty, geographical disadvantage or traumatic life experiences.',
      icon: Users,
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div id="our-story" className="space-y-0">
      
      {/* 2A: Who We Are & Interactive Slideshow */}
      <section className="py-[140px] xl:py-[180px] bg-white relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D47A1]/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F57C00]/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center w-full">
            
            {/* Left: Framed Slideshow (Reduced top padding headroom) - Exact 45% Width */}
            <motion.div 
              className="w-full lg:w-[45%] shrink-0 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Corner outer decorative frames matching DRYCI brand colors */}
              <div className="absolute -left-3 -top-3 w-16 h-16 border-t-4 border-l-4 border-[#F57C00] rounded-tl-[24px] pointer-events-none z-20" />
              <div className="absolute -right-3 -bottom-3 w-16 h-16 border-b-4 border-r-4 border-[#0D47A1] rounded-br-[24px] pointer-events-none z-20" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-slate-950 border border-slate-800/10 shadow-xl flex flex-col justify-between p-6 select-none group">
                
                {/* Image Cross-fade */}
                <div className="absolute inset-0 z-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img 
                        src={whoWeAreSlides[currentSlide].url} 
                        alt={whoWeAreSlides[currentSlide].title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Top indicator row */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-200 uppercase tracking-widest">
                    <Camera className="w-3 h-3 text-[#F57C00]" />
                    <span>DRYCI Field Slideshow</span>
                  </div>
                  
                  {/* Dot navigators */}
                  <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                    {whoWeAreSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          currentSlide === idx ? 'bg-[#F57C00] scale-125' : 'bg-white/40 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Details overlays */}
                <div className="relative z-10 mt-auto text-left space-y-1.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{whoWeAreSlides[currentSlide].location}</span>
                      </div>
                      
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                        {whoWeAreSlides[currentSlide].title}
                      </h4>
                      
                      <p className="text-xs text-slate-250 leading-relaxed font-sans opacity-95">
                        {whoWeAreSlides[currentSlide].caption}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Registered Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-xs z-20">
                <div className="w-10 h-10 rounded-full bg-[#0D47A1]/10 flex items-center justify-center text-[#0D47A1] shrink-0">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <span className="font-poppins font-bold text-xs text-slate-900 block">Officially Registered</span>
                  <p className="text-[10px] text-slate-500 leading-tight">Dedicated to values, character, & community growth.</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Who We Are Narrative - Exact 55% Width */}
            <div className="w-full lg:w-[55%] flex-grow space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                  Who We Are
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-tight">
                  Holistic Development for the Next Generation
                </h2>
              </div>

              <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-6 font-sans font-light max-w-[850px]">
                <p className="text-[#0D47A1] font-semibold text-lg leading-relaxed font-sans">
                  Dreams to Reality Youth and Children Initiative (DRYCI) is a registered Nigerian not-for-profit organisation committed to the holistic development of children and young people.
                </p>
                <p>
                  We exist to identify potential, nurture purpose, develop leadership capacity and empower young people with the knowledge, character, values and practical skills required to thrive in an increasingly complex world. Our interventions combine education, leadership development, mentorship, entrepreneurship, life skills, advocacy and spiritual formation because we believe genuine transformation must address the whole person.
                </p>
                <p>
                  Rather than treating only visible symptoms, we intentionally address the deeper issues that shape the future of every young person—including identity, values, purpose, resilience, emotional wellbeing and personal responsibility. Our programmes are carefully designed to help children and young people become confident thinkers, responsible leaders, compassionate citizens and positive change-makers within their families, schools and communities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2B: Interactive Timeline (Dark Slate 900 Background) */}
      <section className="py-[140px] xl:py-[180px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#0D47A1,transparent_50%)] opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#F57C00,transparent_50%)] opacity-15 pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          {/* Header block */}
          <div className="max-w-5xl text-left space-y-6 mb-20">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-tight text-white max-w-4xl">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-300 text-base sm:text-lg font-sans font-light leading-relaxed opacity-95">
              <div className="space-y-4">
                <p>
                  Although officially established and incorporated in March 2024, the vision that birthed Dreams to Reality Youth and Children Initiative had been expressed through years of consistent youth development, mentorship and educational interventions.
                </p>
                <p>
                  The formal incorporation marked a significant step towards building a sustainable institution capable of expanding its impact across communities and generations.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Since then, DRYCI has continued to build strategic partnerships with educational institutions, professionals, churches and development-minded organisations committed to raising purpose-driven children and young people.
                </p>
                <p className="text-[#F57C00] font-semibold text-lg sm:text-xl font-serif">
                  Every programme represents another step towards the vision of ensuring that no child or young person is denied the opportunity to fulfil their potential because of poverty, geographical disadvantage or traumatic life experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Timeline - Expanded to full Content Container width */}
          <div className="relative w-full">
            {/* Center line for desktop */}
            <div className="absolute left-[20px] md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#F57C00] via-[#0D47A1] to-emerald-500/50 -translate-x-1/2 pointer-events-none hidden md:block" />
            {/* Side line for mobile */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#F57C00] via-[#0D47A1] to-emerald-500/50 pointer-events-none md:hidden" />

            <div className="space-y-12">
              {storyMilestones.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <motion.div
                    key={step.title}
                    className={`flex flex-col md:flex-row items-stretch ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } relative`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    onViewportEnter={() => setActiveStep(idx)}
                  >
                    {/* Circle Node */}
                    <div className="absolute left-[20px] md:left-1/2 w-6 h-6 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center -translate-x-1/2 z-20 transition-all duration-300">
                      <div className={`w-2.5 h-2.5 rounded-full ${activeStep === idx ? 'bg-[#F57C00] scale-125' : 'bg-[#0D47A1]'} transition-all`} />
                    </div>

                    {/* Timeline Content */}
                    <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-10 lg:px-12">
                      <motion.div 
                        className="bg-slate-950/55 backdrop-blur-sm border border-slate-800 p-6 sm:p-8 rounded-[24px] transition-all hover:border-slate-700/80 text-left"
                        whileHover={{ y: -3 }}
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="font-mono text-[10px] font-black tracking-widest text-[#F57C00] px-3 py-1 rounded-full bg-[#F57C00]/10 border border-[#F57C00]/15">
                            {step.year}
                          </span>
                          <span className="text-slate-500 text-xs font-mono">
                            {step.subtitle}
                          </span>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center shrink-0 text-white`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-poppins font-extrabold text-base sm:text-lg text-white group-hover:text-[#F57C00] transition-colors leading-tight mb-2">
                              {step.title}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer block */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2C: Our Founder Section (Moses Chibueze) */}
      <FounderProfile />

    </div>
  );
}
