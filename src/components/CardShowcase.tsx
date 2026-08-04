import { useState } from 'react';
import { DEMO_CARDS, IMAGE_PHILOSOPHIES } from '../data';
import { CardToken, ImagePhilosophy } from '../types';
import { Heart, Image as ImageIcon, Sparkles, Check, Info, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import DryciLogo from './DryciLogo';
import AuthenticNigerianImage from './AuthenticNigerianImage';

export default function CardShowcase() {
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<ImagePhilosophy | null>(null);

  return (
    <div className="space-y-12" id="card-system-section">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
            4. Cards & Visual Art Direction
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            Clean containers framed by 20px rounded corners, deep soft elevations, and immersive image transitions. Powered strictly by authentic photography representing dignity, strength, and joy.
          </p>
        </div>
      </div>

      {/* Art Direction Principles / Creative Guidelines */}
      <div className="bg-[#F57C00]/5 border border-[#F57C00]/10 rounded-2xl p-6 lg:p-8">
        <h4 className="font-poppins font-bold text-slate-800 text-lg flex items-center gap-2 mb-2">
          <ImageIcon className="w-5 h-5 text-[#F57C00]" />
          Visual Selection Philosophy (Authenticity Guardrails)
        </h4>
        <p className="text-slate-500 text-xs sm:text-sm max-w-3xl leading-relaxed mb-6">
          To build credible global NGO trust, DRYCI strictly prohibits artificial, sterile studio photography. We prioritize authentic snapshots of real life in rural/urban communities—emphasizing collaborative leadership and self-determination.
        </p>

        {/* 4 Pillars of Art Direction */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {IMAGE_PHILOSOPHIES.map((phil: ImagePhilosophy) => (
            <div
              key={phil.title}
              onClick={() => setSelectedPhilosophy(phil)}
              className="bg-white border border-slate-200/60 p-5 rounded-xl hover:border-[#F57C00]/30 hover:shadow-sm cursor-pointer transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-poppins font-bold text-xs text-[#F57C00] uppercase tracking-wider">
                  Art Standard
                </span>
                <Info className="w-4 h-4 text-slate-300 group-hover:text-[#F57C00] transition-colors" />
              </div>
              <h5 className="font-poppins font-bold text-slate-800 text-sm leading-snug group-hover:text-[#0D47A1] transition-colors">
                {phil.title}
              </h5>
              <p className="text-slate-500 text-[11px] mt-2 leading-relaxed">
                {phil.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Official Brand Logo Specification */}
      <div className="bg-slate-900 rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-lg border border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D47A1]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F57C00]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Logo Visual Stage */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-950/80 rounded-xl p-8 border border-slate-800 shadow-inner group">
            <DryciLogo className="w-40 h-40" />
            <div className="text-center mt-6">
              <span className="font-poppins font-extrabold text-2xl tracking-tight text-white block">
                DRYCI
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#F57C00] font-bold block mt-1">
                Youth & Children Initiative
              </span>
            </div>
          </div>

          {/* Logo Concept & Architecture Details */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-[#F57C00] uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Core Emblem Design
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                Official DRYCI Logo Token Specification
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                The Dreams to Reality logo is a crafted circular badge designed to represent infinite hope, structural transformation, and the sacred potential of every child.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="font-bold text-white block">The Child & Star</span>
                <p className="text-slate-400 leading-relaxed">
                  A young silhouette looking up and reaching high towards a large star, representing the courage to dream and turn aspiration into reality.
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="font-bold text-white block">The Golden Wings</span>
                <p className="text-slate-400 leading-relaxed">
                  Stylized golden feathers representing flight, progress, self-determination, and the freedom given through inclusive education.
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="font-bold text-white block">The Crescent Moon</span>
                <p className="text-slate-400 leading-relaxed">
                  A comforting golden crescent cradling the night sky, symbolizing the protective structure, safety, and guidance of community leadership.
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1">
                <span className="font-bold text-[#4FC3F7] block">Vibrant Sky Gradient</span>
                <p className="text-slate-400 leading-relaxed">
                  A radial blue transition of light to deep ocean sky, honoring Nigerian heritage and representing the deep credibility of a global non-profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actual Live Card System Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {DEMO_CARDS.map((card: CardToken, idx: number) => {
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white rounded-[20px] overflow-hidden border border-slate-200 hover:border-slate-300/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
              id={`showcase-card-${idx}`}
            >
              {/* Card Image Cover - Fully compliant specification placeholder */}
              <div className="relative">
                <AuthenticNigerianImage
                  title={card.title}
                  location="CAC Registered Region Focus"
                  subject={card.description}
                  uniform="Official school uniform of the local district."
                  lighting="Crisp morning sunlight showing natural community background."
                  aspectRatio="aspect-video"
                  className="w-full"
                />

                {/* Shading scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0D47A1] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-slate-200/50">
                  {card.category}
                </div>

                {/* Impact Indicator Tag */}
                {card.impactMetric && (
                  <div className="absolute bottom-4 right-4 bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    <span>{card.impactMetric}</span>
                  </div>
                )}
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-poppins font-bold text-slate-800 text-lg leading-snug group-hover:text-[#0D47A1] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Metadata & Secondary info */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 font-mono uppercase tracking-wider">
                  <span>Owner: <strong className="text-slate-600 font-medium">{card.author}</strong></span>
                  <span className="text-[#0D47A1] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    View Details →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Art Standard Dialog Modal */}
      <AnimatePresence>
        {selectedPhilosophy && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative"
            >
              <h4 className="font-poppins font-extrabold text-[#0D47A1] text-xl mb-2">
                {selectedPhilosophy.title}
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                {selectedPhilosophy.description}
              </p>

              <div className="bg-[#F57C00]/5 border border-[#F57C00]/15 rounded-xl p-4 mb-6">
                <span className="text-xs font-bold text-[#F57C00] uppercase tracking-wider block mb-1">
                  Creative Direction Instruction:
                </span>
                <p className="text-slate-800 text-xs leading-relaxed italic">
                  "{selectedPhilosophy.exampleText}"
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedPhilosophy(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all cursor-pointer"
                >
                  Close Rule
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
