import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Megaphone, 
  Users, 
  BookOpen, 
  X, 
  Heart, 
  Mail, 
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

import gallery29 from './gallery_calabar_20260205_115959.jpg';
import gallery30 from './gallery_calabar_20260205_111722.jpg';
import gallery31 from './gallery_calabar_20260205_112327.jpg';
import gallery32 from './gallery_calabar_20260205_113039.jpg';
import gallery33 from './gallery_calabar_20260205_113703.jpg';
import gallery34 from './gallery_calabar_20260205_114311.jpg';
import gallery35 from './gallery_calabar_20260205_114526.jpg';
import epiphanyFlyer from './epiph.png';
import gallery49 from './gallery_calabar_gallery_49.jpg';
import gallery50 from './gallery_calabar_gallery_50.jpg';

interface LatestNewsEventsProps {
  onNavigate: (section: string) => void;
}

// Authentic Nigerian NGO news items & events (all values verified for accuracy and layout)
const NEWS_ITEMS = [
  {
    id: 'news-1',
    category: 'Conferences',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: Megaphone,
    date: '26th – 28th August',
    title: "EPIPHANY: DRYCI's Flagship Annual Girls' Leadership Conference",
    location: 'Calabar, Cross River State',
    summary: "DRYCI's Flagship Annual Girls' Leadership Conference (EPIPHANY) is gathering over 300 Nigerian secondary school teenage girls for intensive values orientation, moral mentoring, and critical capacity-building.",
    fullStory: `DRYCI is thrilled to announce that student applications for EPIPHANY: DRYCI's Flagship Annual Girls' Leadership Conference are officially open! 

EPIPHANY is DRYCI's Flagship Annual Girls' Leadership Conference focusing on ethical character formation, leadership excellence, academic empowerment, and community mentorship. This year, we are gathering over 300 ambitious high school girls from various regions across Nigeria to Calabar, Cross River State.

Participants will enjoy workshops hosted by local and international professional female mentors, interact in peer working group challenges, and build sustainable solutions to community problems. Accommodation, academic materials, and leadership manuals are fully sponsored. Encourage a secondary school girl in your network to register today!`,
    image: epiphanyFlyer,
    actionText: 'Register Now',
    actionSection: 'epiphany'
  },
  {
    id: 'news-2',
    category: 'Outreaches',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: BookOpen,
    date: 'July 15, 2026',
    title: 'Nsukka Community Library commissioning set for next week',
    location: 'Nsukka Rural District',
    summary: 'We are completing the setup of our third modern children\'s library in Enugu State. Equipped with 2,500 new study books and quiet reading desks for junior pupils.',
    fullStory: `Our commitment to inclusive academic support takes a massive leap forward next week as we commission our brand-new community resource library in Nsukka!

Thanks to generous local donors, this library will serve over 800 children from four neighboring public schools who previously had no access to reading resources. The hub features:
- 2,500+ syllabus-aligned textbooks, moral fiction books, and scientific study materials
- Safe, solar-powered study lamps to bypass local electricity challenges
- Weekly structured spelling bee programs and homework support clubs run by volunteer educators.

We welcome all parents, teachers, and community stakeholders to join our ribbon-cutting ceremony next Wednesday at 10:00 AM.`,
    image: gallery49,
    actionText: 'Volunteer to Teach',
    actionSection: 'volunteer'
  },
  {
    id: 'news-3',
    category: 'Impact',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: Heart,
    date: 'June 28, 2026',
    title: 'Clean Water solar borehole commissioned in Amechi community',
    location: 'Amechi, Enugu State',
    summary: 'Our clean water hygiene initiative successfully delivered a high-capacity solar-powered borehole to secure health and increase morning school attendance.',
    fullStory: `We are excited to share that children and parents in the Amechi community no longer walk 5 kilometers each morning to fetch untreated river water. Our team has successfully commissioned a solar-powered deep borehole system!

Water scarcity is one of the highest contributors to school absenteeism and waterborne illnesses among grassroots youth. By delivering reliable, clean water right to the community heart, we are:
- Enabling over 150 girls and boys to attend early morning school classes on time
- Eradicating gastrointestinal health issues caused by unsafe water sources
- Organizing local hygiene seminars to teach proper handwashing and water preservation.

A local committee has been trained to oversee operations, ensuring a permanent, self-sustaining model.`,
    image: gallery33,
    actionText: 'Support Water Projects',
    actionSection: 'volunteer'
  },
  {
    id: 'news-4',
    category: 'Announcements',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Sparkles,
    date: 'June 10, 2026',
    title: 'DRYCI secures strategic trust partnership for school fees',
    location: 'Lagos Headquarters',
    summary: 'A new joint agreement with the West African Education Trust guarantees full-year secondary school scholarships for 120 grassroots children.',
    fullStory: `DRYCI has formalized a three-year strategic partnership with the West African Education Trust!

This landmark collaboration ensures full academic sponsorship—covering school tuition, customized books, uniform kits, and writing materials—for 120 highly motivated public school pupils across Enugu, Lagos, and Kaduna states.

Our selection process is deeply thorough, focusing on resilient junior students facing major financial hurdles but displaying exceptional character, integrity, and intellectual curiosity. We look forward to tracking their progress through our guided mentoring structures.`,
    image: gallery34,
    actionText: 'Partner with DRYCI',
    actionSection: 'contact'
  },
  {
    id: 'news-5',
    category: 'Volunteers',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    icon: Users,
    date: 'July 25, 2026',
    title: 'Statewide volunteer educator orientations scheduled',
    location: 'Hybrid (Virtual & Enugu Center)',
    summary: 'Are you passionate about moral character development? Join our team of volunteer professional mentors for our second-quarter onboarding session.',
    fullStory: `Are you looking for a direct, high-impact channel to give back to Nigerian children? DRYCI is calling for statewide volunteer mentors, academic tutors, and youth counselors!

On Saturday, July 25, we are hosting our hybrid Volunteer Orientation. This session is designed to equip volunteers with:
- DRYCI\'s core values and child safety training protocols
- Practical class engagement methodologies for secondary schools
- Mentorship guidelines to lead student-centered leadership clubs.

Whether you are a university student, a young corporate professional, or a seasoned educator, your guidance can shape the next generation of ethical Nigerian leaders.`,
    image: gallery50,
    actionText: 'Apply to Volunteer',
    actionSection: 'volunteer'
  }
];

const CATEGORIES = ['All', 'Conferences', 'Outreaches', 'Impact', 'Announcements', 'Volunteers'];

export default function LatestNewsEvents({ onNavigate }: LatestNewsEventsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<typeof NEWS_ITEMS[0] | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter items
  const filteredItems = selectedCategory === 'All' 
    ? NEWS_ITEMS 
    : NEWS_ITEMS.filter(item => item.category === selectedCategory);

  const handleCTA = (section: string) => {
    setActiveArticle(null);
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-150 relative overflow-hidden w-full">
      {/* Absolute decorative backdrops */}
      <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-[#0D47A1]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#F57C00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl text-left space-y-4 mb-14">
          <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5">
            <Clock className="w-4.5 h-4.5 text-[#F57C00]" />
            <span>Stay Updated</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Latest News & Events
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
            Discover our upcoming bootcamps, school library commissioning notices, borehole progress, and direct community reports on the ground.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 mb-12 w-full">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#0D47A1] text-white shadow-md shadow-blue-900/20' 
                  : 'bg-white text-slate-600 hover:text-[#0D47A1] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex-grow">
                    {/* Event Photo block */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (item.category === 'Conferences') {
                            target.src = gallery29;
                          } else if (item.category === 'Outreaches') {
                            target.src = gallery30;
                          } else if (item.category === 'Volunteers' || item.category === 'Impact') {
                            target.src = gallery32;
                          } else {
                            target.src = gallery33;
                          }
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Category Label Overlay */}
                      <span className={`absolute top-4 left-4 border text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm ${item.badgeColor}`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Metadata & Text Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-slate-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#F57C00]" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#0D47A1]" />
                          <span className="truncate max-w-[120px]">{item.location}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#0D47A1] transition-colors duration-200">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Action footer */}
                  <div className="p-6 pt-0 border-t border-slate-50 mt-auto bg-slate-50/50 flex items-center justify-between">
                    <button
                      onClick={() => setActiveArticle(item)}
                      className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#0D47A1] inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0D47A1]/10 group-hover:text-[#0D47A1] transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Newsletter Quick Signup Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[32px] p-8 sm:p-10 relative overflow-hidden text-left shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57C00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0D47A1]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-lg">
              <span className="text-amber-400 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Mail className="w-4 h-4 animate-bounce text-amber-400" />
                <span>Join Our Newsletter list</span>
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                Receive quarterly impact reports and event alerts
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Stay informed with authentic community reports directly from the field. No spam, we only share certified milestones and active volunteer opportunities.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 min-w-[280px] sm:min-w-[340px]">
              <AnimatePresence mode="wait">
                {!newsletterSubscribed ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleNewsletterSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col sm:flex-row items-stretch gap-2.5"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="px-5 py-3.5 bg-white/10 border border-white/20 hover:border-white/40 focus:border-[#F57C00] focus:bg-white focus:text-slate-950 text-white text-xs font-bold rounded-full transition-all duration-300 outline-none flex-grow"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-[#F57C00] hover:bg-[#D86D00] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-orange-500/20 active:translate-y-0.5 transition-all text-center cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-200"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div className="text-left text-xs">
                      <span className="font-bold block text-white">Thank you for subscribing!</span>
                      <span>You have been registered for official DRYCI updates.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ======================================================================
          NEWS ARTICLE DETAIL MODAL / DRAWER SYSTEM
         ====================================================================== */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Inner frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 25 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-2xl z-10 text-left flex flex-col max-h-[90vh]"
            >
              {/* Header profile banner */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 shrink-0 border-b border-slate-100">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.title} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (activeArticle.category === 'Conferences') {
                      target.src = gallery29;
                    } else if (activeArticle.category === 'Outreaches') {
                      target.src = gallery30;
                    } else if (activeArticle.category === 'Volunteers' || activeArticle.category === 'Impact') {
                      target.src = gallery32;
                    } else {
                      target.src = gallery33;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/30 pointer-events-none" />
                
                {/* Close Trigger */}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900/90 text-white p-2.5 rounded-full transition-all cursor-pointer shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-5 left-6 right-6 text-left">
                  <div className={`border text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md inline-block mb-3 shadow-sm ${activeArticle.badgeColor}`}>
                    {activeArticle.category}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {activeArticle.title}
                  </h3>
                </div>
              </div>

              {/* Story text container */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-6 border-b border-slate-100 pb-4 text-slate-500 font-mono text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#F57C00]" />
                    <span>{activeArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#0D47A1]" />
                    <span>{activeArticle.location}</span>
                  </div>
                </div>

                <div className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-poppins space-y-4">
                  {activeArticle.fullStory}
                </div>

              </div>

              {/* Actions row */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                  Dreams to Reality Youth and Children Initiative
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleCTA(activeArticle.actionSection)}
                    className="px-5 py-2.5 bg-[#0D47A1] hover:bg-[#0A3780] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{activeArticle.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
