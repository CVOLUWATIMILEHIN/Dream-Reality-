import { useState } from 'react';
import { TYPOGRAPHY_SCALE } from '../data';
import { FontToken } from '../types';
import { Type, Sparkles, Sliders, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TypographyInspector() {
  const [customText, setCustomText] = useState('');
  const [headerFont, setHeaderFont] = useState<'poppins' | 'serif'>('serif'); // default to serif for elegance as per end instruction!
  const [letterSpacing, setLetterSpacing] = useState<'normal' | 'tight' | 'wide'>('tight');

  const getLetterSpacingClass = () => {
    if (letterSpacing === 'tight') return 'tracking-tight';
    if (letterSpacing === 'wide') return 'tracking-wide';
    return 'tracking-normal';
  };

  const getHeaderFontClass = () => {
    return headerFont === 'serif' ? 'font-serif' : 'font-poppins';
  };

  return (
    <div className="space-y-8" id="typography-section">
      {/* Header and Controller bar */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 border-b border-slate-200 pb-5">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
            2. Typographic Pairings & Hierarchy
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            Established on premium, highly legible Google Fonts. We pair **Inter** (for body readability) with either **Plus Jakarta Sans** (modern, energetic sans-serif) or **Outfit** (friendly geometric sans-serif for clean editorial authority).
          </p>
        </div>

        {/* Live Controller Panel */}
        <div className="flex flex-wrap items-center gap-4 bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-sm text-xs">
          <div className="flex items-center gap-2 border-r border-slate-200 pr-4">
            <Settings2 className="w-4 h-4 text-[#0D47A1]" />
            <span className="font-semibold text-slate-600">Header Style:</span>
            <div className="flex bg-slate-200 p-0.5 rounded-lg ml-1">
              <button
                onClick={() => setHeaderFont('serif')}
                className={`px-2.5 py-1 rounded-md transition-all font-serif font-semibold ${
                  headerFont === 'serif' ? 'bg-white text-[#0D47A1] shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Outfit (Display)
              </button>
              <button
                onClick={() => setHeaderFont('poppins')}
                className={`px-2.5 py-1 rounded-md transition-all font-poppins font-semibold ${
                  headerFont === 'poppins' ? 'bg-white text-[#0D47A1] shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Plus Jakarta Sans
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-slate-400" />
            <span className="font-semibold text-slate-600">Tracking:</span>
            <div className="flex bg-slate-200 p-0.5 rounded-lg">
              <button
                onClick={() => setLetterSpacing('tight')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  letterSpacing === 'tight' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
                }`}
              >
                Tight
              </button>
              <button
                onClick={() => setLetterSpacing('normal')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  letterSpacing === 'normal' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
                }`}
              >
                Normal
              </button>
              <button
                onClick={() => setLetterSpacing('wide')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  letterSpacing === 'wide' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
                }`}
              >
                Wide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Custom Text Tester */}
      <div className="bg-[#0D47A1]/5 border border-[#0D47A1]/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0D47A1] rounded-xl flex items-center justify-center text-white">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-poppins font-bold text-slate-800 text-sm">Interactive Sandbox</h4>
            <p className="text-[11px] text-slate-500">Test the typographic scale in real time by typing below.</p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <input
            type="text"
            placeholder="Type custom brand text here... (e.g. Dreams into Realities)"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full bg-white border border-slate-200 focus:border-[#0D47A1] focus:ring-1 focus:ring-[#0D47A1] outline-none rounded-xl px-4 py-2.5 text-sm transition-all"
          />
        </div>
        {customText && (
          <button
            onClick={() => setCustomText('')}
            className="text-xs text-[#0D47A1] font-semibold hover:underline px-2 py-1"
          >
            Reset
          </button>
        )}
      </div>

      {/* Grid of Typography scale items */}
      <div className="space-y-6">
        {TYPOGRAPHY_SCALE.map((token: FontToken, idx: number) => {
          const isHeading = token.name.includes('Title') || token.name.includes('Hero');
          const fontClass = isHeading ? getHeaderFontClass() : 'font-sans';
          const trackingClass = isHeading ? getLetterSpacingClass() : 'tracking-normal';
          const displaySampleText = customText || token.sampleText;

          // Determine Tailwind sizes mapping
          let sizeClass = 'text-lg';
          if (token.name === 'Hero Title') {
            sizeClass = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl';
          } else if (token.name === 'Section Title') {
            sizeClass = 'text-3xl sm:text-4xl md:text-5xl';
          } else if (token.name === 'Card Title') {
            sizeClass = 'text-xl sm:text-2xl';
          } else if (token.name === 'Body Regular') {
            sizeClass = 'text-base sm:text-[18px]';
          } else if (token.name === 'Button Label / UI') {
            sizeClass = 'text-sm sm:text-base';
          }

          return (
            <motion.div
              key={token.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 hover:border-slate-300 shadow-sm transition-all duration-300"
              id={`typo-card-${token.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Token Info Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-poppins font-bold text-slate-800 text-base">{token.name}</span>
                  <span className="bg-[#0D47A1]/10 text-[#0D47A1] font-semibold px-2 py-0.5 rounded font-mono">
                    {token.size}
                  </span>
                </div>
                <div className="flex items-center gap-4 font-mono text-slate-400">
                  <span>Weight: <strong className="text-slate-600 font-medium">{token.weight}</strong></span>
                  <span>Leading: <strong className="text-slate-600 font-medium">{token.lineHeight}</strong></span>
                </div>
              </div>

              {/* Sample Presentation Area */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="lg:col-span-3">
                  <div className={`${fontClass} ${sizeClass} ${trackingClass} text-slate-800 font-bold leading-tight`}>
                    {displaySampleText}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs space-y-2 lg:col-span-1">
                  <div className="font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#F57C00]" /> Use Case Guideline
                  </div>
                  <p className="text-slate-500 leading-relaxed text-[11px]">{token.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
