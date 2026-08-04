import { motion } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  Users, 
  Sparkles, 
  Target, 
  Zap, 
  Quote, 
  ArrowRight, 
  Heart, 
  Volume2, 
  Compass,
  Briefcase
} from 'lucide-react';
import imageMoses from './Moses chibueze.jpeg';

export default function FounderProfile() {
  const highlights = [
    {
      title: '10+ Years Experience',
      desc: 'Over a decade of consistent, active experience in youth development, mentorship, and transformational speaking.',
      icon: Award,
      color: 'text-[#0D47A1]',
      bg: 'bg-blue-50/70',
      border: 'hover:border-[#0D47A1]/20'
    },
    {
      title: 'Youth Development',
      desc: 'Formulating and driving holistic youth development models tailored to unique local requirements.',
      icon: Users,
      color: 'text-[#F57C00]',
      bg: 'bg-orange-50/70',
      border: 'hover:border-[#F57C00]/20'
    },
    {
      title: 'Leadership Training',
      desc: 'Facilitating conferences, high-impact youth assemblies, bootcamps, and workshops nationwide.',
      icon: Zap,
      color: 'text-amber-600',
      bg: 'bg-amber-50/70',
      border: 'hover:border-amber-200'
    },
    {
      title: 'Education',
      desc: 'Championing textbook distribution drives, educational resources, and library installations.',
      icon: BookOpen,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50/70',
      border: 'hover:border-emerald-200'
    },
    {
      title: 'Mentorship',
      desc: 'Connecting children and teenagers with committed mentors to build moral resilience.',
      icon: Heart,
      color: 'text-rose-600',
      bg: 'bg-rose-50/70',
      border: 'hover:border-rose-200'
    },
    {
      title: 'Community Impact',
      desc: 'Directly reaching thousands of students across dozens of schools in multiple states of Nigeria.',
      icon: Sparkles,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50/70',
      border: 'hover:border-indigo-200'
    }
  ];

  const expertise = [
    { name: 'Leadership Development', icon: Award },
    { name: 'Education', icon: BookOpen },
    { name: 'Mentorship', icon: Users },
    { name: 'Public Speaking', icon: Volume2 },
    { name: 'Capacity Building', icon: Zap },
    { name: 'Purpose Discovery', icon: Target }
  ];

  return (
    <div id="founder-profile" className="bg-white space-y-0 text-left">
      
      {/* ==================================================
          1. FOUNDER HERO SECTION
          ================================================== */}
      <section className="py-24 sm:py-32 lg:py-40 bg-slate-50 relative overflow-hidden">
        {/* Architectural background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D47A1]/4 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F57C00]/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            {/* Left Column: Asymmetric Portrait Frame */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Outer brand geometry borders */}
              <div className="absolute -left-3 -top-3 w-20 h-20 border-t-4 border-l-4 border-[#F57C00] rounded-tl-[32px] pointer-events-none z-20" />
              <div className="absolute -right-3 -bottom-3 w-20 h-20 border-b-4 border-r-4 border-[#0D47A1] rounded-br-[32px] pointer-events-none z-20" />
              
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl flex flex-col justify-end group">
                <img 
                  src={imageMoses} 
                  alt="Moses Chibueze - DRYCI Founder"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-[1.03] pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none z-10" />
                
                {/* Floating details badge inside hero image */}
                <div className="relative z-20 m-6 p-6 bg-slate-950/85 backdrop-blur-md rounded-xl border border-white/10 text-left shadow-xl">
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#F57C00] block mb-1">
                    FOUNDER & EXECUTIVE DIRECTOR
                  </span>
                  <h4 className="font-serif font-black text-white text-xl sm:text-2xl leading-none">
                    Moses Chibueze
                  </h4>
                  <p className="text-[11px] text-slate-300 font-sans font-light mt-1.5 leading-normal">
                    Dreams to Reality Youth and Children Initiative
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Intro & Large Quote */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 bg-[#0D47A1]/5 border border-[#0D47A1]/10 rounded-full inline-block">
                  Moses Chibueze
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[0.95]">
                  Our Founder
                </h1>
                <p className="text-[#F57C00] font-mono text-xs sm:text-sm tracking-widest uppercase font-black">
                  Founder, Dreams to Reality Youth and Children Initiative (DRYCI)
                </p>
              </div>

              {/* Short introductory statement */}
              <p className="text-slate-700 text-lg sm:text-xl font-sans font-light leading-relaxed">
                Moses Chibueze is a Nigerian youth development practitioner, educator, mentor and transformational speaker with over a decade of experience in leadership development, education, mentorship and purpose discovery.
              </p>

              {/* Signature Quote Block */}
              <motion.div 
                className="p-6 sm:p-8 rounded-[24px] bg-white border border-slate-150 border-l-4 border-l-[#F57C00] shadow-sm relative overflow-hidden text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Quote className="absolute right-6 top-6 w-16 h-16 text-slate-100 pointer-events-none" />
                <p className="font-serif italic text-slate-800 text-base sm:text-lg leading-relaxed relative z-10 font-medium">
                  "Every child carries greatness. Our responsibility is to create the environment where that greatness can be discovered, developed and deployed for the good of society."
                </p>
                <div className="mt-3 relative z-10">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500 block">
                    — MOSES CHIBUEZE, FOUNDER
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          2. ABOUT THE FOUNDER (Biography Section)
          ================================================== */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D47A1]/2 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F57C00]/2 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
            
            {/* Title Column - 4 cols */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                Biography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                About the Founder
              </h2>
              <p className="text-slate-400 text-sm font-sans font-light">
                Discovering and unlocking potential to transform realities.
              </p>
              <div className="w-12 h-1 bg-[#0D47A1] rounded" />
            </div>

            {/* Concise Paragraphs Column (Exactly 203 words, highly readable, structured) - 8 cols */}
            <div className="lg:col-span-8 text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-light space-y-6 text-left">
              <p>
                Driven by a deep conviction that every child and young person deserves the opportunity to realise their God-given potential, he founded the <strong>Dreams to Reality Youth and Children Initiative (DRYCI)</strong> to provide holistic interventions addressing the educational, leadership, entrepreneurial, emotional, and spiritual needs of children and young people.
              </p>
              <p>
                His work has consistently focused on helping young people move beyond limitations imposed by poverty, inadequate exposure, and traumatic life experiences. By organizing national leadership conferences, developing structured mentoring circles, and sponsoring library textbook distribution drives, he empowers underserved Nigerian adolescents to discover purpose and develop values-driven leadership.
              </p>
              <p>
                As a passionate educator, his core philosophy is to make learning transformational rather than merely informational. Through strategic partnerships with educators, development-minded organizations, and local professionals, he is committed to building DRYCI into a globally respected institution capable of raising generations of positive change-makers who shape the future of families, communities, and nations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. KEY HIGHLIGHTS (6 Bento Feature Cards)
          ================================================== */}
      <section className="py-24 sm:py-32 lg:py-40 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#0D47A1]/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
          
          <div className="text-left max-w-3xl space-y-4 mb-16 sm:mb-20">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
              Direct Impact Lines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Key Highlights
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-sans font-light">
              A record of dedicated impact, transformational education, and strategic youth leadership programs across Nigeria.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className={`bg-white border border-slate-200 rounded-[24px] p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden ${item.border}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="space-y-4 relative z-10">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-extrabold text-lg sm:text-xl text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          4. LEADERSHIP PHILOSOPHY (Elegant Quote Section)
          ================================================== */}
      <section className="py-28 sm:py-36 lg:py-44 bg-[#0D47A1] text-white relative overflow-hidden">
        {/* Soft background identity flares */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F57C00]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-950/45 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center max-w-5xl mx-auto space-y-8">
          <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-black block">
            Leadership Philosophy
          </span>
          
          <div className="relative">
            <Quote className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 text-white/[0.05] pointer-events-none" />
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-extrabold max-w-4xl mx-auto text-slate-50 relative z-10">
              "We must make learning transformational rather than merely informational. True empowerment goes beyond academic excellence to include character development, critical thinking, leadership, innovation and lifelong learning."
            </blockquote>
          </div>

          <div className="pt-4 flex flex-col items-center justify-center space-y-1">
            <div className="w-12 h-0.5 bg-[#F57C00] rounded mb-3" />
            <span className="font-serif font-bold text-lg tracking-wide text-white">Moses Chibueze</span>
            <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest">DRYCI Founder</span>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. AREAS OF EXPERTISE (Badge Cards)
          ================================================== */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white relative">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Title Block - 4 cols */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                Professional Scope
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                Areas of Expertise
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-sans font-light leading-relaxed">
                Applying multi-disciplinary competencies to foster values, academic resilience, and strategic competence in Nigerian youth.
              </p>
            </div>

            {/* Badge Grid - 8 cols */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {expertise.map((exp, idx) => {
                  const Icon = exp.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="p-5 bg-slate-50 border border-slate-150 rounded-2xl flex items-center gap-4 hover:border-[#0D47A1]/20 hover:bg-slate-50/80 transition-all group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0D47A1]/5 text-[#0D47A1] flex items-center justify-center shrink-0 group-hover:bg-[#0D47A1] group-hover:text-white transition-colors duration-300 border border-[#0D47A1]/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-poppins font-bold text-slate-850 text-xs sm:text-sm leading-tight text-left">
                        {exp.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          6. VISION FOR DRYCI
          ================================================== */}
      <section className="py-24 sm:py-32 lg:py-40 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D47A1]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 sm:p-12 lg:p-16 rounded-[32px] shadow-sm relative z-10 text-center space-y-8">
            <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-black block">
              Long-Term Legacy
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              The Vision for DRYCI
            </h2>
            
            <p className="font-serif italic text-slate-700 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
              "His vision for DRYCI is to build a globally respected institution that raises generations of transformational leaders whose influence positively shapes families, communities and nations."
            </p>

            <div className="flex justify-center">
              <div className="w-16 h-0.5 bg-[#F57C00] rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          7. PREMIUM CALL TO ACTION BANNER
          ================================================== */}
      <section className="bg-slate-950 text-white relative overflow-hidden py-20 sm:py-24">
        {/* Elegant glowing background stars */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#0D47A1,transparent_55%)] opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#F57C00,transparent_55%)] opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
            
            <div className="space-y-4 max-w-2xl">
              <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
                Get Involved Today
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                Raise the Next Generation of Leaders
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-sans font-light leading-relaxed">
                Join our movement, partner with us, volunteer your time, or support our educational drives to expand transformational opportunities for youth across Nigeria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a 
                href="#volunteer" 
                className="px-8 py-4 bg-[#F57C00] hover:bg-[#E65100] text-white font-sans font-extrabold text-xs uppercase tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/25 active:scale-98"
              >
                <span>Volunteer With Us</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white font-sans font-extrabold text-xs uppercase tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-4 h-4 text-white/50" />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
