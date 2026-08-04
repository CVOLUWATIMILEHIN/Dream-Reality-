import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  BookOpen,
  Users,
  Briefcase,
  Globe,
  Heart,
  Sparkles,
  ShieldCheck,
  ChevronRight, 
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  Compass,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Sparkle
} from 'lucide-react';
import AuthenticNigerianImage from './AuthenticNigerianImage';
import { programsData } from '../data/programsData';
import ProgramDetailView from './ProgramDetailView';

// Import official DRYCI Hero images
import heroSection1 from './gallery_calabar_20260205_115959.jpg';
import heroSection2 from './gallery_calabar_20260205_112724.jpg';
import heroSection3 from './gallery_calabar_20260205_113039.jpg';
import heroSection4 from './gallery_calabar_20260205_114311.jpg';
import heroSection5 from './gallery_calabar_20260205_114701.jpg';

interface MainProgramsProps {
  onNavigate?: (section: string) => void;
}

// 6 Core Pillars definition
const PILLARS_SUMMARY = [
  {
    pillar: 'Pillar I',
    title: 'Leadership Development',
    icon: Award,
    description: 'Nurturing ethical agency, civic responsibility, and transparent public governance in teenagers.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  },
  {
    pillar: 'Pillar II',
    title: 'Education Support',
    icon: BookOpen,
    description: 'Bypassing local power outages with solar reading rooms, sponsorships, and textbook distribution.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    pillar: 'Pillar III',
    title: 'Mentorship & Coaching',
    icon: Users,
    description: 'Connecting school-age adolescents with verified corporate professionals for 12 months.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
  },
  {
    pillar: 'Pillar IV',
    title: 'Entrepreneurship & Skills',
    icon: Briefcase,
    description: 'Teaching high-demand vocational crafts, coding, and digital design for direct self-reliance.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    pillar: 'Pillar V',
    title: 'Community Development',
    icon: Globe,
    description: 'Drilling clean solar water boreholes and providing menstrual health kits to rural academies.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20'
  },
  {
    pillar: 'Pillar VI',
    title: 'Faith & Character',
    icon: ShieldCheck,
    description: 'Cultivating moral anchors, self-governance, anti-corruption mindsets, and values theater.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  }
];

// Interactive Journey Steps representation
const JOURNEY_STEPS = [
  {
    phase: 'Phase I',
    title: 'Character Foundations',
    ageGroup: 'Ages 11-13',
    focus: 'Ethics & Integrity',
    description: 'We begin by instilling deep moral self-governance, truthfulness, and an active anti-corruption mindset. Scholars complete weekly co-curricular character registries and values-focused theater.',
    programId: 'faith-character',
    accentColor: 'text-emerald-500',
    bgBadge: 'bg-emerald-500/10',
    badgeText: 'ETHICAL SEEDING',
    imageSubject: 'Primary pupils logging progress in custom character diaries.',
    imageLocation: 'Enugu Urban'
  },
  {
    phase: 'Phase II',
    title: 'Academic Liberation',
    ageGroup: 'Ages 12-15',
    focus: 'Resource Equity',
    description: 'By establishing solar-powered community reading rooms and distributing thousands of comprehensive textbook bundles, we neutralize power failures and local book scarcity.',
    programId: 'education-support',
    accentColor: 'text-blue-500',
    bgBadge: 'bg-blue-500/10',
    badgeText: 'ACADEMIC FUEL',
    imageSubject: 'Secondary scholars studying after sunset under bright solar lamps.',
    imageLocation: 'Nsukka Rural Hub'
  },
  {
    phase: 'Phase III',
    title: 'Ethical Civic Agency',
    ageGroup: 'Ages 13-17',
    focus: 'Leadership Mastery',
    description: 'Through structured school-based leadership clubs and competitive regional public policy debates, delegates master critical thinking and advocate for transparent development.',
    programId: 'leadership-development',
    accentColor: 'text-amber-500',
    bgBadge: 'bg-amber-500/10',
    badgeText: 'CIVIC ORATORY',
    imageSubject: 'Student president pitching a clean school waste disposal campaign.',
    imageLocation: 'Lagos Center'
  },
  {
    phase: 'Phase IV',
    title: 'Flagship Intervention',
    ageGroup: 'Ages 14-18',
    focus: 'EPIPHANY Bootcamp',
    description: 'Outstanding adolescent girls proceed to our premium residential summit, delivering intensive training in STEM, professional careers, and reproductive health.',
    programId: 'epiphany',
    accentColor: 'text-[#F57C00]',
    bgBadge: 'bg-orange-500/10',
    badgeText: 'PREMIER INITIATIVE',
    imageSubject: 'High-potential female scholars pitching technological community prototypes.',
    imageLocation: 'Nkanu West District'
  },
  {
    phase: 'Phase V',
    title: 'Self-Reliant Crafting',
    ageGroup: 'Ages 15-19',
    focus: 'Vocational Launch',
    description: 'Scholars master high-demand crafts including solar assembly, computing, coding, digital art, and dressmaking, complete with starting micro-seed funding.',
    programId: 'entrepreneurship-skills',
    accentColor: 'text-orange-500',
    bgBadge: 'bg-orange-500/10',
    badgeText: 'ECONOMIC AGENCY',
    imageSubject: 'Youth graduates installing modular solar panels in rural clinics.',
    imageLocation: 'Ibadan Center'
  },
  {
    phase: 'Phase VI',
    title: 'Lifelong Coaching',
    ageGroup: 'Ages 16-20',
    focus: '12-Month Mentorship',
    description: 'To guarantee university progression and career stability, students are matched with verified corporate directors, medical professionals, or legal advocates.',
    programId: 'mentorship-coaching',
    accentColor: 'text-indigo-500',
    bgBadge: 'bg-indigo-500/10',
    badgeText: 'PROFESSIONAL MATCH',
    imageSubject: 'Corporate attorney mapping career paths with a high school graduate.',
    imageLocation: 'Lagos Island'
  }
];

// Operational Process steps
const OPERATIONAL_STEPS = [
  {
    num: '01',
    title: 'Scouting & Trust Vetting',
    sub: 'Community-led Assessment',
    desc: 'DRYCI field teams coordinate directly with public school principals and village heads to identify the most academically ambitious yet financially vulnerable youth.'
  },
  {
    num: '02',
    title: 'Infrastructure & Tool Provision',
    sub: 'Material Activation',
    desc: 'We supply solar-powered reading rooms and textbook bundles directly to schools, completely eliminating grid blackout limitations and material gaps.'
  },
  {
    num: '03',
    title: 'Co-Curricular Action Clubs',
    sub: 'Weekly Workshops',
    desc: 'Scholars join structured clubs right inside their academies, practicing public speaking, project design, and character accountability weekly.'
  },
  {
    num: '04',
    title: '12-Month Mentorship Alignment',
    sub: 'Professional Connection',
    desc: 'Scholars are paired one-on-one with verified Nigerian and diaspora leaders, reviewing academic transition plans, ethics, and career selection.'
  },
  {
    num: '05',
    title: 'Enterprise Launch & Tertiary Seed',
    sub: 'Sustainable Launch',
    desc: 'Upon secondary completion, scholars are provided startup equipment, tertiary application funding, and venture seed grants to kickstart direct self-reliance.'
  }
];

export default function MainPrograms({ onNavigate }: MainProgramsProps) {
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);

  // Scroll to top when active program switches
  useEffect(() => {
    if (activeProgramId !== null) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeProgramId]);

  const activeProgram = programsData.find(p => p.id === activeProgramId);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToForm = () => {
    if (onNavigate) {
      onNavigate('volunteer');
    } else {
      const el = document.getElementById('volunteer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Render dedicated programme page detail if an item is selected
  if (activeProgramId && activeProgram) {
    return (
      <ProgramDetailView 
        program={activeProgram} 
        onBack={() => setActiveProgramId(null)} 
        onNavigate={onNavigate}
      />
    );
  }

  // Split programs: EPIPHANY as Flagship, others for Alternating Explorer
  const flagshipProgram = programsData.find(p => p.id === 'epiphany');
  const explorerPrograms = programsData.filter(p => p.id !== 'epiphany');

  return (
    <div className="bg-[#F8FAFC] text-slate-800 font-sans min-h-screen overflow-x-hidden selection:bg-[#F57C00] selection:text-white">
      
      {/* ==================================================
          1. FULL-SCREEN HERO BANNER (Cinematic Storytelling)
          ================================================== */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between bg-slate-950 text-white">
        
        {/* Immersive Background Slider & Fine Gradients */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img 
            src={heroSection3}
            alt="Programs Background"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-102"
          />
          {/* Subtle grid pattern and ambient glow flare */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/25 to-transparent z-10 pointer-events-none" />
          
          {/* Floating warm color flares */}
          <div className="absolute -top-12 left-1/4 w-[500px] h-[500px] bg-[#0D47A1]/15 rounded-full blur-[160px] z-10 pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-[#F57C00]/15 rounded-full blur-[160px] z-10 pointer-events-none" />
        </div>

        {/* Hero Central Content Container (Expansive layout, no narrow containers) */}
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-20 flex flex-col justify-center h-full pt-20 flex-grow text-left">
          
          <div className="space-y-8 w-full lg:w-[95%] xl:w-[95%] max-w-none">
            <div>
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold px-5 py-2.5 bg-[#F57C00]/10 border border-[#F57C00]/20 rounded-full inline-flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F57C00] animate-pulse" />
                <span>Active Impact Portals • Tuition-Free Ecosystem</span>
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[115px] font-extrabold tracking-tighter leading-[0.9] text-white">
              The Architecture of <span className="text-[#F57C00] block mt-2 sm:inline sm:mt-0">Transformation</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-2xl leading-relaxed font-sans max-w-3xl font-light">
              We do not build simple, detached programs. We engineer a fully continuous development pathway that moves vulnerable Nigerian youth from raw scholastic enrollment to ethical leadership and absolute self-reliance.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <button
                onClick={() => handleScrollToSection('intro-section')}
                className="h-[60px] px-10 bg-[#0D47A1] hover:bg-[#0A3780] text-white font-extrabold rounded-full shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer text-xs uppercase tracking-wider font-mono"
              >
                <span>Track The Scholar Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#F57C00]" />
              </button>
              
              <button
                onClick={() => handleScrollToSection('featured-section')}
                className="h-[60px] px-10 border-2 border-white/20 hover:border-white/50 text-white font-extrabold rounded-full transition-all duration-300 flex items-center justify-center gap-3 text-xs uppercase tracking-wider font-mono"
              >
                <span>View Flagship Program</span>
                <Sparkle className="w-4 h-4 text-[#F57C00]" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Prompt Link */}
        <div className="relative bottom-10 left-1/2 -translate-x-1/2 z-25 hidden lg:flex flex-col items-center gap-1.5 select-none text-center">
          <button
            onClick={() => handleScrollToSection('intro-section')}
            className="flex flex-col items-center group cursor-pointer"
          >
            <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-white uppercase transition-colors">
              Begin The Experience
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-5 h-8.5 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5 mt-2 group-hover:border-white/40 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-[#F57C00] rounded-full" />
            </motion.div>
          </button>
        </div>
      </section>

      {/* ==================================================
          2. PROGRAMME INTRODUCTION (SOCIETAL MODEL + PILLARS + IMPACT)
          ================================================== */}
      <section id="intro-section" className="py-24 md:py-32 xl:py-36 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D47A1]/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/2 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="space-y-24">
            
            {/* Elegant wide narrative grid split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-black block">
                  01 • OUR EDUCATIONAL & CIVIC PARADIGM
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                  Raising Confident <br className="hidden md:block" />Leaders & Innovators
                </h2>
              </div>
              <div className="lg:col-span-6 text-left space-y-6">
                <p className="text-slate-600 text-base sm:text-xl font-sans font-light leading-relaxed">
                  Empowerment is not a single isolated event; it is an active, continuous developmental pathway. At DRYCI, we do not run simple, detached program events. We engineer an ecosystem that moves vulnerable Nigerian adolescents from raw secondary school enrollment to ethical leadership and total self-reliance.
                </p>
                <p className="text-slate-500 text-sm sm:text-base font-sans font-light leading-relaxed">
                  By intentionally bypassing local power grid failures with solar reading hubs, distributing core syllabus textbooks, and linking scholars with responsible professionals, we clear the structural roadblocks that stand between youth and life readiness.
                </p>
              </div>
            </div>

            {/* Strategic Pillars Categories Grid */}
            <div className="space-y-12">
              <div className="text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                  THE SIX PILLARS OF OUR ACTIVE ECOSYSTEM
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PILLARS_SUMMARY.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1"
                    >
                      <div className="space-y-6">
                        <div className={`w-14 h-14 rounded-2xl ${pillar.bgColor} ${pillar.color} ${pillar.borderColor} border flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        
                        <div className="space-y-2">
                          <span className="text-[#0D47A1] font-mono text-[10px] font-black uppercase tracking-wider block">
                            {pillar.pillar}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#0D47A1] transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-slate-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-200/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>DRYCI Strategic Standard</span>
                        <span className="text-[#F57C00] font-bold group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantitative Documented Impact Stats block */}
            <div className="pt-12 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Stat 1 */}
                <div className="p-8 bg-[#F8FAFC] border border-slate-200/80 rounded-[24px] space-y-4 flex flex-col justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <span className="text-4xl sm:text-5xl font-serif font-black text-slate-900 block">
                      15,000+
                    </span>
                    <h4 className="font-poppins font-bold text-slate-900 text-xs uppercase tracking-wider">Teen Leaders Formed</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      Graduates from our weekly leadership clubs and character registries trained in civic responsibilities and integrity.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex justify-between">
                    <span>Direct Audits</span>
                    <span className="text-emerald-500 font-bold">✓ VERIFIED</span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-8 bg-[#F8FAFC] border border-slate-200/80 rounded-[24px] space-y-4 flex flex-col justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <span className="text-4xl sm:text-5xl font-serif font-black text-[#0D47A1] block">
                      25,000+
                    </span>
                    <h4 className="font-poppins font-bold text-slate-900 text-xs uppercase tracking-wider">Syllabus Textbooks</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      Comprehensive bundles printed and distributed tuition-free to eliminate local school learning resource scarcity.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex justify-between">
                    <span>School Distribution</span>
                    <span className="text-emerald-500 font-bold">✓ VERIFIED</span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="p-8 bg-[#F8FAFC] border border-slate-200/80 rounded-[24px] space-y-4 flex flex-col justify-between text-left hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <span className="text-4xl sm:text-5xl font-serif font-black text-[#F57C00] block">
                      1,200+
                    </span>
                    <h4 className="font-poppins font-bold text-slate-900 text-xs uppercase tracking-wider">12-Month Matches</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">
                      Secondary scholars aligned for one full year with verified professional mentors in corporate, medical, and engineering fields.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex justify-between">
                    <span>Coaching Portal</span>
                    <span className="text-emerald-500 font-bold">✓ VERIFIED</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. FEATURED PROGRAMMES (Flagship Showcase: EPIPHANY)
          ================================================== */}
      <section id="featured-section" className="py-24 md:py-32 xl:py-36 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
        
        {/* Cinematic Backdrop Pattern */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:48px_48px] opacity-25 mix-blend-overlay" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F57C00]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-[#0D47A1]/15 rounded-full blur-[160px] pointer-events-none" />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div className="space-y-16">
            
            {/* Header section with high-contrast label */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
              <div className="space-y-4">
                <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold px-4 py-2 bg-[#F57C00]/15 border border-[#F57C00]/30 rounded-full inline-flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F57C00] animate-spin" />
                  <span>DRYCI FLAGSHIP INITIATIVE</span>
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                  The EPIPHANY <br className="hidden lg:block" />Leadership Program
                </h2>
              </div>
              
              <p className="text-slate-400 text-base sm:text-lg max-w-xl font-light leading-relaxed font-sans pb-1">
                EPIPHANY stands as our premier residential summit designed specifically for high-potential adolescent girls in secondary schools across Nigeria. This flagship initiative is structured to break glass ceilings.
              </p>
            </div>

            {/* Immersive Column Grid Block Layout */}
            <div className="bg-slate-900 rounded-[40px] border border-slate-800 p-8 sm:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Large Panoramic Field Photograph (7 Cols) */}
                <div className="lg:col-span-7 relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                    <AuthenticNigerianImage
                      title="EPIPHANY Summit"
                      location="Enugu Region"
                      subject="Adolescent female scholars collaborating during intensive STEM workshops."
                      uniform="Traditional smart secondary school uniforms."
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-101"
                    />
                    
                    {/* Dark gradient for layout balance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    {/* Floating location tag */}
                    <div className="absolute top-6 left-6 bg-slate-900/90 border border-slate-800 backdrop-blur-md text-white font-mono text-[9px] font-bold tracking-wider px-3 py-1.5 rounded-lg uppercase">
                      FLAGSHIP INTERVENTION DISTRICT: NKANU WEST
                    </div>
                  </div>
                </div>

                {/* Narrative Details, Big Metrics & Testimonial (5 Cols) */}
                <div className="lg:col-span-5 text-left space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#F57C00] text-xs font-mono font-bold uppercase tracking-widest">
                      <Calendar className="w-4 h-4" />
                      <span>Annual Immersive Bootcamp</span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed font-sans">
                      By delivering cutting-edge masterclasses in social advocacy, digital design, reproductive safety, and entrepreneurial ventures, we equip teenage girls to lead communities with total clarity and moral self-governance.
                    </p>
                  </div>

                  {/* Testimonial Quote excerpt */}
                  <div className="border-l-2 border-[#F57C00] pl-6 py-1 space-y-1 bg-white/2 rounded-r-xl pr-4">
                    <p className="italic text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      "At EPIPHANY, I realized that my background in Enugu does not limit my global reach. My corporate mentor continues to guide my university entry decisions."
                    </p>
                    <span className="text-[11px] font-mono font-bold text-white block">
                      — Chioma Ndukwe, 2025 Cohort Alumna
                    </span>
                  </div>

                  {/* Flagship metrics in giant display fonts */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                    <div>
                      <span className="text-2xl sm:text-3xl font-serif font-black text-white block">
                        1,800+
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mt-1">
                        Graduates Trained
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-serif font-black text-[#F57C00] block">
                        100%
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mt-1">
                        Mentor Match Rate
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-serif font-black text-white block">
                        ₦10M+
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block mt-1">
                        Venture Funding
                      </span>
                    </div>
                  </div>

                  {/* Active Portal CTA */}
                  <div className="pt-4 flex items-center">
                    <button
                      onClick={() => setActiveProgramId('epiphany')}
                      className="px-8 py-4.5 bg-[#F57C00] hover:bg-[#E65100] text-white font-sans text-xs uppercase font-extrabold tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-3.5 group cursor-pointer shadow-lg shadow-orange-500/10"
                    >
                      <span>Explore EPIPHANY Portal</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          4. ALL PROGRAMMES (Alternating Full-Width Editorial Rows)
          ================================================== */}
      <section className="py-24 md:py-32 xl:py-36 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="space-y-24">
            
            {/* Introductory title */}
            <div className="max-w-4xl text-left space-y-4">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-black block">
                02 • COMPLETE CURRICULUM BLUEPRINTS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Strategic Program Explorer
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-sans font-light leading-relaxed max-w-3xl pt-2">
                We organize our resources around six distinct thematic pillars. Below, read our raw operational data and click "View Field Documentation" to enter the active resource hubs of each program.
              </p>
            </div>

            {/* Alternating Feature Blocks Container */}
            <div className="space-y-28 lg:space-y-36">
              {explorerPrograms.map((prog, index) => {
                const isEven = index % 2 === 0;
                
                // Fetch the static category summary matching this program's title to get correct icon/accent color
                const categoryMatch = PILLARS_SUMMARY.find(p => p.title.toLowerCase().includes(prog.title.split(' ')[0].toLowerCase())) || PILLARS_SUMMARY[index % PILLARS_SUMMARY.length];
                const IconComponent = categoryMatch.icon;

                return (
                  <div 
                    key={prog.id}
                    className="border-b border-slate-200 pb-20 lg:pb-28 last:border-0 last:pb-0"
                  >
                    {/* We use flex layout to guarantee exact 45% image / 55% text width proportions */}
                    <div className={`flex flex-col lg:items-center gap-12 lg:gap-16 xl:gap-24 text-left ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      
                      {/* Image Frame (45% precise width on Desktop) */}
                      <div className="w-full lg:w-[45%] shrink-0 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                          
                          {/* Use authentic Nigerian Image component with custom parameters */}
                          <AuthenticNigerianImage
                            title={prog.title}
                            location={prog.gallery[0]?.location || "Nigeria District"}
                            subject={prog.subtitle}
                            uniform="Scholars representing partner government academies."
                            aspectRatio="aspect-[4/3]"
                            className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-101"
                          />
                          
                          {/* Top floating badge */}
                          <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white font-mono text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-md border border-white/5 z-20">
                            {prog.category || "DRYCI PILLAR"}
                          </div>

                          {/* Floating photo caption info box */}
                          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 text-left z-10">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#0D47A1] uppercase tracking-wider mb-1">
                              <MapPin className="w-3.5 h-3.5 text-[#F57C00]" />
                              <span>Active District: {prog.gallery[0]?.location || "Enugu Regional Center"}</span>
                            </div>
                            <p className="text-slate-500 text-[10px] sm:text-xs leading-normal font-sans font-light">
                              {prog.gallery[0]?.subject || "Scholars participating in active workshops."}
                            </p>
                          </div>

                        </div>
                      </div>

                      {/* Content Frame (55% precise width on Desktop) */}
                      <div className="w-full lg:w-[55%] flex-grow space-y-6">
                        
                        {/* Numerical indicator and small icon marker */}
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl ${categoryMatch.bgColor} ${categoryMatch.color} ${categoryMatch.borderColor} border flex items-center justify-center shadow-sm`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="text-left">
                            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-black block">
                              02.{index + 1} • {categoryMatch.pillar}
                            </span>
                          </div>
                        </div>

                        {/* Program Headline */}
                        <div className="space-y-3">
                          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                            {prog.title}
                          </h3>
                          <p className="text-slate-500 text-sm sm:text-base italic font-sans font-light max-w-xl">
                            "{prog.subtitle}"
                          </p>
                        </div>

                        {/* Overview descriptions */}
                        <div className="space-y-4">
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                            {prog.overview}
                          </p>
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light pl-4 border-l border-slate-200">
                            <strong>Why This Program Matters:</strong> {prog.whyItMatters}
                          </p>
                        </div>

                        {/* Objectives checklist */}
                        <div className="space-y-2 pt-2 text-xs sm:text-sm font-mono text-slate-600">
                          <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">PROGRAM OBJECTIVES</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {prog.objectives.slice(0, 4).map((obj, oIdx) => (
                              <div key={oIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F57C00] shrink-0 mt-1.5" />
                                <span className="leading-snug">{obj}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA trigger and metadata details */}
                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                            TUITION FREE • DIRECT COMMUNITY IMPACT
                          </span>
                          
                          <button
                            onClick={() => setActiveProgramId(prog.id)}
                            className="px-6 py-3.5 bg-slate-900 hover:bg-[#0D47A1] text-white font-sans text-xs uppercase font-extrabold tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md group"
                          >
                            <span>Learn More & Enter Portal</span>
                            <ArrowRight className="w-4 h-4 text-[#F57C00] transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          5. PROGRAMME JOURNEY (Interactive Horizontal Timeline)
          ================================================== */}
      <section className="py-24 md:py-32 xl:py-36 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D47A1]/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/2 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="space-y-16">
            
            {/* Upper Content and Heading */}
            <div className="max-w-4xl text-left space-y-4">
              <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-black block">
                03 • CONTINUOUS DEVELOPMENT LIFECYCLE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                The Scholar Journey
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-sans font-light leading-relaxed pt-2">
                Empowerment is not a single intervention; it is a sequential, multi-year developmental pipeline. Click through each phase below to see how our active programs work together to raise independent leaders.
              </p>
            </div>

            {/* Interactive Timeline Track */}
            <div className="relative pt-6 pb-2 border-b border-slate-100">
              {/* Connecting Track Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0 hidden md:block" />
              
              {/* Completed Track Fill */}
              <div 
                className="absolute top-1/2 left-0 h-1 bg-[#0D47A1] -translate-y-1/2 z-0 hidden md:block transition-all duration-500"
                style={{ width: `${(activeJourneyIndex / (JOURNEY_STEPS.length - 1)) * 100}%` }}
              />

              {/* Steps grid */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-0 relative z-10">
                {JOURNEY_STEPS.map((step, idx) => {
                  const isActive = idx === activeJourneyIndex;
                  const isCompleted = idx < activeJourneyIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyIndex(idx)}
                      className="flex flex-col items-start md:items-center text-left md:text-center p-4 md:p-0 group cursor-pointer focus:outline-none focus:ring-0"
                    >
                      {/* Step Circle Pin */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-4 ${
                        isActive 
                          ? 'bg-[#0D47A1] border-[#0D47A1]/20 scale-110 text-white shadow-lg' 
                          : isCompleted
                            ? 'bg-[#0D47A1]/10 border-white text-[#0D47A1]'
                            : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-400'
                      }`}>
                        {isCompleted ? (
                          <Check className="w-5 h-5 font-bold" />
                        ) : (
                          <span className="font-mono text-xs font-black">{idx + 1}</span>
                        )}
                      </div>

                      {/* Labels */}
                      <div className="mt-4 space-y-1 md:px-2">
                        <span className={`text-[10px] font-mono font-bold tracking-wider block uppercase ${isActive ? 'text-[#0D47A1]' : 'text-slate-400'}`}>
                          {step.phase}
                        </span>
                        <h4 className={`font-poppins font-bold text-xs sm:text-sm leading-tight transition-colors ${isActive ? 'text-slate-900 font-extrabold' : 'text-slate-500 group-hover:text-slate-800'}`}>
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 block font-light">
                          {step.ageGroup}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Phase Details Pane (Large split screen) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-50 rounded-[32px] border border-slate-200/80 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  
                  {/* Left Column: Descriptive info */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div className="space-y-3">
                      <span className={`font-mono text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-lg inline-block ${JOURNEY_STEPS[activeJourneyIndex].bgBadge} ${JOURNEY_STEPS[activeJourneyIndex].accentColor}`}>
                        {JOURNEY_STEPS[activeJourneyIndex].badgeText}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {JOURNEY_STEPS[activeJourneyIndex].title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Compass className="w-4 h-4 text-[#0D47A1]" />
                          <span>Core Focus: {JOURNEY_STEPS[activeJourneyIndex].focus}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-[#F57C00]" />
                          <span>Target: {JOURNEY_STEPS[activeJourneyIndex].ageGroup}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                      {JOURNEY_STEPS[activeJourneyIndex].description}
                    </p>

                    <div className="pt-4 border-t border-slate-200/60 flex items-center">
                      <button
                        onClick={() => setActiveProgramId(JOURNEY_STEPS[activeJourneyIndex].programId)}
                        className="px-8 py-4 bg-slate-900 hover:bg-[#0D47A1] text-white font-sans text-xs uppercase font-extrabold tracking-wider rounded-xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer shadow-md hover:shadow-blue-900/10"
                      >
                        <span>Open Program Portal</span>
                        <ArrowUpRight className="w-4 h-4 text-[#F57C00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Narrative photo representation */}
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-md group">
                      <AuthenticNigerianImage
                        title={JOURNEY_STEPS[activeJourneyIndex].title}
                        location={JOURNEY_STEPS[activeJourneyIndex].imageLocation}
                        subject={JOURNEY_STEPS[activeJourneyIndex].imageSubject}
                        uniform="Scholars representing partner schools."
                        aspectRatio="aspect-[16/10]"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      
                      {/* Interactive Floating Label */}
                      <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md text-white border border-white/10 px-4 py-2.5 rounded-xl text-[10px] font-mono text-left max-w-xs z-10 shadow-lg">
                        <span className="font-bold uppercase tracking-wider text-[#F57C00] block mb-0.5">FIELD SNAPSHOT</span>
                        <span className="text-slate-300 font-light block">{JOURNEY_STEPS[activeJourneyIndex].imageSubject}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* ==================================================
          6. HOW OUR PROGRAMMES WORK (Visual Process Timeline)
          ================================================== */}
      <section className="py-24 md:py-32 xl:py-36 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="space-y-20">
            
            {/* Header Content */}
            <div className="max-w-3xl text-left space-y-4">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                04 • OUR STRATEGIC PROTOCOL
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                How Our Programmes Work
              </h2>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed font-sans pt-2">
                We believe in total operational integrity. Every program of ours is implemented following a rigorous, step-by-step verification standard to guarantee that donor funding translates directly into genuine child empowerment.
              </p>
            </div>

            {/* Horizontal Timeline Block Layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              
              {/* Process line mapping behind numbered steps */}
              <div className="absolute top-10 left-4 right-4 h-[1px] bg-slate-800 z-0 hidden md:block" />
              
              {OPERATIONAL_STEPS.map((step, idx) => (
                <div 
                  key={idx} 
                  className="space-y-4 text-left group relative z-10 bg-slate-950 pr-4"
                >
                  {/* Giant Glowing step number */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-[#F57C00] flex items-center justify-center font-mono text-xs font-black shadow-inner">
                      {step.num}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 animate-pulse hidden md:block" />
                  </div>

                  {/* Description headings */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                      {step.sub}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white leading-tight group-hover:text-[#F57C00] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          7. FULL-WIDTH CALL TO ACTION (CTA)
          ================================================== */}
      <section className="bg-slate-950 text-white py-24 md:py-32 xl:py-36 relative overflow-hidden">
        
        {/* Glowing pattern background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:48px_48px] opacity-25 mix-blend-overlay" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#F57C00]/15 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#0D47A1]/25 rounded-full blur-[140px]" />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-black block">
            BECOME A DRYCI PARTNER
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold max-w-5xl mx-auto tracking-tight leading-tight">
            Help Us Scale Our Active Nigerian Initiatives
          </h2>
          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Whether by volunteering as a remote professional mentor, providing resources for clean school utilities, sponsoring textbook printings, or joining as a donor, your alignment with DRYCI ensures child development has no boundaries.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleScrollToForm}
              className="h-[60px] px-10 bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-orange-500/15"
            >
              <Heart className="w-4.5 h-4.5 fill-current" />
              <span>Apply to Volunteer as a Mentor</span>
            </button>
            <button 
              onClick={handleScrollToForm}
              className="h-[60px] px-10 border-2 border-white/20 hover:border-white/50 text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Partner With Our Schools</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
