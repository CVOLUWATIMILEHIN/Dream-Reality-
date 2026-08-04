import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  HelpCircle, 
  Sparkles, 
  Users, 
  Target, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Compass, 
  Flame, 
  CheckCircle2, 
  MessageSquare,
  ChevronDown,
  PhoneCall,
  Handshake,
  TrendingUp
} from 'lucide-react';
import { ProgramDetail } from '../data/programsData';
import AuthenticNigerianImage from './AuthenticNigerianImage';

interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

const getProgramImpact = (id: string): { narrative: string; stats: ImpactStat[] } => {
  switch (id) {
    case 'leadership-development':
      return {
        narrative: "Our leadership training creates measurable civic engagement and builds personal accountability pathways. Teenagers trained under this initiative have initiated peer-led advocacy projects, established democratic school forums, and significantly enhanced school co-curricular performance across target regions.",
        stats: [
          { value: "15,000+", label: "Teenagers Trained", description: "Educated in civic rights, moral leadership, and public speaking across Nigeria." },
          { value: "120+", label: "Active School Clubs", description: "Weekly co-curricular clubs with DRYCI guidelines, mentorship, and project toolkits." },
          { value: "95%", label: "Advocacy Action Rate", description: "Delegates who successfully pitch and implement peer-led community awareness drives." }
        ]
      };
    case 'education-support':
      return {
        narrative: "By bypassing localized power outages and tuition constraints, our educational program ensures no child is denied a future. Our solar-powered reading rooms offer uninterrupted evening academic study hours, while textbook distributions have eliminated academic resource deficits in beneficiary public secondary schools.",
        stats: [
          { value: "25,000+", label: "Textbooks Distributed", description: "Direct distribution of academic textbooks, notebooks, and reference guides." },
          { value: "45", label: "Solar Reading Rooms", description: "Community reading hubs established in rural areas, bypassing grid failures." },
          { value: "100%", label: "Full Orphan Sponsorship", description: "Total tuition funding for orphan children and highly vulnerable scholars." }
        ]
      };
    case 'mentorship-coaching':
      return {
        narrative: "Our mentorship pairing closes the guidance gap between academic theory and real-world professional careers. By connecting high school students with active corporate leaders, deans, and medical professionals, we help them bypass career-tracking errors and enter universities with clear action plans.",
        stats: [
          { value: "1,200+", label: "Vetted Mentor Matches", description: "Structured one-on-one professional-to-student coaching matches completed." },
          { value: "12 Months", label: "Structured Cycle", description: "Continuous monthly tracking, career mapping reviews, and university transition support." },
          { value: "98%", label: "University Progression", description: "Mentees who successfully matriculate into accredited tertiary institutions." }
        ]
      };
    case 'entrepreneurship-skills':
      return {
        narrative: "Empowering youth with high-demand vocational crafts, computing, and digital design directly breaks systemic poverty lines. We move delegates from raw skills into running small businesses, offering seed funding, toolkits, and marketing mentorship to ensure immediate, sustainable self-reliance.",
        stats: [
          { value: "3,500+", label: "Graduates Self-Reliant", description: "Youth fully certified in coding, solar installation, tailoring, and tailoring crafts." },
          { value: "₦15M+", label: "Startup Seeds Disbursed", description: "Direct micro-grants and equipment starter kits distributed to top scholars." },
          { value: "85%", label: "Active Business Launch", description: "Scholars operating viable local enterprises or commercial side-ventures post-training." }
        ]
      };
    case 'community-development':
      return {
        narrative: "Healthy communities raise resilient students. Our infrastructural interventions—such as drilling solar-powered clean boreholes and distributing sanitary kits—have radically improved school attendance, lowered waterborne health issues, and restored academic hours for rural children.",
        stats: [
          { value: "12", label: "Solar Water Boreholes", description: "High-capacity clean water hubs installed in schools and surrounding villages." },
          { value: "10,000+", label: "Menstrual Hygiene Kits", description: "Distributed to teenage schoolgirls to ensure uninterrupted attendance and dignity." },
          { value: "35+", label: "Host Communities Lifted", description: "Rural regions experiencing direct utility improvement and sanitation workshops." }
        ]
      };
    case 'faith-character':
      return {
        narrative: "Character is the ultimate stabilizer of skills and knowledge. Our moral self-governance programs have lowered truancy, reduced school examination malpractices, and successfully fostered a shared community culture built on absolute truth, anti-corruption, and neighborly love.",
        stats: [
          { value: "8,500+", label: "Ethical Scholars Formed", description: "Children trained via character registers, honest classrooms, and moral camps." },
          { value: "50+", label: "Values Plays Staged", description: "Creative theater productions written and performed live to reinforce civic moral duty." },
          { value: "92%", label: "Truancy Reduction", description: "Direct measured drop in school skipping and examination malpractices in partner academies." }
        ]
      };
    case 'epiphany':
      return {
        narrative: "EPIPHANY stands as the cornerstone of adolescent female empowerment in Nigeria. By breaking down cultural barriers and offering intensive training alongside direct professional female mentors, we inspire our delegates to break glass ceilings in science, business, and leadership.",
        stats: [
          { value: "1,800+", label: "Empowered Delegates", description: "High-potential high school girls graduated from our elite leadership bootcamps." },
          { value: "100%", label: "Female Executive Match", description: "Delegate-to-female-professional match rate for twelve months of direct guidance." },
          { value: "96%", label: "University Entrance Rate", description: "Alumni proceeding to pursue medical, engineering, or social science degrees." }
        ]
      };
    default:
      return {
        narrative: "Through our multi-dimensional programs, DRYCI remains committed to raising exemplary, educated leaders who can drive local communities and the broader Nigerian nation toward sustainable growth and structural accountability.",
        stats: [
          { value: "15,000+", label: "Total Direct Lives Lifted", description: "Providing tuition, textbooks, water, and structured character mentorship." },
          { value: "100%", label: "Tuition Free Programs", description: "All materials, courses, and summit admissions are completely funded by donors." },
          { value: "50+", label: "Partner Schools", description: "Partnering across Nigeria's regions to establish long-term educational pipelines." }
        ]
      };
  }
};

interface ProgramDetailViewProps {
  program: ProgramDetail;
  onBack: () => void;
  onNavigate?: (section: string) => void;
}

export default function ProgramDetailView({ program, onBack, onNavigate }: ProgramDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top on mount or program change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [program.id]);

  const handleScrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAction = (actionType: 'volunteer' | 'partner' | 'contact') => {
    if (onNavigate) {
      if (actionType === 'volunteer') {
        onNavigate('volunteer');
      } else if (actionType === 'partner') {
        onNavigate('volunteer'); // Volunteer form handles partners and sponsorships too
      } else {
        onNavigate('contact');
      }
    } else {
      // Fallback scroll to footer/contact if onNavigate is missing
      const footer = document.getElementById('volunteer') || document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Select appropriate icon based on program ID for decoration
  const getHeaderIcon = () => {
    switch (program.id) {
      case 'leadership-development': return Award;
      case 'education-support': return GraduationCap;
      case 'mentorship-coaching': return Users;
      case 'entrepreneurship-skills': return Briefcase;
      case 'community-development': return Compass;
      case 'faith-character': return Flame;
      default: return Sparkles;
    }
  };

  const IconComponent = getHeaderIcon();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Back button header navigation bar */}
      <div className="sticky top-[76px] lg:top-[84px] bg-white/90 backdrop-blur-md border-b border-slate-150 z-30 py-4 shadow-sm">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-[#0D47A1]/5 border border-slate-200 text-slate-700 hover:text-[#0D47A1] text-xs font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Programmes Overview</span>
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest font-bold">
              DRYCI Active Intervention
            </span>
          </div>
        </div>
      </div>

      {/* ==================================================
          1. HERO BANNER
          ================================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 sm:py-28 lg:py-36 border-b border-slate-800">
        {/* Abstract design elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0D47A1]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-40 right-20 w-96 h-96 bg-[#F57C00]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-left">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <IconComponent className="w-4 h-4 text-[#F57C00] animate-pulse" />
              <span className="font-mono text-[9px] font-extrabold text-slate-200 uppercase tracking-widest">
                {program.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
              {program.title}
            </h1>
            
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-slate-300 font-light italic leading-relaxed max-w-3xl">
              "{program.subtitle}"
            </p>

            {/* Quick anchors */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button 
                onClick={() => handleScrollToElement('overview')}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Overview
              </button>
              <button 
                onClick={() => handleScrollToElement('objectives')}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Objectives
              </button>
              <button 
                onClick={() => handleScrollToElement('activities')}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Activities
              </button>
              <button 
                onClick={() => handleScrollToElement('gallery')}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleScrollToElement('faq')}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. PROGRAMME OVERVIEW & WHY IT MATTERS
          ================================================== */}
      <section id="overview" className="py-24 sm:py-32 bg-white relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D47A1]/2 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Programme Narrative Overview - 7 Cols */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
                01. Core Mission Scope
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Programme Overview
              </h2>
              <p className="text-slate-600 text-base sm:text-lg sm:leading-relaxed font-sans font-light">
                {program.overview}
              </p>
            </div>

            {/* Right: Why It Matters Callout Card - 5 Cols */}
            <div className="lg:col-span-5 text-left bg-slate-50 border border-slate-150 rounded-[32px] p-8 lg:p-10 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F57C00]/4 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-6 -bottom-6 w-24 h-24 border-b-4 border-l-4 border-[#0D47A1]/20 rounded-bl-[32px] pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                  Why This Programme Matters
                </span>
                <h3 className="font-poppins font-bold text-slate-900 text-xl leading-snug">
                  Unlocking Human Capital
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {program.whyItMatters}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. PROGRAMME OBJECTIVES
          ================================================== */}
      <section id="objectives" className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200 relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/2 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-3xl text-left space-y-4 mb-16">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              02. Tangible Target Metrics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Programme Objectives
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              DRYCI operations are governed by clean strategic targets. Each intervention cohort is structured to deliver concrete, reportable social changes.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {program.objectives.map((obj, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-150 rounded-2xl p-6 flex gap-4 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <Check className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block">
                    Target Objective {index + 1}
                  </span>
                  <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                    {obj}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          4. PROGRAMME ACTIVITIES
          ================================================== */}
      <section id="activities" className="py-24 sm:py-32 bg-white relative">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="max-w-3xl text-left space-y-4 mb-16">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
              03. Operational Methods
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Key Activities & Deliverables
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              How we construct change: exploring the specific actions, workshops, and pipelines that make up this programme's active curriculum.
            </p>
          </div>

          {/* Activities Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {program.activities.map((act, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 text-left group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: '0 12px 24px -10px rgba(0,0,0,0.05)' }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D47A1]/5 text-[#0D47A1] font-mono font-bold text-lg flex items-center justify-center border border-[#0D47A1]/10">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-poppins font-bold text-slate-900 text-lg leading-snug group-hover:text-[#0D47A1] transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {act.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. TARGET PARTICIPANTS SECTION
          ================================================== */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                Target Participants
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Who Can Participate & Eligibility
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {program.whoCanParticipate}
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm self-start md:self-auto shrink-0 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#F57C00] font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Admission: 100% Fully Sponsored</span>
              </div>
              <p className="text-[11px] text-slate-400 max-w-xs leading-normal">
                Supported students pay zero tuition fees. All resources, books, and conference camp slots are funded via donor backing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. PROGRAMME IMPACT
          ================================================== */}
      <section className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#0D47A1]/2 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 text-left space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              04. Documented Outcomes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-[#F57C00]" />
              <span>Our Measured Impact</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg sm:leading-relaxed font-sans font-light">
              {getProgramImpact(program.id).narrative}
            </p>
          </div>

          {/* Impact Stats Grid - Premium Bento Sizing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getProgramImpact(program.id).stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Visual background gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0D47A1]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6 relative z-10">
                  <div className="text-[#0D47A1] font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {stat.value}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-poppins font-bold text-slate-900 text-base leading-tight group-hover:text-[#0D47A1] transition-colors">
                      {stat.label}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      {stat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
                  <span>Verified Field Metric</span>
                  <span className="text-[#F57C00] font-bold">✓</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          7. PROGRAMME GALLERY (Authentic Nigerian Imagery Only)
          ================================================== */}
      <section id="gallery" className="py-24 sm:py-32 bg-white relative">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="max-w-3xl text-left space-y-4 mb-16">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              05. Photographic Field View
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Programme Gallery
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Documenting actual outcomes: high-contrast photography capturing active Nigerian classroom collaboration, reading summits, and workshop training.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.gallery.map((img, index) => (
              <motion.div
                key={index}
                className="transform transition-all duration-300"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AuthenticNigerianImage
                  title={img.title}
                  location={img.location}
                  subject={img.subject}
                  uniform={img.uniform}
                  aspectRatio="aspect-[4/3]"
                  className="rounded-3xl border border-slate-200"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          8. PROGRAMME TESTIMONIALS
          ================================================== */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0D47A1]/2 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-3xl text-left space-y-4 mb-16">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
              06. True Impact Stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Delegate Testimonials
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Authentic words from dry-run delegates and student partners who have transitioned through DRYCI curriculum lines.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {program.testimonials.map((test, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between shadow-sm relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#F57C00]/10 flex items-center justify-center text-[#F57C00] mb-2">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <p className="font-serif italic text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0D47A1]/5 text-[#0D47A1] font-bold text-sm flex items-center justify-center shrink-0 border border-[#0D47A1]/10">
                    {test.author.charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-poppins font-bold text-slate-900 text-sm block">
                      {test.author}
                    </span>
                    <span className="text-xs text-slate-500 font-medium block">
                      {test.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          9. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
          ================================================== */}
      <section id="faq" className="py-24 sm:py-32 bg-white relative">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header info - 4 Cols */}
            <div className="lg:col-span-4 text-left space-y-4 lg:sticky lg:top-40">
              <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
                07. Complete Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                Need more specifications on this program? Review the guidelines here or contact our support team.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={() => handleAction('contact')}
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#F57C00] uppercase tracking-wider hover:underline cursor-pointer"
                >
                  <span>Still have questions? Contact Us</span>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-[#F57C00]" />
                </button>
              </div>
            </div>

            {/* Right Accordion - 8 Cols */}
            <div className="lg:col-span-8 space-y-4 text-left w-full">
              {program.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-6 flex justify-between items-center gap-4 text-slate-900 hover:text-[#0D47A1] font-poppins font-bold text-sm sm:text-base text-left transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#0D47A1]' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-600 text-xs sm:text-sm sm:leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          9. CALL TO ACTION (CTA)
          ================================================== */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-950 via-[#0D47A1] to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F57C00]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-left">
          <div className="max-w-4xl space-y-8">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
              Join Our Mission
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              {program.ctaText}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              {program.ctaSub} We work hand-in-hand with global mentors, public departments, and generous donors to build sustainable futures for Nigerian adolescents.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-5 pt-4 max-w-2xl">
              <button
                onClick={() => handleAction('volunteer')}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-2xl py-5 transition-all duration-300 shadow-lg shadow-[#F57C00]/10 hover:shadow-xl cursor-pointer group"
              >
                <span>Become a Volunteer</span>
                <Users className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </button>
              
              <button
                onClick={() => handleAction('partner')}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#0D47A1] hover:bg-slate-100 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-2xl py-5 transition-all duration-300 shadow-md cursor-pointer group"
              >
                <span>Partner with Us</span>
                <Handshake className="w-4 h-4 text-[#F57C00] transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => handleAction('contact')}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-2xl py-5 transition-all duration-300 cursor-pointer group"
              >
                <span>Support Program</span>
                <Sparkles className="w-4 h-4 text-[#F57C00] transition-transform duration-300 group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
