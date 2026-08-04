import { motion } from 'motion/react';
import { 
  Users, 
  Award, 
  BookOpen, 
  Handshake, 
  Clock, 
  Calendar, 
  Sparkles, 
  ArrowUpRight,
  TrendingUp,
  Target,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function AboutImpactAndOutlook() {
  const stats = [
    {
      value: '200,000+',
      label: 'Young People and Children Reached',
      icon: Users,
      color: 'text-[#0D47A1]',
      bg: 'bg-blue-50'
    },
    {
      value: '20,000+',
      label: 'Participants Trained Through Conferences, Bootcamps, School Programmes and Mentorship Initiatives',
      icon: Award,
      color: 'text-[#F57C00]',
      bg: 'bg-orange-50'
    },
    {
      value: '30+',
      label: 'Schools Visited Across Multiple Nigerian States',
      icon: BookOpen,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      value: 'Multiple',
      label: 'Strategic Collaborations with Educational Institutions, Churches and Youth-Focused Organisations',
      icon: Handshake,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      value: '10+ Years',
      label: 'Combined Founder Experience in Youth Development, Education and Mentorship',
      icon: Clock,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    }
  ];

  const lookAheadPoints = [
    'Expanding the reach of our leadership conferences and school clubs to more communities and states.',
    'Strengthening our mentorship and educational support systems to provide more comprehensive, long-term guidance.',
    'Designing and implementing new initiatives that address the emerging needs of children and young people.',
    'Building strategic partnerships with local and international organisations, educational institutions, government bodies, religious groups and individuals who share our vision.',
    'Establishing permanent structures and resource centres to facilitate learning, mentorship and capacity building.'
  ];

  return (
    <div className="space-y-0">
      
      {/* SECTION 1: OUR IMPACT & IMPACT AT A GLANCE */}
      <section className="py-[140px] xl:py-[180px] bg-slate-50 relative overflow-hidden">
        {/* Decorative backdrop mesh */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D47A1]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Narrative */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#F57C00]" />
                <span>Our Impact</span>
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                Dreams Built, Lives Transformed
              </h2>
              <div className="text-slate-600 text-base leading-relaxed space-y-6 font-sans font-light">
                <p>
                  Dreams to Reality Youth and Children Initiative (DRYCI) has continued to expand its reach through conferences, school engagements, mentorship initiatives, educational programmes and community-based interventions.
                </p>
                <p>
                  Our work has included collaborations with educational institutions, churches, professionals and youth-focused organisations in different parts of Nigeria.
                </p>
                <p className="text-[#0D47A1] font-semibold text-lg font-serif">
                  Through these efforts, we remain committed to raising a generation equipped to lead with excellence, integrity and purpose.
                </p>
              </div>
            </div>

            {/* Right Side: Grid of Stats */}
            <div className="lg:col-span-7 w-full">
              <div className="space-y-4 mb-6 text-left">
                <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                  Key Metrics
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Impact at a Glance
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  const isLarge = idx === 0 || idx === 1; // Highlight first two
                  return (
                    <motion.div
                      key={idx}
                      className={`p-6 bg-white border border-slate-150 rounded-3xl flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-all group ${
                        isLarge ? 'md:col-span-2' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-slate-300 group-hover:text-slate-400 transition-colors">
                            <ArrowUpRight className="w-5 h-5" />
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <span className={`block font-serif font-extrabold tracking-tight text-slate-900 group-hover:text-[#0D47A1] transition-colors leading-none ${
                            isLarge ? 'text-4xl sm:text-5xl' : 'text-3xl'
                          }`}>
                            {stat.value}
                          </span>
                          <p className="text-slate-600 text-sm leading-relaxed font-sans font-light">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: FEATURED INITIATIVE */}
      <section className="py-[140px] xl:py-[180px] bg-slate-900 text-white relative overflow-hidden">
        {/* Elegant glowing background stars */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#0D47A1,transparent_55%)] opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#F57C00,transparent_50%)] opacity-20 pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Campaign / Emblem Detail */}
            <motion.div 
              className="lg:col-span-5 text-left space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F57C00]/10 border border-[#F57C00]/20 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-[#F57C00] uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#F57C00] animate-spin" />
                <span>Featured Initiative</span>
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                EPIPHANY 2026
              </h2>
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-200">
                DRYCI's Flagship Annual Girls' Leadership Conference
              </h3>

              <div className="flex items-center gap-3 py-2 border-y border-slate-800">
                <Calendar className="w-5 h-5 text-[#F57C00]" />
                <span className="font-mono text-base font-black text-[#F57C00] tracking-wide">
                  26th – 28th August
                </span>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm font-mono leading-relaxed max-w-sm">
                *DRYCI's Flagship Annual Girls' Leadership Conference specifically designed to address the leadership, personal growth, educational and mentorship needs of secondary school girls.*
              </p>
            </motion.div>

            {/* Right Side: Informational Detail Card */}
            <motion.div 
              className="lg:col-span-7 bg-slate-950/65 backdrop-blur-md border border-slate-800 p-8 sm:p-10 rounded-[32px] text-left space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-slate-300 text-base leading-relaxed font-sans font-light">
                <p>
                  EPIPHANY is DRYCI's Flagship Annual Girls' Leadership Conference specifically designed to address the leadership, personal growth, educational and mentorship needs of secondary school girls.
                </p>
                <p>
                  The conference provides a platform for raising confident young women who possess the academic competence, character, self-esteem, life skills and leadership capacity required to navigate life challenges and make positive contributions to society.
                </p>
                <p>
                  Through keynote presentations, interactive workshops, panel discussions, mentorship sessions and capacity-building activities, EPIPHANY empowers participants to look beyond limitations, discover their purpose, build positive peer networks and take responsibility for their futures.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F57C00]" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-extrabold">
                  DRYCI Flagship Campaign
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 3: LOOKING AHEAD */}
      <section className="py-[140px] xl:py-[180px] bg-white relative overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0D47A1]/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/4 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Header */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                The Roadmap Ahead
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                Looking Ahead
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans font-light">
                Our vision extends far beyond individual programmes; it is about building a sustainable institution and a growing movement dedicated to raising generations of transformational leaders across Nigeria and Africa.
              </p>
              
              <div className="p-6 bg-slate-50 border-l-4 border-[#0D47A1] rounded-2xl">
                <p className="text-[#0D47A1] font-serif italic text-base leading-relaxed">
                  "We are deeply convinced that the investment made in the life of a child or young person today holds the key to the future of our families, communities, nation and the world. DRYCI remains unwavering in its commitment to translating this conviction into lasting, visible reality."
                </p>
              </div>
            </div>

            {/* Right side: Strategic focus bullet points */}
            <div className="lg:col-span-7 text-left space-y-8">
              <div className="space-y-2">
                <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
                  Strategic Goals
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  To achieve this, DRYCI is focused on:
                </h3>
              </div>

              <div className="space-y-6">
                {lookAheadPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100/80 rounded-2xl group hover:border-[#0D47A1]/20 transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0D47A1]/5 text-[#0D47A1] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0D47A1] group-hover:text-white transition-all">
                      <span className="font-mono text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
