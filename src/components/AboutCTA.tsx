import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-[140px] xl:py-[180px] bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D47A1]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 text-center space-y-10 flex flex-col items-center">
        <div className="space-y-4 max-w-5xl">
          <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold block">
            Get Involved
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-tight text-white">
            Join Us in Constructing Brighter Futures
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-sans font-light opacity-95">
            Whether you are a parent, school leader, community advocate, or a value-aligned professional, there is a key place for you in the DRYCI movement. Partner with us to empower Nigerian children and youth today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 w-full sm:w-auto">
          <button
            onClick={() => {
              const el = document.getElementById('volunteer-form');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }
            }}
            className="h-[60px] px-10 bg-[#F57C00] hover:bg-[#E65100] text-white font-poppins font-extrabold text-sm sm:text-base rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer w-full sm:w-auto uppercase tracking-wider"
          >
            <span>Partner as a Volunteer</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="h-[60px] px-10 bg-white/10 hover:bg-white/15 text-white border-2 border-white/20 hover:border-white/40 font-poppins font-extrabold text-sm sm:text-base rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer w-full sm:w-auto uppercase tracking-wider"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
