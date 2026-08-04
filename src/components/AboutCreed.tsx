import { motion } from 'motion/react';
import { Compass, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

export default function AboutCreed() {
  return (
    <section className="py-[140px] xl:py-[180px] bg-slate-50 relative overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0D47A1]/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F57C00]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-5xl text-left space-y-4 mb-20">
          <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
            Our Core Creed
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-none">
            Values That Drive Action
          </h2>
          <p className="text-slate-500 text-base sm:text-lg lg:text-xl max-w-3xl font-sans font-light leading-relaxed">
            Our foundational framework combines clear long-term vision, prompt compassionate action, and deep ethical commitment.
          </p>
        </div>

        {/* Elevated Cards - Expanded to full Content container width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 xl:gap-12">
          
          {/* Card 1: Vision */}
          <motion.div 
            className="bg-white border border-slate-100 hover:border-[#0D47A1]/30 rounded-[32px] p-8 sm:p-10 xl:p-12 shadow-sm relative group overflow-hidden flex flex-col justify-between transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px -15px rgba(13, 71, 161, 0.1)' }}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#0D47A1]/5 rounded-full blur-2xl group-hover:bg-[#0D47A1]/8 transition-colors duration-500" />
            
            <div className="relative z-10 space-y-6 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#0D47A1]/10 flex items-center justify-center text-[#0D47A1] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#0D47A1]/20">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#0D47A1] transition-colors duration-300">
                Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                We envision a world where no child or young person is prevented from fulfilling their God-given potential because of poverty, geographical disadvantage or traumatic life experiences. We dream of communities where every young person—regardless of background, location or circumstance—has access to the opportunities, guidance, resources and support needed to discover purpose, develop capacity and become a transformational leader. We believe that when children and young people are intentionally equipped, entire families, communities and nations are transformed.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0D47A1] pt-8 uppercase tracking-wider font-mono">
              <span>Equitable Society</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div 
            className="bg-white border border-slate-100 hover:border-[#F57C00]/30 rounded-[32px] p-8 sm:p-10 xl:p-12 shadow-sm relative group overflow-hidden flex flex-col justify-between transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px -15px rgba(245, 124, 0, 0.1)' }}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#F57C00]/5 rounded-full blur-2xl group-hover:bg-[#F57C00]/8 transition-colors duration-500" />

            <div className="relative z-10 space-y-6 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#F57C00]/10 flex items-center justify-center text-[#F57C00] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#F57C00]/20">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#F57C00] transition-colors duration-300">
                Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Our mission is to identify, inspire, equip and empower children and young people through transformational education, leadership development, mentorship, entrepreneurship, advocacy and faith-based programmes that enable them to overcome barriers, maximise their potential and become responsible leaders who positively influence society. We are committed to creating practical opportunities that help young people move confidently from dreams to reality.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F57C00] pt-8 uppercase tracking-wider font-mono">
              <span>Leadership Pipelines</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 3: Philosophy */}
          <motion.div 
            className="bg-white border border-slate-100 hover:border-emerald-300 rounded-[32px] p-8 sm:p-10 xl:p-12 shadow-sm relative group overflow-hidden flex flex-col justify-between transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02, boxShadow: '0 30px 60px -15px rgba(16, 185, 129, 0.1)' }}
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/8 transition-colors duration-500" />

            <div className="relative z-10 space-y-6 text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-100">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                Philosophy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                At DRYCI, we believe that transformation is neither accidental nor merely inspirational. Transformation is intentional. It occurs when the right environment, the right values, the right mentorship and the right opportunities intersect at the right time. Accordingly, our programmes are designed not merely to motivate young people temporarily but to equip them with enduring knowledge, practical competencies, strong character and a lifelong sense of purpose. For us, success is not measured by attendance figures alone. Success is measured by transformed lives, renewed hope, responsible leadership and lasting societal impact.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 pt-8 uppercase tracking-wider font-mono">
              <span>Holistic Development</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
