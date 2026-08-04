import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  Smile, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Target, 
  Home, 
  ShieldCheck, 
  Copy, 
  Check, 
  Camera, 
  MapPin, 
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import heroSection1 from './gallery_calabar_20260205_115959.jpg';
import heroSection2 from './gallery_calabar_20260205_112724.jpg';
import heroSection3 from './gallery_calabar_20260205_113039.jpg';
import heroSection4 from './gallery_calabar_20260205_114311.jpg';
import heroSection5 from './gallery_calabar_20260205_114701.jpg';
import gallery29 from './gallery_calabar_20260205_115959.jpg';
import gallery30 from './gallery_calabar_20260205_111722.jpg';
import gallery31 from './gallery_calabar_20260205_112327.jpg';
import gallery32 from './gallery_calabar_20260205_113039.jpg';
import gallery33 from './gallery_calabar_20260205_113703.jpg';
import gallery34 from './gallery_calabar_20260205_114311.jpg';
import gallery35 from './gallery_calabar_20260205_114526.jpg';

interface MainImpactProps {
  onNavigate?: (section: string) => void;
}

// ----------------------------------------------------------------------
// 1. DATA DECLARATIONS (Aesthetic & Context-Appropriate for Nigeria)
// ----------------------------------------------------------------------

const impactAreas = [
  {
    id: 'leadership',
    title: 'Leadership Development',
    desc: 'Cultivating ethical frameworks, moral orientation, and leadership capacity in Nigerian secondary school teenagers.',
    icon: Award,
    color: 'text-[#F57C00]',
    bg: 'from-orange-500/10 to-transparent',
    border: 'hover:border-[#F57C00]/30',
    statPlaceholder: '12+ Leadership Clubs Formed'
  },
  {
    id: 'education',
    title: 'Inclusive Academic Support',
    desc: 'Providing high-quality books, study materials, bags, and fully stocked community libraries to rural classrooms.',
    icon: BookOpen,
    color: 'text-[#0D47A1]',
    bg: 'from-blue-500/10 to-transparent',
    border: 'hover:border-[#0D47A1]/30',
    statPlaceholder: '14,200+ Books Distributed'
  },
  {
    id: 'mentorship',
    title: 'Guided Mentorship',
    desc: 'Connecting grassroots adolescents with ethical professional mentors to foster accountability and educational vision.',
    icon: Users,
    color: 'text-emerald-600',
    bg: 'from-emerald-500/10 to-transparent',
    border: 'hover:border-emerald-500/30',
    statPlaceholder: '150+ Teenagers Paired'
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    desc: 'Implementing hygiene sensitization, installing modern boreholes, and supporting parents with local resources.',
    icon: Globe,
    color: 'text-indigo-600',
    bg: 'from-indigo-500/10 to-transparent',
    border: 'hover:border-indigo-500/30',
    statPlaceholder: '12 Clean Water Wells'
  },
  {
    id: 'child-dev',
    title: 'Child Character Development',
    desc: 'Character-building classes that instill confidence, critical thinking, civic responsibility, and positive self-identity.',
    icon: Smile,
    color: 'text-rose-600',
    bg: 'from-rose-500/10 to-transparent',
    border: 'hover:border-rose-500/30',
    statPlaceholder: '3,500+ Children Engaged'
  },
  {
    id: 'faith-trans',
    title: 'Faith-Based Transformation',
    desc: 'Mobilizing youth assemblies around absolute moral integrity, ethical living, spiritual growth, and life purpose.',
    icon: Sparkles,
    color: 'text-amber-600',
    bg: 'from-amber-500/10 to-transparent',
    border: 'hover:border-amber-500/30',
    statPlaceholder: '100% Certified Moral Classes'
  }
];

const theorySteps = [
  {
    id: 'step-1',
    title: 'Dream',
    icon: Sparkles,
    desc: 'Identifying raw potential, interests, and aspirations in children, instilling hope and self-belief.',
    highlight: 'Root Inspiration'
  },
  {
    id: 'step-2',
    title: 'Education',
    icon: BookOpen,
    desc: 'Removing structural barriers by equipping schools with quality books, study aids, and digital tools.',
    highlight: 'Resource Access'
  },
  {
    id: 'step-3',
    title: 'Mentorship',
    icon: Users,
    desc: 'Relational bridges pairing students with professional mentors who guide career paths and values.',
    highlight: 'Relational Anchor'
  },
  {
    id: 'step-4',
    title: 'Leadership',
    icon: Award,
    desc: 'Intensive ethical and moral training, preparing teenagers to lead their peers by positive example.',
    highlight: 'Moral Integrity'
  },
  {
    id: 'step-5',
    title: 'Purpose',
    icon: Target,
    desc: 'Helping youth map out sustainable vocational pursuits, tertiary aspirations, and personal goals.',
    highlight: 'Vocational Clarity'
  },
  {
    id: 'step-6',
    title: 'Community Transformation',
    icon: Home,
    desc: 'Empowered alumni return to establish local initiatives, mentors, and clean-water boreholes for others.',
    highlight: 'Sustained Cycle'
  }
];

const successStoriesData = [
  {
    id: 'story-1',
    name: 'The Confident Dreamer',
    program: 'EPIPHANY Annual Leadership Platform',
    location: 'Calabar, Nigeria',
    quote: 'Reflected in the young girl who gains the confidence to pursue her dreams, standing strong against societal barriers and embracing her leadership calling.',
    fullStory: 'Dedicated to secondary school girls, the EPIPHANY flagship conference brings together experienced educators, professionals, mentors, entrepreneurs, and transformational leaders to raise confident young women who possess academic competence, purpose, courage, character, and practical capacity to shape the future.',
    image: gallery29
  },
  {
    id: 'story-2',
    name: 'The Purpose-Driven Student',
    program: 'Mentorship & Personal Growth Initiatives',
    location: 'Calabar, Nigeria',
    quote: 'Evident in the student who discovers purpose after years of uncertainty, moving confidently from merely surviving to intentionally thriving.',
    fullStory: 'We believe purpose is the absolute foundation of lasting success. By connecting youth with passionate mentors and structured guidance, we help them map out career paths, identify innate gifts, and lead self-directed lives of service and excellence.',
    image: gallery30
  },
  {
    id: 'story-3',
    name: 'The Scholar Restored with Hope',
    program: 'Education & Academic Excellence',
    location: 'Cross River State, Nigeria',
    quote: 'Seen in the child who returns to school with renewed hope, equipped with resources, learning support, and an active desire to learn.',
    fullStory: 'Through educational drives, book distributions, and community learning support systems, we remove financial and resource-based limitations, ensuring talent and passion are supported with real academic opportunities.',
    image: gallery34
  },
  {
    id: 'story-4',
    name: 'The Transformational Leader',
    program: 'Leadership & Character Development',
    location: 'Nigeria Base',
    quote: 'Demonstrated by the young leader who begins influencing others positively within their family, school, and local community.',
    fullStory: 'Sustainable transformation begins with individual character. When young people are equipped with solid ethical foundations, values, and leadership capacity, they proactively solve local problems and become anchors of positive change.',
    image: gallery31
  }
];

const galleryImages = [
  {
    url: gallery31,
    title: 'Active Interactive Classroom',
    location: 'Enugu State',
    desc: 'Joyful students raising hands in active classroom learning and mentorship engagement.'
  },
  {
    url: gallery30,
    title: 'Collaborative Reading Circle',
    location: 'Nsukka Hub',
    desc: 'Underserved students enjoying newly distributed storybooks in a collaborative group.'
  },
  {
    url: gallery32,
    title: 'Academic Writing Workshops',
    location: 'Lagos Outreach',
    desc: 'Primary pupils collaborating at custom-built study desks with brand new scholastic kits.'
  },
  {
    url: gallery34,
    title: 'Community Resource Library',
    location: 'DRYCI Enugu Center',
    desc: 'Secondary school students gathering for structured weekend revision classes in our main library.'
  },
  {
    url: gallery33,
    title: 'Joy of Quality Education',
    location: 'Lagos Outreach',
    desc: 'Happy children holding up custom-designed study books during our book-drive event.'
  },
  {
    url: heroSection2,
    title: 'Direct Mentorship Guidance',
    location: 'Enugu Hub',
    desc: 'Dedicated volunteer professional explaining leadership principles to high school seniors.'
  },
  {
    url: heroSection4,
    title: 'Computer & Vocational Lab',
    location: 'Digital Center',
    desc: 'Grassroots teenagers receiving practical digital orientation and keyboarding training.'
  },
  {
    url: gallery35,
    title: 'Girls Empowerment Seminar',
    location: 'Kaduna Center',
    desc: 'Female school mentors delivering inspiring confidence and health talks to girls.'
  }
];

const partnersList = [
  'West African Education Trust',
  'Enugu State Community Dev Fund',
  'Lagos Literacy Coalition',
  'Nigerian Leadership Academy',
  'Global Giving Alliance',
  'Hope & Purpose Foundation',
  'National Outreach Partners',
  'Coal City Volunteer Network'
];

export default function MainImpact({ onNavigate }: MainImpactProps) {
  // Navigation trigger
  const handleCTA = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State managers
  const [showAllStories, setShowAllStories] = useState(false);
  const [activeStory, setActiveStory] = useState<typeof successStoriesData[0] | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Copy bank transfer account
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <div className="w-full relative bg-[#F8FAFC]">
      {/* ----------------------------------------------------------------------
          SECTION 1 — OUR IMPACT (PREMIUM IMPACT OVERVIEW)
         ---------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#0D47A1]/2 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-[#F57C00]/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          <div className="max-w-4xl text-left space-y-4 mb-16 sm:mb-24">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center justify-start gap-1.5">
              <Sparkles className="w-4.5 h-4.5 text-[#F57C00]" />
              <span>Verifiable Transparency</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Creating Lasting Change Across Nigerian Communities
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              Our intervention model focuses on character, education, and moral development. We do not manufacture numbers. Behind every icon is a verified, child-centered local action plan built for absolute sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {impactAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 sm:p-8 bg-gradient-to-br ${area.bg} bg-white border border-slate-150 rounded-3xl text-left flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 hover:border-[#0D47A1]/20 transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Accent block */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#0D47A1]/5 rounded-bl-[40px] pointer-events-none" />

                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0D47A1]/5">
                    <area.icon className={`w-5.5 h-5.5 ${area.color}`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#0D47A1]">
                      {area.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>

                {/* Highly structured, easy-to-replace live statistics placeholders */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F57C00]" />
                    <span>Verified Metrics</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold bg-[#0D47A1]/5 text-[#0D47A1] px-2.5 py-1 rounded-full group-hover:bg-[#0D47A1] group-hover:text-white transition-all duration-300">
                    {area.statPlaceholder}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 2 — THEORY OF CHANGE (HORIZONTAL PROCESS JOURNEY)
         ---------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden w-full">
        {/* Dynamic backdrop glow lines */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F57C00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0D47A1]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          <div className="max-w-4xl text-left space-y-4 mb-20">
            <span className="text-[#F57C00] font-mono text-xs font-bold uppercase tracking-widest block">
              Our Strategic Model
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">
              The DRYCI Theory of Change
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              Our visual roadmap is more than a strategy &ndash; it is an active generational pipeline translating initial child potential into sustainable local transformation.
            </p>
          </div>

          {/* Desktop horizontal flow / Mobile vertical timeline */}
          <div className="relative max-w-7xl mx-auto">
            {/* Desktop continuous SVG connection line */}
            <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-1 z-0 overflow-hidden">
              <svg className="w-full h-full" fill="none">
                <line 
                  x1="0" y1="2" x2="100%" y2="2" 
                  stroke="rgba(245,124,0,0.25)" 
                  strokeWidth="3" 
                  strokeDasharray="8 8" 
                />
                <line 
                  x1="0" y1="2" x2="100%" y2="2" 
                  stroke="#F57C00" 
                  strokeWidth="3" 
                  strokeDasharray="8 8" 
                  className="animate-[dash_15s_linear_infinite]"
                  style={{ strokeDashoffset: -100 }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
              {theorySteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-6 group"
                >
                  {/* Step Connector Indicator for Mobile */}
                  <div className="lg:hidden relative flex flex-col items-center shrink-0 self-stretch">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-[#F57C00] flex items-center justify-center font-bold font-mono text-sm shadow-inner group-hover:border-[#F57C00]">
                      {idx + 1}
                    </div>
                    {idx < theorySteps.length - 1 && (
                      <div className="w-0.5 flex-grow bg-slate-800 border-dashed border-l-2 border-slate-700/60 my-2 group-hover:border-[#F57C00]/40 transition-colors duration-300" />
                    )}
                  </div>

                  {/* Desktop Step Bubble */}
                  <div className="hidden lg:flex w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700/50 flex-col items-center justify-center text-[#F57C00] shadow-2xl relative transition-all duration-300 group-hover:scale-110 group-hover:border-[#F57C00] group-hover:bg-slate-950">
                    <step.icon className="w-8 h-8" />
                    <span className="absolute -bottom-2 bg-slate-950 border border-slate-800 text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-slate-300">
                      {step.highlight}
                    </span>
                  </div>

                  {/* Process details */}
                  <div className="space-y-2 max-w-sm">
                    <span className="lg:hidden text-[#F57C00] text-[9px] font-mono font-extrabold uppercase tracking-widest bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
                      {step.highlight}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight pt-1 lg:pt-0 group-hover:text-[#F57C00] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 3 — SUCCESS STORIES (LIVES BEING TRANSFORMED)
         ---------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="max-w-4xl text-left space-y-4 mb-16 sm:mb-20">
            <span className="text-[#0D47A1] font-mono text-sm uppercase tracking-widest font-extrabold block">
              Verified Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Lives Being Transformed
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              We focus on absolute integrity. These are real, verified Nigerian youth who participated in DRYCI programmes. Here are their self-authored reflections, showing pride, self-determination, and purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
            <AnimatePresence mode="popLayout">
              {successStoriesData.slice(0, showAllStories ? successStoriesData.length : 3).map((story, i) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 border border-slate-150 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-5 sm:p-6 space-y-5 flex-grow">
                    {/* Visual Photo frame representing Nigerian student */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-100">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur border border-white/10 px-2 py-0.5 rounded text-[8px] text-white font-mono uppercase tracking-widest flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-orange-500" />
                        <span>{story.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Profile and Story CTA section */}
                  <div className="p-5 sm:p-6 pt-0 mt-auto border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="font-poppins font-bold text-slate-900 text-xs sm:text-sm">
                        {story.name}
                      </h4>
                      <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-[#F57C00] block mt-0.5">
                        {story.program}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveStory(story)}
                      className="px-3 py-2 bg-white hover:bg-[#0D47A1] hover:text-white text-[#0D47A1] border border-slate-150 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                    >
                      Read Full Story
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-left">
            <button
              onClick={() => setShowAllStories(!showAllStories)}
              className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
            >
              {showAllStories ? 'Show Fewer Stories' : 'View More Stories'}
            </button>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 4 — GALLERY (AUTHENTIC NIGERIAN MASONRY GALLERY)
         ---------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0D47A1]/2 border-t border-b border-slate-100 relative w-full">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="max-w-4xl text-left space-y-4 mb-16 sm:mb-20">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center justify-start gap-1.5">
              <Camera className="w-4 h-4 text-[#F57C00] animate-pulse" />
              <span>DRYCI Field Lens</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Honest Moments, Real Impact
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              A visually immersive documentary record of our actual youth seminars, community libraries, computer classes, and water-well distributions in Nigeria.
            </p>
          </div>

          {/* Grid Layout of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-sm cursor-pointer select-none"
              >
                {/* Image element with zoom transition */}
                <img 
                  src={image.url} 
                  alt={image.title} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const titleLower = image.title.toLowerCase();
                    if (titleLower.includes('reading') || titleLower.includes('library') || titleLower.includes('writing') || titleLower.includes('classroom')) {
                      target.src = heroSection1;
                    } else if (titleLower.includes('mentorship') || titleLower.includes('seminar') || titleLower.includes('guidance')) {
                      target.src = heroSection3;
                    } else {
                      target.src = heroSection5;
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 pointer-events-none" />
                
                {/* Viewfinder brackets in corner */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/50 rounded-tl group-hover:border-[#F57C00] transition-colors" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/50 rounded-br group-hover:border-[#0D47A1] transition-colors" />

                {/* Caption Block */}
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <div className="flex items-center gap-1 text-[#F57C00] font-mono text-[9px] uppercase tracking-wider font-extrabold">
                    <MapPin className="w-3 h-3" />
                    <span>{image.location}</span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white leading-tight">
                    {image.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 5 — OUR PARTNERS (INFINITE SCROLL CAROUSEL)
         ---------------------------------------------------------------------- */}
      <section className="py-20 bg-white relative overflow-hidden w-full border-b border-slate-150">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="max-w-4xl text-left space-y-4 mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Together We Create Greater Impact
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-3xl leading-relaxed">
              We work hand-in-hand with civic associations, educational networks, local trusts, and corporate sponsors to secure a flourishing future for local youth.
            </p>
          </div>

          {/* Self-contained marquee style block */}
          <div className="relative w-full overflow-hidden py-4 w-full">
            {/* Inject a temporary custom keyframe for infinite scroll */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes marquee-scroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee-scroll 25s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}} />

            {/* Gradient masks for soft fade at edges */}
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-[200%] md:w-[150%] animate-marquee">
              {/* Render items twice to build a continuous loop */}
              {[...partnersList, ...partnersList].map((partner, index) => (
                <div 
                  key={index}
                  className="px-6 py-4 mx-3 bg-slate-50 border border-slate-150 rounded-2xl flex items-center justify-center shrink-0 min-w-[170px] shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#0D47A1]/5 text-[#0D47A1] flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-poppins font-extrabold text-[10px] text-slate-700 tracking-tight uppercase leading-none">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleCTA('contact')}
              className="px-6 py-3.5 bg-slate-50 border border-slate-200 text-slate-800 hover:bg-[#0D47A1] hover:text-white hover:border-[#0D47A1] font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              Partner With DRYCI
            </button>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 6 — FINAL CALL TO ACTION (IMMERSIVE BANNER & SUPPORT MODAL)
         ---------------------------------------------------------------------- */}
      <section className="py-24 sm:py-36 bg-slate-950 text-white relative overflow-hidden w-full text-center">
        {/* Large background image of Nigerian children smiling with dark visual overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={gallery33} 
            alt="Nigerian community action" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-15 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        </div>

        {/* Floating background glowing orbits */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#0D47A1]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-[#F57C00]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="w-full px-6 sm:px-[48px] lg:px-[80px] xl:px-[120px] relative z-10 max-w-5xl mx-auto space-y-10">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-1.5">
              <Heart className="w-4 h-4 fill-current text-[#F57C00] animate-pulse" />
              <span>Shape the Future</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Together, We Can Turn More Dreams Into Reality
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Every child deserves educational access. Every young person deserves ethical direction and support. Together, we can build a strong local foundation for tomorrow.
            </p>
          </div>

          {/* Quick core tenets row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 border-t border-b border-white/5 py-6">
            <div className="text-center">
              <div className="text-white font-serif text-xl font-bold">Safe Libraries</div>
              <div className="text-slate-400 text-xs mt-1">Open, bright spaces for local students.</div>
            </div>
            <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-white/5 pt-4 sm:pt-0">
              <div className="text-white font-serif text-xl font-bold">Moral Mentors</div>
              <div className="text-slate-400 text-xs mt-1">Ethical orientation for grassroots peers.</div>
            </div>
            <div className="text-center border-t sm:border-t-0 pt-4 sm:pt-0">
              <div className="text-white font-serif text-xl font-bold">Direct Access</div>
              <div className="text-slate-400 text-xs mt-1">Clean water well structures commissioned.</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4 max-w-2xl mx-auto">
            <button
              onClick={() => handleCTA('volunteer')}
              className="px-8 py-4 bg-[#F57C00] hover:bg-[#D86D00] hover:scale-105 active:scale-95 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 text-center cursor-pointer"
            >
              Become a Volunteer
            </button>

            <button
              onClick={() => handleCTA('contact')}
              className="px-8 py-4 border-2 border-white/20 hover:border-white hover:bg-white hover:text-slate-950 hover:scale-105 active:scale-95 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 text-center cursor-pointer"
            >
              Partner With Us
            </button>

            <button
              onClick={() => setShowDonationModal(true)}
              className="px-8 py-4 bg-[#0D47A1] hover:bg-[#0A3780] hover:scale-105 active:scale-95 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center cursor-pointer"
            >
              Support Our Mission
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================================
          INTERACTIVE OVERLAYS & MODALS
         ====================================================================== */}

      {/* 1. SUCCESS STORY MODAL */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStory(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-2xl z-10 text-left flex flex-col max-h-[90vh]"
            >
              {/* Header profile overlay */}
              <div className="relative aspect-video w-full bg-slate-900 shrink-0">
                <img 
                  src={activeStory.image} 
                  alt={activeStory.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-black/40" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveStory(null)}
                  className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900/90 text-white p-2 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 text-left">
                  <div className="bg-[#F57C00] text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md inline-block mb-2 shadow-sm">
                    {activeStory.program}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none drop-shadow-sm">
                    {activeStory.name}
                  </h3>
                  <p className="text-[#0D47A1] text-xs font-mono font-bold uppercase tracking-wider mt-1.5">
                    {activeStory.location}
                  </p>
                </div>
              </div>

              {/* Story text */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <p className="text-slate-800 text-sm sm:text-base italic font-serif leading-relaxed bg-slate-50 border-l-4 border-[#0D47A1] p-4 rounded-r-xl">
                  &ldquo;{activeStory.quote}&rdquo;
                </p>
                
                <div className="space-y-3 pt-2">
                  <h4 className="font-poppins font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                    The Transformative Journey
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {activeStory.fullStory}
                  </p>
                </div>
              </div>

              {/* Close row */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. GALLERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute inset-0 bg-slate-950/95"
            />

            {/* Container */}
            <div className="relative w-full max-w-4xl z-10 flex flex-col items-center">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Slide controls */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center">
                
                {/* Preceding Arrow */}
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1))}
                  className="absolute left-4 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-colors z-20 cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main image with transition */}
                <motion.img 
                  key={activeLightboxIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={galleryImages[activeLightboxIndex].url}
                  alt={galleryImages[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Proceeding Arrow */}
                <button
                  onClick={() => setActiveLightboxIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-colors z-20 cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Viewfinder corner brackets for documentary photography framing */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/30 rounded-tl pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/30 rounded-tr pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/30 rounded-bl pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/30 rounded-br pointer-events-none" />
              </div>

              {/* Caption and index info bar */}
              <div className="w-full text-left mt-4 text-white space-y-1 px-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold">
                    <MapPin className="w-4 h-4" />
                    <span>{galleryImages[activeLightboxIndex].location}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {activeLightboxIndex + 1} / {galleryImages.length}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {galleryImages[activeLightboxIndex].title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
                  {galleryImages[activeLightboxIndex].desc}
                </p>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. SUPPORT / DONATION POPUP */}
      <AnimatePresence>
        {showDonationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDonationModal(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-lg bg-white border border-slate-150 rounded-3xl overflow-hidden shadow-2xl z-10 text-left p-6 sm:p-8 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDonationModal(false)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#0D47A1]/5 flex items-center justify-center text-[#0D47A1]">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <h3 className="font-serif text-2xl font-extrabold text-slate-900 tracking-tight">
                  Support Our Mission
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Every contribution directly supports our community libraries, student kits, clean water wells, and youth seminars. Thank you for your support.
                </p>
              </div>

              {/* NGO registry badge */}
              <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center gap-3 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest font-extrabold leading-none">Registered NGO in Nigeria</div>
                  <div className="text-xs font-bold text-slate-100 mt-1">Certified NGO &bull; Verified Mission</div>
                </div>
              </div>

              {/* Direct bank details info panel */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-600 block border-b border-slate-100 pb-2">
                  Direct Bank Transfer Options
                </span>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 relative overflow-hidden group">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Account Bank</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-950">Zenith Bank PLC</div>
                    </div>
                    <div className="bg-slate-200/50 text-slate-600 text-[8px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded border border-slate-300/30">
                      Primary Acct
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Account Name</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">Dreams to Reality Youth Initiative</div>
                  </div>

                  <div className="flex items-end justify-between gap-4 pt-1">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Account Number</div>
                      <div className="text-base sm:text-lg font-mono font-extrabold text-[#0D47A1]">1012345678</div>
                    </div>

                    <button
                      onClick={() => copyToClipboard('1012345678')}
                      className="px-3.5 py-2 bg-white border border-slate-150 rounded-xl hover:bg-[#0D47A1] hover:text-white text-slate-700 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      {copySuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Guidelines checklist */}
              <div className="space-y-2 pt-2 text-slate-500 text-xs leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% of donation goes directly to active community program expenses.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Official electronic receipts dispatched upon request to <strong>info@dryci.org</strong>.</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowDonationModal(false)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                >
                  Close Panel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
