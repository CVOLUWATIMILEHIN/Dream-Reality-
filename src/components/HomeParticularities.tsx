import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, ShieldCheck, ArrowRight, Heart, Sparkles, CheckCircle } from 'lucide-react';

interface HomeParticularitiesProps {
  onNavigate: (section: string) => void;
}

export default function HomeParticularities({ onNavigate }: HomeParticularitiesProps) {
  const corePillars = [
    {
      title: 'Leadership Development',
      desc: 'Nurturing ethical guidance, moral orientation, and values in Nigerian teenagers to prepare them for global responsibility.',
      icon: Award,
      color: 'text-[#F57C00]',
      bg: 'bg-[#F57C00]/10',
      border: 'border-[#F57C00]/10 hover:border-[#F57C00]/30',
      action: 'about'
    },
    {
      title: 'Education & Mentorship',
      desc: 'Providing qualitative books, study tools, academic scholarships, and linking young minds with supportive, local professional mentors.',
      icon: BookOpen,
      color: 'text-[#0D47A1]',
      bg: 'bg-[#0D47A1]/10',
      border: 'border-[#0D47A1]/10 hover:border-[#0D47A1]/30',
      action: 'programs'
    },
    {
      title: 'Youth Empowerment',
      desc: 'Equipping grassroots adolescents with digital capability, vocational life skills, and constructive community advocacy channels.',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100 hover:border-emerald-200',
      action: 'impact'
    }
  ];

  const handleCTA = (section: string) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden w-full border-t border-slate-100">
      {/* Visual background accents */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#0D47A1]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#F57C00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Intro Block: Particularities and Overview */}
        <div className="text-left space-y-4 mb-16 max-w-4xl">
          <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center gap-1.5">
            <Sparkles className="w-4.5 h-4.5 text-[#F57C00]" />
            <span>Our Core Focus</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nurturing Potential. Transforming Realities.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
            Dreams to Reality Youth and Children Initiative (DRYCI) is an incorporated not-for-profit organisation. We are dedicated to providing the educational support, ethical framework, and direct local community resources required to raise a generation of purpose-driven youth.
          </p>
        </div>

        {/* The 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-slate-50/50 border border-slate-150/80 rounded-3xl text-left space-y-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 group cursor-pointer"
              onClick={() => handleCTA(pillar.action)}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#0D47A1]">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-[#0D47A1] inline-flex items-center gap-2 pt-2 transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Organizational Highlight Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full bg-slate-900 text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden text-left shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57C00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0D47A1]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-current animate-pulse text-amber-400" />
                <span>Our Nigeria-wide Mission</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Empowering children from the classroom to the community.
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By setting up modern libraries, arranging structured value-orientation classes, providing scholastic guidance, and supplying clean water, we make dreams tangible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-4 shrink-0">
              <button
                onClick={() => handleCTA('volunteer')}
                className="px-6 py-4 bg-[#F57C00] hover:bg-[#D86D00] hover:scale-105 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-orange-500/20 transition-all duration-300 text-center cursor-pointer"
              >
                Become a Volunteer
              </button>
              <button
                onClick={() => handleCTA('contact')}
                className="px-6 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-slate-950 hover:scale-105 active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 text-center cursor-pointer"
              >
                Partner with us
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
