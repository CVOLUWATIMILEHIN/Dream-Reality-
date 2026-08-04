import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Check, 
  ExternalLink, 
  Users, 
  GraduationCap, 
  Award, 
  Lightbulb, 
  BookOpen, 
  MessageSquare,
  ShieldCheck,
  Send,
  X,
  Brain,
  Shield,
  TrendingUp,
  Target,
  UserCheck,
  Mail,
  Phone,
  FileText,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import local images for authenticity
import epiphanyFlyer from './epiph.png';
import uploadedImage49 from './gallery_calabar_gallery_49.jpg';
import uploadedImage50 from './gallery_calabar_gallery_50.jpg';

// Import actual high-quality real uploaded DRYCI Calabar outreach images
import uploadedImage1 from './gallery_calabar_20260205_115959.jpg';
import uploadedImage2 from './gallery_calabar_20260205_111722.jpg';
import uploadedImage3 from './gallery_calabar_20260205_112327.jpg';
import uploadedImage4 from './gallery_calabar_20260205_113039.jpg';

const EPIPHANY_HERO_IMAGES = [
  uploadedImage49,
  uploadedImage50,
  epiphanyFlyer,
  uploadedImage1,
  uploadedImage2,
  uploadedImage3,
  uploadedImage4
];

// Import trustees/speakers images
import imageModestus from './Pastor Modestus Chukwulaka.jpeg';
import imageEmeka from './Pastor Emeka Onuchukwu.jpeg';
import imageVal from './Mr. Val Okafor..jpeg';
import imageTaiwo from './Professor Taiwo Amos.jpeg';

interface EpiphanyProps {
  onNavigate: (section: string) => void;
}

export default function MainEpiphany({ onNavigate }: EpiphanyProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle through hero slides every 6 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % EPIPHANY_HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  // Official Google Form link as specified by the user
  const GOOGLE_FORMS_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdVtEEFM1s_jdzJcSP51zjHxCcmgdR-bL0Uc_O1gFcurIJPiw/viewform";

  // Calculate countdown to August 26, 2026
  useEffect(() => {
    const targetDate = new Date('2026-08-26T08:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    window.open(GOOGLE_FORMS_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Verbatim details from the uploaded document
  const daughterGains = [
    {
      title: "Purpose discovery and identity development",
      icon: Target,
      desc: "Guiding girls to unlock their unique potential, establish stable definitions of self-worth, and map out a goal-driven future."
    },
    {
      title: "Leadership and influence",
      icon: Award,
      desc: "Nurturing ethical group coordination, decision-making, and modeling positive peer influence."
    },
    {
      title: "Academic excellence and effective learning strategies",
      icon: GraduationCap,
      desc: "Fostering uncompromised integrity in studies, cognitive resilience, and active academic preparation."
    },
    {
      title: "Goal setting and personal productivity",
      icon: TrendingUp,
      desc: "Teaching girls how to turn long-term dreams into actionable daily routines and plans."
    },
    {
      title: "Character, integrity and self-discipline",
      icon: ShieldCheck,
      desc: "Instilling deep-rooted moral accountability, community responsibility, and self-discipline."
    },
    {
      title: "Emotional intelligence and resilience",
      icon: Brain,
      desc: "Helping adolescents navigate stress, build emotional strength, self-regulation, and critical self-awareness."
    },
    {
      title: "Sexual purity, personal safety and healthy relationships",
      icon: Shield,
      desc: "Equipping participants with safety boundary mechanics, recognizing warning signs, and high-value associations."
    },
    {
      title: "Entrepreneurship and wealth creation",
      icon: Lightbulb,
      desc: "Practical introduction to micro-enterprise models, basic financial literacy, and the spirit of enterprise."
    },
    {
      title: "Communication and confidence building",
      icon: MessageSquare,
      desc: "Mastering public presentation delivery, logical arguments, and active-empathetic listening habits."
    },
    {
      title: "Personal branding and future readiness",
      icon: Sparkles,
      desc: "Unlocking paths to digital resources, technical career fields, and successful secondary school transitions."
    }
  ];

  // Speakers/Trustees array for authenticity
  const speakers = [
    {
      name: "Mr. Val Okafor",
      role: "Keynote Facilitator & Leadership Strategist",
      title: "CEO, The Val Okafor Company",
      image: imageVal
    },
    {
      name: "Prof. Taiwo Amos",
      role: "Academic Leadership Mentor",
      title: "Deputy Vice Chancellor, FUTA",
      image: imageTaiwo
    },
    {
      name: "Pastor Emeka Onuchukwu",
      role: "Entrepreneurship & Growth Mentor",
      title: "Chief Operating Officer, Alkanes Oil & Gas",
      image: imageEmeka
    },
    {
      name: "Pastor Modestus Chukwulaka",
      role: "Values & Communications Lead",
      title: "Journalist & Media Professional",
      image: imageModestus
    }
  ];

  const faqs = [
    {
      q: "Who can attend EPIPHANY 2026?",
      a: "The conference is specifically designed for high-potential girls in Senior Secondary School (SS1 - SS3). We focus on this formative transition where girls make vital choices regarding identity, character, academics, and future career paths."
    },
    {
      q: "Is the conference environment safe and supervised?",
      a: "Absolutely. Safety is our top priority. The conference is hosted entirely at Edgerly Memorial Girls' Secondary School, Calabar. Access to the venue is strictly controlled with professional security presence. Our team maintains a high ratio of female coordinators and guides to ensure complete supervision during every session."
    },
    {
      q: "Is there any cost to attend?",
      a: "No, there is absolutely no cost. The conference is 100% free and fully sponsored by DRYCI and our corporate partners. Registered girls will receive admission passes, customized leadership manuals, complete school stationeries, notebooks, and lunches throughout the days at zero cost to parents."
    },
    {
      q: "Do participants receive certificates?",
      a: "Yes. Every student who successfully participates in all sessions and completes the daily leadership exercises will be awarded an official DRYCI Leadership Excellence Certificate during the graduation ceremony."
    },
    {
      q: "What should the participants bring to the venue?",
      a: "We provide all writing materials, conference backpacks, journals, and educational resources. Students should come neatly dressed in their school uniforms or modest smart-casual attire, accompanied by their accredited school guide or parent."
    },
    {
      q: "How do parents and guardians register their wards?",
      a: "Registration is completed securely online through our official Google Registration Form. Simply click any 'Register Now' button on this page to open the secure form, fill out your daughter's details, and submit. Once processed, our team will send an official accreditation pass to your email/phone."
    }
  ];

  return (
    <div id="epiphany-root-view" className="w-full bg-[#F8FAFC] overflow-x-hidden flex flex-col text-slate-800">
      
      {/* ========================================== */}
      {/* PREMIUM HERO SECTION                       */}
      {/* ========================================== */}
      <section 
        id="epiphany-hero" 
        className="relative min-h-[calc(100vh-76px)] lg:min-h-[calc(100vh-84px)] w-full overflow-hidden flex flex-col justify-center bg-slate-950 text-white"
      >
        <div id="epiphany-hero-bg" className="absolute inset-0 z-0">
          {/* Authentic photography slideshow in background with clean opacity */}
          {EPIPHANY_HERO_IMAGES.map((imgSrc, index) => (
            <img 
              key={index}
              id={`epiphany-hero-bg-img-${index}`}
              src={imgSrc}
              alt={`Epiphany Slide ${index + 1}`}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out will-change-transform ${
                index === currentSlide 
                  ? 'opacity-25 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            />
          ))}
          <div id="epiphany-hero-bg-overlay" className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/50" />
          
          {/* Ambient subtle editorial glow rings */}
          <div id="epiphany-glow-orange" className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F57C00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div id="epiphany-glow-blue" className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0D47A1]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        </div>

        <div id="epiphany-hero-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 py-12 md:py-20 flex flex-col justify-center gap-12">
          
          {/* MOBILE CONTENT ORDER (< 768px) - Strictly matches requested order */}
          <div id="epiphany-hero-mobile" className="space-y-5 text-left max-w-xl my-auto block md:hidden">
            {/* 1. Conference Badge */}
            <div id="epiphany-mobile-badge" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F57C00]/10 border border-[#F57C00]/25 text-[#F57C00] text-xs font-mono font-bold uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>ANNUAL GIRLS' SUMMIT</span>
            </div>
            
            {/* 2. EPIPHANY title */}
            <h1 id="epiphany-mobile-title" className="font-serif text-5xl sm:text-6xl font-black tracking-tight leading-none text-white">
              EPIPHANY
            </h1>

            {/* 3. Subtitle */}
            <h2 id="epiphany-mobile-sub" className="font-serif text-base sm:text-lg font-bold text-slate-100 tracking-wide border-l-4 border-[#F57C00] pl-4 py-0.5">
              DRYCI Girls' Leadership Conference 2026
            </h2>

            {/* 4. Event Date */}
            <div id="epiphany-mobile-date" className="text-xs sm:text-sm font-mono text-[#F57C00] font-black uppercase tracking-widest">
              26th – 28th August 2026
            </div>

            {/* 5. Primary CTA Buttons (Immediately visible without scrolling, equal-width side-by-side or stacked, min 16px spacing) */}
            <div id="epiphany-mobile-ctas" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full">
              <a
                id="epiphany-mobile-btn-register"
                href={GOOGLE_FORMS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 bg-[#0D47A1] hover:bg-blue-700 text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer shadow-lg active:translate-y-px transition-all w-full sm:flex-1 text-center"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                id="epiphany-mobile-btn-learn"
                onClick={() => handleScrollToSection('epiphany-letter')}
                className="h-12 px-6 border-2 border-white/30 hover:border-white/60 text-white font-extrabold rounded-full backdrop-blur-sm bg-black/20 hover:bg-white hover:text-[#0D47A1] transition-all flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider w-full sm:flex-1"
              >
                <span>Read Letter</span>
                <ArrowRight className="w-4 h-4 text-[#F57C00]" />
              </button>
            </div>

            {/* 6. Short description (maximum 2-3 lines) */}
            <p id="epiphany-mobile-desc" className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-light max-w-md line-clamp-3">
              Theme: Awakening Purpose. Igniting Leadership. Transforming Lives.<br />
              Equipping young girls with ethical character, academic grit, and leadership vision to navigate peer pressures and excel.
            </p>

            {/* 7. Countdown Timer */}
            <div id="epiphany-mobile-timer-section" className="pt-2">
              <span id="epiphany-mobile-timer-label" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-bold">CONFERENCE COUNTDOWN</span>
              <div id="epiphany-mobile-timer-grid" className="grid grid-cols-4 gap-2 max-w-xs">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds }
                ].map((t) => (
                  <div id={`timer-mobile-${t.label}`} key={t.label} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-2 px-1 text-center">
                    <span className="text-sm font-mono font-extrabold text-[#F57C00] block leading-none">{String(t.value).padStart(2, '0')}</span>
                    <span className="text-[7px] font-mono tracking-wider text-slate-400 block mt-1 font-bold">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Hero image (No AI, authentic Nigerian secondary girls from previous drives) */}
            <div id="epiphany-mobile-hero-frame" className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg mt-2 max-w-xs mx-auto">
              <img 
                id="epiphany-mobile-hero-img"
                src={uploadedImage4} 
                alt="Nigerian Secondary School Girls receiving books" 
                className="w-full h-auto object-cover max-h-[140px] sm:max-h-[180px]"
                referrerPolicy="no-referrer"
              />
              <div id="epiphany-mobile-hero-overlay" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                <span className="text-[8px] font-mono text-white tracking-wider uppercase font-bold">Authentic DRYCI Calabar Program</span>
              </div>
            </div>
          </div>


          {/* DESKTOP & TABLET HERO CONTENT (>= 768px, Unchanged premium look) */}
          <div id="epiphany-hero-desktop" className="space-y-6 text-left max-w-5xl my-auto hidden md:block">
            <div id="epiphany-desktop-badge" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F57C00]/10 border border-[#F57C00]/25 text-[#F57C00] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>DRYCI FLAGSHIP CONFERENCE 2026</span>
            </div>
            
            <h1 id="epiphany-desktop-title" className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-black tracking-tight leading-none text-white block">
              EPIPHANY
            </h1>

            <h2 id="epiphany-desktop-sub" className="font-serif text-xl sm:text-2xl lg:text-3.5xl font-bold text-slate-100 tracking-wide max-w-4xl border-l-4 border-[#F57C00] pl-6 py-1">
              DRYCI Girls' Leadership Conference 2026
            </h2>

            <div id="epiphany-desktop-theme-info" className="space-y-2">
              <div id="epiphany-desktop-date" className="text-base sm:text-lg lg:text-xl font-mono text-[#F57C00] font-black uppercase tracking-widest">
                Wednesday 26th - Friday 28th August, 2026
              </div>
              <p id="epiphany-desktop-theme" className="text-slate-400 font-mono text-sm uppercase tracking-wider">
                Theme: <span className="text-white font-serif font-semibold italic text-base">"Awakening Purpose. Igniting Leadership. Transforming Lives."</span>
              </p>
            </div>

            <p id="epiphany-desktop-lead" className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light max-w-3xl">
              A carefully designed leadership and personal development conference created exclusively for girls in secondary schools to discover who they are, understand their purpose, develop practical life skills, and become confident, responsible and value-driven leaders.
            </p>

            {/* Live Countdown Timer Grid */}
            <div id="epiphany-desktop-timer-section" className="py-4">
              <span id="epiphany-desktop-timer-label" className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">CONFERENCE COUNTDOWN</span>
              <div id="epiphany-desktop-timer-flex" className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds }
                ].map((t) => (
                  <div id={`timer-desktop-${t.label}`} key={t.label} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 min-w-[75px] sm:min-w-[90px] text-center">
                    <span className="text-2xl sm:text-3.5xl font-mono font-extrabold text-[#F57C00] block leading-none">{String(t.value).padStart(2, '0')}</span>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 block mt-1.5 font-bold">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div id="epiphany-desktop-ctas-row" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4">
              <a
                id="epiphany-desktop-btn-register"
                href={GOOGLE_FORMS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[60px] px-10 bg-[#0D47A1] hover:bg-blue-700 text-white font-extrabold rounded-full transition-all duration-300 flex items-center justify-center gap-3 text-base uppercase tracking-wider cursor-pointer shadow-xl hover:-translate-y-1 text-center"
              >
                <span>Register Now</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <button
                id="epiphany-desktop-btn-learn"
                onClick={() => handleScrollToSection('epiphany-letter')}
                className="h-[60px] px-10 border-2 border-white/30 hover:border-white/60 text-white font-extrabold rounded-full backdrop-blur-sm bg-black/20 hover:bg-white hover:text-[#0D47A1] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer text-base uppercase tracking-wider"
              >
                <span>Read Letter to Parents</span>
                <ArrowRight className="w-5 h-5 text-[#F57C00]" />
              </button>
            </div>
          </div>

          {/* Quick info row */}
          <div id="epiphany-hero-quick-info" className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div id="quick-info-date" className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-[#F57C00]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono tracking-wider block uppercase">DATE</span>
                <span className="text-sm font-semibold text-white">Wednesday 26th - Friday 28th August, 2026</span>
              </div>
            </div>
            
            <div id="quick-info-venue" className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-[#F57C00]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono tracking-wider block uppercase">PHYSICAL VENUE</span>
                <span className="text-sm font-semibold text-white">Edgerly Memorial Girls' Secondary School, Calabar</span>
              </div>
            </div>

            <div id="quick-info-time" className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-[#F57C00]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono tracking-wider block uppercase">TIME & ACCESS</span>
                <span className="text-sm font-semibold text-[#F57C00]">8:00 AM – 3:00 PM / Free Registration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 1: THE PARENT BRIEF LETTER         */}
      {/* ========================================== */}
      <section id="epiphany-letter" className="pt-12 lg:pt-16 pb-8 bg-white relative overflow-hidden">
        <div id="epiphany-letter-glow-1" className="absolute top-1/4 right-0 w-96 h-96 bg-[#0D47A1]/3 rounded-full blur-[140px] pointer-events-none" />
        <div id="epiphany-letter-glow-2" className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#F57C00]/3 rounded-full blur-[140px] pointer-events-none" />
        
        <div id="epiphany-letter-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div id="epiphany-letter-grid" className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
            
            {/* Left Content column: The complete official letter verbatim */}
            <div id="letter-content-column" className="lg:col-span-7 space-y-8">
              <div id="letter-meta" className="space-y-2">
                <span id="letter-meta-org" className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
                  DREAMS TO REALITY YOUTH AND CHILDREN INITIATIVE (DRYCI)
                </span>
                <h2 id="letter-main-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  Dear Parent/Guardian
                </h2>
                <div id="letter-title-line" className="w-20 h-1.5 bg-[#F57C00] rounded-full" />
              </div>

              {/* Verified Verbatim Text Area */}
              <div id="letter-verbatim-text" className="font-montserrat text-slate-800 space-y-[20px] lg:space-y-[24px] text-[16px] lg:text-[18px] leading-[1.8] font-normal">
                <p id="letter-salutation" className="font-montserrat font-bold text-slate-900 text-[18px] lg:text-[20px] leading-[1.8]">
                  Greetings.
                </p>
                <p id="letter-p1">
                  Your daughter has been selected to participate in the DRYCI Girls' Leadership Conference 2026, a carefully designed leadership and personal development conference created exclusively for girls in secondary schools.
                </p>
                
                {/* Visual quote container showing challenges precisely as worded */}
                <div id="challenges-callout-box" className="p-6 sm:p-8 bg-[#F57C00]/5 border-l-4 border-[#F57C00] rounded-r-2xl my-[20px] lg:my-[24px] space-y-3">
                  <span id="challenges-callout-label" className="text-xs font-mono font-bold text-[#F57C00] uppercase tracking-wider block">Modern Adolescent Challenges</span>
                  <p id="challenges-text" className="font-montserrat text-slate-800 text-[16px] lg:text-[18px] italic leading-[1.8]">
                    "Today's world presents young girls with enormous opportunities, but also significant challenges—identity confusion, peer pressure, poor career decisions, unhealthy relationships, declining moral values, low self-esteem, digital distractions, and uncertainty about the future."
                  </p>
                </div>

                <p id="letter-p2">
                  Recognising these realities, Dreams to Reality Youth and Children Initiative (DRYCI) has developed EPIPHANY 2026 as a transformational platform that equips girls to discover who they are, understand their purpose, develop practical life skills, and become confident, responsible and value-driven leaders.
                </p>
                <p id="letter-p3">
                  This conference combines inspirational teaching, practical learning, mentorship and leadership development in a safe, engaging and professionally coordinated environment.
                </p>
              </div>

              {/* Mini Gallery showing scholars authentic images */}
              <div id="letter-gallery-section" className="pt-6 border-t border-slate-100">
                <span id="letter-gallery-label" className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-4">DRYCI Calabar Activity Highlights</span>
                <div id="letter-gallery-grid" className="grid grid-cols-3 gap-4">
                  <div id="gallery-fig-1" className="rounded-xl overflow-hidden aspect-[4/3] border border-slate-100">
                    <img src={uploadedImage2} alt="DRYCI program panel" className="w-full h-full object-cover" />
                  </div>
                  <div id="gallery-fig-2" className="rounded-xl overflow-hidden aspect-[4/3] border border-slate-100">
                    <img src={uploadedImage3} alt="DRYCI materials drive" className="w-full h-full object-cover" />
                  </div>
                  <div id="gallery-fig-3" className="rounded-xl overflow-hidden aspect-[4/3] border border-slate-100">
                    <img src={uploadedImage1} alt="DRYCI students mentorship" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Flyer & Registration Promo column */}
            <div id="letter-promo-column" className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Promo Flyer card */}
              <div id="letter-flyer-card" className="bg-slate-50 border border-slate-150 rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
                <div id="letter-flyer-wrapper" className="relative rounded-2xl overflow-hidden aspect-[1/1] border border-slate-200 bg-white">
                  <img 
                    id="epiphany-flyer-img"
                    src={epiphanyFlyer} 
                    alt="EPIPHANY 2026 Summit Official Flyer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div id="flyer-badge" className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Official Flyer
                  </div>
                </div>

                <div id="flyer-promo-content" className="space-y-3 text-center">
                  <h3 id="flyer-promo-title" className="font-serif text-lg font-bold text-slate-900">EPIPHANY 2026 Girls' Summit</h3>
                  <p id="flyer-promo-desc" className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                    An uncompromised training forum structured under proper safety protocols, verified educational leaders, and experienced female coordinators.
                  </p>
                  
                  <div id="flyer-cta-block" className="pt-2">
                    <a
                      id="flyer-btn-register"
                      href={GOOGLE_FORMS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-12 bg-[#0D47A1] hover:bg-blue-700 text-white font-extrabold rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all active:translate-y-px text-center"
                    >
                      <span>Register Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p id="flyer-form-note" className="text-[10px] text-slate-400 mt-2 font-mono">
                      No sign-up fee. Attendance is 100% free.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: WHAT YOUR DAUGHTER WILL GAIN     */}
      {/* ========================================== */}
      <section id="epiphany-gains" className="pt-8 pb-12 lg:pb-16 bg-slate-50/50 relative overflow-hidden border-t border-b border-slate-100/60">
        <div id="gains-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          {/* Section Header exactly formatted */}
          <div id="gains-header" className="max-w-4xl mx-auto space-y-3 mb-[24px] lg:mb-[32px] text-center">
            <span id="gains-badge" className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              CURRICULUM SPECIFICATION
            </span>
            <h2 id="gains-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              What Your Daughter Will Gain
            </h2>
            <div id="gains-line" className="w-20 h-1.5 bg-[#F57C00] rounded-full mx-auto" />
            <p id="gains-lead" className="text-slate-700 text-base sm:text-lg font-serif italic max-w-2xl mx-auto pt-2">
              Participants will receive practical training on:
            </p>
          </div>

          {/* Core Gains Grid with exact labels from document */}
          <div id="gains-grid" className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {daughterGains.map((gain, idx) => {
              const Icon = gain.icon;
              return (
                <div 
                  id={`gain-card-${idx}`}
                  key={gain.title}
                  className="bg-white border border-slate-150 rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 text-left flex gap-5 items-start group"
                >
                  <div id={`gain-icon-wrap-${idx}`} className="w-12 h-12 rounded-2xl bg-[#0D47A1]/5 text-[#0D47A1] flex items-center justify-center shrink-0 group-hover:bg-[#0D47A1] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#F57C00] group-hover:text-white transition-colors" />
                  </div>
                  <div id={`gain-body-${idx}`} className="space-y-1.5">
                    <h3 id={`gain-title-${idx}`} className="font-serif text-lg font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#0D47A1] transition-colors">
                      {gain.title}
                    </h3>
                    <p id={`gain-desc-${idx}`} className="text-slate-600 text-sm sm:text-[15px] leading-[1.8] font-montserrat font-normal">
                      {gain.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EXACT CLOSING PARAGRAPH */}
          <div id="gains-closing-wrapper" className="max-w-3xl mx-auto mt-10 lg:mt-12 text-center">
            <div id="gains-closing-box" className="p-6 sm:p-8 bg-white border border-slate-200 rounded-[28px] shadow-sm font-montserrat text-slate-800 text-[16px] lg:text-[18px] italic leading-[1.8]">
              "In addition to these sessions, participants will interact with experienced professionals, educators, mentors and transformational leaders who will inspire them to pursue lives of excellence and purpose."
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: CONFERENCE SPECIFICATIONS TABLE */}
      {/* ========================================== */}
      <section id="epiphany-info" className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div id="info-glow-overlay" className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <img 
            id="info-glow-img"
            src={uploadedImage3}
            alt="Epiphany Specifications Background"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div id="info-overlay-gradient" className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60 z-10" />

        <div id="info-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-20">
          <div id="info-header" className="max-w-4xl mx-auto space-y-4 mb-16 text-center">
            <span id="info-badge" className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
              OFFICIAL EVENT SPECIFICATIONS
            </span>
            <h2 id="info-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-none">
              Conference Information
            </h2>
            <div id="info-line" className="w-20 h-1.5 bg-[#F57C00] rounded-full mx-auto" />
          </div>

          {/* Authentic Specifications grid layout following document structure exactly */}
          <div id="info-specs-grid" className="max-w-[1000px] mx-auto bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-md">
            {[
              { label: "Conference", val: "DRYCI Girls' Leadership Conference 2026", desc: "Official registered title" },
              { label: "Theme", val: "EPIPHANY", desc: "Awakening Purpose. Igniting Leadership. Transforming Lives." },
              { label: "Target Participants", val: "Girls in Senior Secondary School (SS1–SS3)", desc: "Senior formative adolescent levels" },
              { label: "Date", val: "Wednesday 26th - Friday 28th August, 2026.", desc: "Three full training days" },
              { label: "Venue", val: "Edgerly Memorial Girls' Secondary School, Calabar", desc: "Fully secure secondary school facility" },
              { label: "Time", val: "8am - 3pm", desc: "With appropriate refreshment breaks" }
            ].map((spec, idx) => (
              <div 
                id={`spec-row-${idx}`}
                key={spec.label} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:p-8 items-center text-left ${idx !== 5 ? 'border-b border-white/5' : ''}`}
              >
                <div id={`spec-label-col-${idx}`} className="md:col-span-3">
                  <span id={`spec-label-${idx}`} className="text-[#F57C00] font-mono text-xs font-bold uppercase tracking-wider block">
                    {spec.label}
                  </span>
                </div>
                <div id={`spec-val-col-${idx}`} className="md:col-span-6">
                  <span id={`spec-val-${idx}`} className="text-white font-serif text-lg sm:text-xl font-bold block leading-snug">
                    {spec.val}
                  </span>
                </div>
                <div id={`spec-desc-col-${idx}`} className="md:col-span-3 md:text-right">
                  <span id={`spec-desc-${idx}`} className="text-slate-400 text-xs font-sans font-light block">
                    {spec.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: SAFETY, WELFARE & SUPERVISION  */}
      {/* ========================================== */}
      <section id="epiphany-safety" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div id="safety-glow" className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0D47A1]/2 rounded-full blur-[140px] pointer-events-none" />
        
        <div id="safety-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div id="safety-grid" className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            
            {/* Left Column: Image representing safe, structured environment */}
            <div id="safety-img-col" className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] border border-slate-100 shadow-xl bg-slate-50">
              <img 
                id="safety-illustration-img"
                src={uploadedImage1} 
                alt="Safe educational environment DRYCI Calabar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div id="safety-img-overlay" className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6" />
            </div>

            {/* Right Column: Verbatim safety text */}
            <div id="safety-text-col" className="lg:col-span-7 space-y-6">
              <div id="safety-meta" className="space-y-2">
                <span id="safety-badge" className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
                  PHYSICAL INTEGRITY & SECURITY
                </span>
                <h2 id="safety-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  Safety, Welfare & Supervision
                </h2>
                <div id="safety-line" className="w-20 h-1.5 bg-[#F57C00] rounded-full" />
              </div>

              <div id="safety-verbatim-body" className="space-y-6 text-slate-700 font-sans text-sm sm:text-base leading-relaxed font-light">
                <p id="safety-lead-p" className="font-serif text-lg font-semibold text-slate-800">
                  The safety and wellbeing of every participant remain our highest priority.
                </p>
                
                <p id="safety-bullets-intro" className="text-slate-500 text-xs sm:text-sm tracking-wider uppercase font-bold font-mono">
                  Throughout the conference:
                </p>

                {/* Bullets precisely worded */}
                <ul id="safety-bullets-list" className="space-y-4">
                  {[
                    "Participants will remain under proper supervision.",
                    "Activities will be conducted in a secure and structured learning environment.",
                    "Only approved facilitators and volunteers will coordinate sessions."
                  ].map((item, idx) => (
                    <li id={`safety-bullet-li-${idx}`} key={idx} className="flex gap-4 items-start bg-[#F8FAFC] border border-slate-100 p-4 rounded-2xl shadow-sm">
                      <div id={`safety-bullet-check-${idx}`} className="w-6 h-6 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#F57C00]" />
                      </div>
                      <span id={`safety-bullet-span-${idx}`} className="text-slate-800 font-medium text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* EXACT Safety summary paragraph */}
                <p id="safety-closing-p" className="font-serif italic border-l-4 border-[#0D47A1] pl-6 py-1 text-slate-600 mt-4">
                  The programme has been carefully designed to promote holistic growth while maintaining appropriate standards of safety, dignity and respect.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: TRUSTED TRUSTEES & SPEAKERS     */}
      {/* ========================================== */}
      <section id="epiphany-trustees" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div id="trustees-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center">
          
          <div id="trustees-header" className="max-w-4xl mx-auto space-y-4 mb-16 text-center">
            <span id="trustees-badge" className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              ACCREDITED NGO LEADERSHIP
            </span>
            <h2 id="trustees-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              DRYCI Trustees & Facilitators
            </h2>
            <div id="trustees-line" className="w-20 h-1.5 bg-[#F57C00] rounded-full mx-auto" />
            <p id="trustees-lead" className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed pt-2">
              Our sessions are governed and facilitated by highly distinguished academics, corporate administrators, and media executives who lead DRYCI's mission with uncompromised integrity.
            </p>
          </div>

          <div id="trustees-grid" className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((sp, idx) => (
              <div 
                id={`trustee-card-${idx}`}
                key={sp.name}
                className="bg-white border border-slate-150 rounded-[32px] p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div id={`trustee-img-wrapper-${idx}`} className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200 mb-4 group-hover:border-[#0D47A1] transition-colors shadow flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100">
                  {sp.image && !imageErrors[sp.name] ? (
                    <img 
                      src={sp.image} 
                      alt={sp.name} 
                      onError={() => {
                        setImageErrors(prev => ({ ...prev, [sp.name]: true }));
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <span className="font-serif font-extrabold text-3xl tracking-wider block uppercase select-none text-white/80">
                      {sp.name.split(' ').filter(n => !n.includes('.') && n !== 'Professor' && n !== 'Prof' && n !== 'Pastor' && n !== 'Barrister').map(n => n[0]).join('') || sp.name[0]}
                    </span>
                  )}
                </div>
                <h3 id={`trustee-name-${idx}`} className="font-serif text-lg font-extrabold text-slate-900 group-hover:text-[#0D47A1] transition-colors leading-none mb-1">{sp.name}</h3>
                <span id={`trustee-role-${idx}`} className="text-xs font-mono font-bold text-[#F57C00] block mb-2">{sp.role}</span>
                <span id={`trustee-title-${idx}`} className="text-slate-400 text-xs leading-snug">{sp.title}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS      */}
      {/* ========================================== */}
      <section id="epiphany-faq" className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div id="faq-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          <div id="faq-header" className="max-w-[1300px] mx-auto text-center space-y-4 mb-16">
            <span id="faq-badge" className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              PARENTAL ADVISORY INFORMATION
            </span>
            <h2 id="faq-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div id="faq-line" className="w-20 h-1.5 bg-[#F57C00] rounded-full mx-auto" />
            <p id="faq-lead" className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed pt-2">
              Quick answers about attendance permission, certification logistics, security parameters, and registration.
            </p>
          </div>

          <div id="faq-accordion" className="max-w-3xl mx-auto space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  id={`faq-item-${idx}`}
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-6 sm:p-7 flex justify-between items-center text-left font-serif font-bold text-base sm:text-lg text-slate-900 cursor-pointer select-none focus:outline-none"
                  >
                    <span id={`faq-q-text-${idx}`} className="pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#F57C00] transition-transform shrink-0 duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div id={`faq-a-text-${idx}`} className="p-6 sm:p-7 pt-0 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 7: REGISTRATION CTA                */}
      {/* ========================================== */}
      <section id="epiphany-register" className="py-20 md:py-32 bg-gradient-to-br from-[#0D47A1] via-[#0A3780] to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div id="register-bg-grid" className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div id="register-glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F57C00]/15 rounded-full blur-[160px] pointer-events-none animate-pulse" />

        <div id="register-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center">
          <div id="register-content" className="max-w-4xl mx-auto space-y-8">
            <span id="register-badge" className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 bg-[#F57C00]/10 border border-[#F57C00]/25 rounded-full inline-block">
              OFFICIAL ENROLLMENT PORTAL
            </span>
            
            <h2 id="register-main-title" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              Register for EPIPHANY 2026
            </h2>

            <p id="register-note-paragraph" className="text-slate-200 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto font-sans">
              Please note that registration and parental consent are completed securely online through our official secure Google Registration Form. No physical forms or registration fees are required on this website. Seats are strictly limited based on venue safety protocols.
            </p>

            <div id="register-btn-group" className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                id="register-cta-btn-main"
                href={GOOGLE_FORMS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-16 px-12 bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold rounded-full transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1 cursor-pointer text-center"
              >
                <span>Register Now</span>
                <ExternalLink className="w-5 h-5" />
              </a>

              <button
                id="register-cta-btn-back"
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto h-16 px-12 border-2 border-white/30 hover:border-white/60 text-white font-extrabold rounded-full backdrop-blur-sm bg-black/10 hover:bg-white hover:text-[#0D47A1] transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-1"
              >
                <span>Back to DRYCI Home</span>
              </button>
            </div>

            <div id="register-benefit-bullets" className="pt-8 flex flex-wrap justify-center gap-8 text-slate-300 text-xs font-mono tracking-wider">
              <div id="bullet- sponsored" className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>100% Fully Sponsored</span>
              </div>
              <div id="bullet-manuals" className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Stationeries, Backpacks & Lunch Included</span>
              </div>
              <div id="bullet-cert" className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Official Certificates Awarded</span>
              </div>
            </div>

            {/* Official DRYCI Quote exactly verbatim */}
            <div id="register-quote-block" className="pt-12 border-t border-white/10 mt-12 max-w-3xl mx-auto space-y-4">
              <p id="register-quote-text" className="font-serif italic text-base sm:text-lg text-slate-300 leading-relaxed">
                "Every girl carries the potential to become a leader, a problem solver and a catalyst for transformation. At DRYCI, we are committed to helping her discover that potential early and develop it intentionally."
              </p>
              <div id="register-quote-signer">
                <span id="signer-org" className="font-bold text-[#F57C00] font-serif block">Dreams to Reality Youth and Children Initiative (DRYCI)</span>
                <span id="signer-rc" className="text-xs text-slate-400 font-mono block mt-1">RC: 7413359</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SUMMIT CONTACT DETAILS                     */}
      {/* ========================================== */}
      <section id="epiphany-contact-details" className="py-20 bg-white relative overflow-hidden border-t border-slate-150">
        <div id="contact-glow-1" className="absolute top-1/4 right-0 w-96 h-96 bg-[#0D47A1]/3 rounded-full blur-[140px] pointer-events-none" />
        
        <div id="contact-container" className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center">
          <div id="contact-wrapper" className="max-w-[900px] mx-auto bg-slate-50 border border-slate-100 rounded-[32px] p-8 sm:p-12 text-center space-y-8 shadow-sm">
            <span id="contact-badge" className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              SUMMIT SECRETARIAT SUPPORT
            </span>
            <h2 id="contact-title" className="font-serif text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
              Contact the Organisers
            </h2>
            <div id="contact-line" className="w-20 h-1 bg-[#F57C00] rounded-full mx-auto" />
            
            <p id="contact-lead-p" className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              If you have any active inquiries regarding school bulk allocations, transportation arrangements, or logistics parameters, feel free to reach out directly.
            </p>

            <div id="contact-info-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto text-left pt-4">
              <div id="contact-box-email" className="bg-white border border-slate-150 p-6 rounded-2xl shadow-inner flex items-center gap-4">
                <div id="email-icon-wrap" className="w-12 h-12 rounded-xl bg-[#0D47A1]/5 text-[#0D47A1] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#F57C00]" />
                </div>
                <div>
                  <span id="email-label" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Email Us</span>
                  <span id="email-val" className="text-sm font-bold text-slate-800 font-mono">dryci.ngo@gmail.com</span>
                </div>
              </div>

              <div id="contact-box-phone" className="bg-white border border-slate-150 p-6 rounded-2xl shadow-inner flex items-center gap-4">
                <div id="phone-icon-wrap" className="w-12 h-12 rounded-xl bg-[#0D47A1]/5 text-[#0D47A1] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#F57C00]" />
                </div>
                <div>
                  <span id="phone-label" className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Call Secretariat</span>
                  <span id="phone-val" className="text-sm font-bold text-slate-800 font-mono">0810 791 1934</span>
                </div>
              </div>
            </div>

            {/* Social profiles row precisely from document */}
            <div id="contact-socials-block" className="pt-6 border-t border-slate-200/60 max-w-lg mx-auto text-center space-y-4">
              <span id="socials-label" className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">Dreams to Reality Youth and Children Initiative</span>
              <div id="socials-flex" className="flex justify-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0D47A1] hover:border-[#0D47A1] transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0D47A1] hover:border-[#0D47A1] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0D47A1] hover:border-[#0D47A1] transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
