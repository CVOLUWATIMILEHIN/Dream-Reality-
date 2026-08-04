import { useState, useEffect } from 'react';
import {
  Globe,
  Sparkles,
  Heart,
  Palette,
  BookOpen,
  Award,
  ShieldCheck,
  Zap,
  CheckCircle,
  HelpCircle,
  Info,
  Layers,
  Smile,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import design portal components
import ColorPaletteGrid from './components/ColorPaletteGrid';
import TypographyInspector from './components/TypographyInspector';
import ButtonShowcase from './components/ButtonShowcase';
import CardShowcase from './components/CardShowcase';
import NavbarSimulator from './components/NavbarSimulator';
import AnimationSandbox from './components/AnimationSandbox';

// Import actual live DRYCI homepage components
import MainNavbar from './components/MainNavbar';
import MainHero from './components/MainHero';
import HomeParticularities from './components/HomeParticularities';
import MainAbout from './components/MainAbout';
import MainPrograms from './components/MainPrograms';
import MainImpact from './components/MainImpact';
import MainGallery from './components/MainGallery';
import MainVolunteerForm from './components/MainVolunteerForm';
import MainContact from './components/MainContact';
import MainFooter from './components/MainFooter';
import DryciLogo from './components/DryciLogo';
import LatestNewsEvents from './components/LatestNewsEvents';
import MainEpiphany from './components/MainEpiphany';
import EpiphanyPopup from './components/EpiphanyPopup';
import SupportWidget from './components/SupportWidget';

export default function App() {
  const [showGuide, setShowGuide] = useState(false);
  const [activeGuideSection, setActiveGuideSection] = useState('colors');
  const [activeSection, setActiveSection] = useState('home');

  // Ensure scroll position is reset to the top on load, navigation, refresh, and returning from another page
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection, showGuide]);

  const brandAttributes = [
    { name: 'Hope', desc: 'Inspiring optimism through vibrant orange accents and bright, natural imagery.', icon: Sparkles },
    { name: 'Transformation', desc: 'Marked by deep-green success metrics showing structural growth.', icon: Zap },
    { name: 'Purpose', desc: 'Represented by clean Outfit headings conveying modern leadership, clarity, and weight.', icon: Award },
    { name: 'Education', desc: 'Emphasized via crisp grids, clean panels, and comfortable Inter body text.', icon: BookOpen },
    { name: 'Leadership', desc: 'Elegantly displayed through confident geometry and high-contrast blue titles.', icon: Compass },
    { name: 'Trust', desc: 'Grounded in our #0D47A1 Deep Royal Blue—the international seal of NGO credibility.', icon: ShieldCheck },
    { name: 'Compassion', desc: 'Softened with 24px rounded curves and warm environmental illumination.', icon: Heart }
  ];

  const scrollIntoGuideSection = (id: string) => {
    setActiveGuideSection(id);
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#0D47A1] selection:text-white relative flex flex-col">
      {/* Main Dynamic Header Navbar */}
      <MainNavbar 
        onToggleGuide={toggleGuide} 
        showGuide={showGuide} 
        activeSection={activeSection}
        onNavigate={(section) => {
          setActiveSection(section);
          setShowGuide(false);
        }}
      />

      <AnimatePresence mode="wait">
        {!showGuide ? (
          /* ==========================================
             A. LIVE DRYCI CINEMATIC HOMEPAGE
             ========================================== */
          <motion.div
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col flex-grow ${activeSection === 'home' ? '' : 'pt-[76px] lg:pt-[84px]'}`}
          >
            {/* Main content area rendering exactly one component according to navigation */}
            <div className="flex-grow flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex-grow flex flex-col"
                >
                  {activeSection === 'home' && (
                    <>
                      <MainHero onNavigate={setActiveSection} />
                      <HomeParticularities onNavigate={setActiveSection} />
                      <LatestNewsEvents onNavigate={setActiveSection} />
                      <EpiphanyPopup onViewDetails={() => {
                        setActiveSection('epiphany');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }} />
                    </>
                  )}
                  {activeSection === 'about' && <MainAbout />}
                  {activeSection === 'epiphany' && <MainEpiphany onNavigate={setActiveSection} />}
                  {activeSection === 'programs' && <MainPrograms onNavigate={setActiveSection} />}
                  {activeSection === 'impact' && <MainImpact onNavigate={setActiveSection} />}
                  {activeSection === 'gallery' && <MainGallery onNavigate={setActiveSection} />}
                  {activeSection === 'volunteer' && <MainVolunteerForm />}
                  {activeSection === 'contact' && <MainContact />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 6. Professional Global Footer */}
            <MainFooter onNavigate={setActiveSection} />
          </motion.div>
        ) : (
          /* ==========================================
             B. BRAND GUIDELINES & PROTOCOL PORTAL
             ========================================== */
          <motion.div
            key="guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24"
          >
            {/* Floating Style guide notification banner */}
            <div className="bg-[#F57C00] text-white py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-inner">
              <Sparkles className="w-4 h-4 animate-spin text-white" />
              <span>Viewing Active Token Guide System. Toggle "Brand Guide" button in Navbar to return.</span>
            </div>

            {/* Hero Welcome Header banner */}
            <header className="relative bg-gradient-to-br from-[#0D47A1] via-[#0A3780] to-slate-900 text-white overflow-hidden py-16 sm:py-20 border-b border-slate-800">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>

              {/* Diagonal aesthetic warm light highlight */}
              <div className="absolute -top-40 right-10 w-96 h-96 bg-[#F57C00] rounded-full blur-[160px] opacity-20 pointer-events-none" />

              <div className="max-w-[1400px] mx-auto px-6 sm:px-[48px] lg:px-[80px] relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#F57C00] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                        Official Brand Protocol
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Ready for Production
                      </span>
                    </div>
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                      DRYCI Design Language
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                      Establishing the complete visual framework, typography pairings, interactive components, and authentic image guidelines for the <strong>Dreams to Reality Youth and Children Initiative</strong>.
                    </p>
                  </div>

                  {/* Quick Metadata badge */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm self-start md:self-auto text-xs space-y-2">
                    <div className="flex justify-between items-center gap-6">
                      <span className="text-slate-400 font-mono uppercase tracking-wider font-semibold">Art Standard</span>
                      <span className="text-white font-bold font-serif">UNICEF / World Vision Tier</span>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                      <span className="text-slate-400 font-mono uppercase tracking-wider font-semibold">Status</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Validated Cogs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Core Layout Grid */}
            <main className="max-w-[1400px] mx-auto px-6 sm:px-[48px] lg:px-[80px] py-12 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
                {/* LEFT SIDEBAR: Brand Blueprint Directory (Sticky) */}
                <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-8">
                  {/* Quick Navigation Jump Links */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
                    <h4 className="font-poppins font-bold text-slate-800 text-xs uppercase tracking-wider border-b border-slate-100 pb-2">
                      Brand Chapters
                    </h4>
                    <nav className="flex flex-col gap-1 text-xs">
                      <button
                        onClick={() => scrollIntoGuideSection('color-palette')}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition-all text-left ${
                          activeGuideSection === 'colors'
                            ? 'bg-[#0D47A1]/5 text-[#0D47A1]'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <Palette className="w-4 h-4" />
                        <span>1. Color Palette Swatches</span>
                      </button>

                      <button
                        onClick={() => scrollIntoGuideSection('typography')}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition-all text-left ${
                          activeGuideSection === 'typography'
                            ? 'bg-[#0D47A1]/5 text-[#0D47A1]'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>2. Typography & Scales</span>
                      </button>

                      <button
                        onClick={() => scrollIntoGuideSection('button-system')}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition-all text-left ${
                          activeGuideSection === 'buttons'
                            ? 'bg-[#0D47A1]/5 text-[#0D47A1]'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <Zap className="w-4 h-4" />
                        <span>3. Tactile Action Buttons</span>
                      </button>

                      <button
                        onClick={() => scrollIntoGuideSection('card-system')}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition-all text-left ${
                          activeGuideSection === 'cards'
                            ? 'bg-[#0D47A1]/5 text-[#0D47A1]'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <Layers className="w-4 h-4" />
                        <span>4. Imagery Art Direction</span>
                      </button>

                      <button
                        onClick={() => scrollIntoGuideSection('navbar-simulator')}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition-all text-left ${
                          activeGuideSection === 'navbar'
                            ? 'bg-[#0D47A1]/5 text-[#0D47A1]'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <Globe className="w-4 h-4" />
                        <span>5. Dynamic Sticky Navbar</span>
                      </button>

                      <button
                        onClick={() => scrollIntoGuideSection('animations')}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition-all text-left ${
                          activeGuideSection === 'animations'
                            ? 'bg-[#0D47A1]/5 text-[#0D47A1]'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>6. Micro-Animation Spec</span>
                      </button>
                    </nav>
                  </div>

                  {/* Brand Core Identity Attributes list */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
                    <h4 className="font-poppins font-bold text-slate-800 text-xs uppercase tracking-wider border-b border-slate-100 pb-2">
                      Brand Core Attributes
                    </h4>
                    <div className="space-y-4">
                      {brandAttributes.map((attr) => {
                        const Icon = attr.icon;
                        return (
                          <div key={attr.name} className="flex gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#0D47A1]/5 border border-[#0D47A1]/10 flex items-center justify-center text-[#0D47A1] shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <span className="font-poppins font-bold text-xs text-slate-800 block">{attr.name}</span>
                              <p className="text-[11px] text-slate-500 leading-normal">{attr.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Layout Spacing Guideline callout */}
                  <div className="bg-slate-900 rounded-2xl p-5 text-white space-y-3 relative overflow-hidden shadow-md">
                    <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#F57C00]/20 rounded-full blur-xl" />
                    <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-[#F57C00]">
                      Space & Padding Spec
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      To guarantee maximum breathing room, ensure the minimum section separation is <strong>120px</strong> and maximum is <strong>180px</strong>. Avoid cluttered node stacking.
                    </p>
                    <div className="border border-slate-800 rounded bg-slate-950 p-2 text-center text-[10px] font-mono font-bold text-slate-500">
                      120px &le; GAP &le; 180px
                    </div>
                  </div>
                </aside>

                {/* RIGHT PANELS: Interactive Content Showcase */}
                <div className="lg:col-span-3 space-y-32">
                  {/* Chapter 1: Colors */}
                  <section id="color-palette-section" className="scroll-mt-24">
                    <ColorPaletteGrid />
                  </section>

                  {/* Chapter 2: Typography */}
                  <section id="typography-section" className="scroll-mt-24">
                    <TypographyInspector />
                  </section>

                  {/* Chapter 3: Buttons */}
                  <section id="button-system-section" className="scroll-mt-24">
                    <ButtonShowcase />
                  </section>

                  {/* Chapter 4: Cards */}
                  <section id="card-system-section" className="scroll-mt-24">
                    <CardShowcase />
                  </section>

                  {/* Chapter 5: Navbar */}
                  <section id="navbar-simulator-section" className="scroll-mt-24">
                    <NavbarSimulator />
                  </section>

                  {/* Chapter 6: Animations */}
                  <section id="animations-section" className="scroll-mt-24">
                    <AnimationSandbox />
                  </section>

                  {/* Design Spacing Visualizer Section */}
                  <section className="border-t border-slate-200 pt-16">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
                      <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight">
                        7. Section Spacing Demonstration
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm max-w-2xl leading-relaxed mb-8">
                      This area demonstrates the breathing rhythm. We present a visual spacer simulating the 120px to 180px separation, ensuring editorial, clean structures.
                    </p>

                    {/* RULER spacer indicator */}
                    <div className="relative border-y border-dashed border-[#F57C00]/40 bg-[#F57C00]/2 h-[120px] flex items-center justify-center rounded-xl overflow-hidden group">
                      <div className="absolute inset-y-0 left-6 border-l border-dashed border-[#F57C00]/30" />
                      <div className="absolute inset-y-0 right-6 border-r border-dashed border-[#F57C00]/30" />
                      <div className="text-center relative z-10 space-y-1">
                        <span className="font-mono text-[11px] font-bold text-[#F57C00] uppercase tracking-widest block">
                          120px Spacing Area (Minimum Standard)
                        </span>
                        <span className="text-[10px] text-slate-400 block font-medium">
                          Creates calm, open editorial layouts for global trust
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </main>

            {/* Footer copyright */}
            <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-24">
              <div className="max-w-[1400px] mx-auto px-6 sm:px-[48px] lg:px-[80px] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <DryciLogo className="w-8 h-8" showText={false} />
                    <span className="font-serif font-extrabold text-sm tracking-tight text-white ml-1">DRYCI Brand Portal</span>
                  </div>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Dreams to Reality Youth and Children Initiative. Authorized brand standard guidelines for engineering teams.
                  </p>
                </div>

                <div className="text-xs text-slate-500 font-mono">
                  <span>&copy; {new Date().getFullYear()} DRYCI Initiative. Crafted with premium standards.</span>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global Modern Customer Support System */}
      <SupportWidget />
    </div>
  );
}
