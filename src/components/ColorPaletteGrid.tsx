import { useState } from 'react';
import { BRAND_COLORS } from '../data';
import { ColorToken } from '../types';
import { Copy, Check, ShieldAlert, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ColorPaletteGrid() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'hex' | 'class') => {
    navigator.clipboard.writeText(text);
    setCopiedValue(`${text}-${type}`);
    setTimeout(() => setCopiedValue(null), 1500);
  };

  return (
    <div className="space-y-8" id="color-palette-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
            1. Unified Color System
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            A minimalist, trust-building palette optimized for humanitarian appeal. Our Primary Royal Blue carries authority, our Vibrant Orange drives action, and our Emerald Green highlights positive growth.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-slate-100 rounded-lg p-1.5 text-xs font-mono border border-slate-200/50">
          <span className="font-semibold text-slate-500 px-2 py-1">WCAG 2.1 Compliance:</span>
          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> AA/AAA Pass
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {BRAND_COLORS.map((color: ColorToken, idx: number) => {
          const isCopiedHex = copiedValue === `${color.hex}-hex`;
          const isCopiedClass = copiedValue === `${color.bgClass}-class`;

          return (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              id={`color-card-${color.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Visual Color Swatch */}
              <div className={`h-36 ${color.bgClass} relative flex items-end justify-between p-4 transition-transform duration-500 group-hover:scale-[1.01]`}>
                {/* Visual indicator of the colors tone */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-2.5 py-1 text-[11px] font-mono text-white/90 border border-white/20 select-none">
                  {color.hex}
                </div>

                {/* Swatch Copy Buttons */}
                <div className="flex gap-1.5">
                  <button
                    onClick={() => copyToClipboard(color.hex, 'hex')}
                    title="Copy Hex"
                    className="p-1.5 rounded-md bg-white/25 hover:bg-white/40 text-white backdrop-blur-md transition-all border border-white/10"
                  >
                    {isCopiedHex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Token Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-poppins font-bold text-slate-800 text-lg leading-snug">{color.name}</h4>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      Token
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#0D47A1] mt-1 italic">{color.role}</p>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">{color.description}</p>
                </div>

                {/* Developer Copy Fields & Accessibility Check */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                  {/* Tailwind Class Copy */}
                  <div className="flex items-center justify-between text-xs font-mono bg-slate-50 border border-slate-100 rounded-lg p-2 hover:bg-slate-100/50 transition-colors">
                    <span className="text-slate-500 select-all">{color.bgClass}</span>
                    <button
                      onClick={() => copyToClipboard(color.bgClass, 'class')}
                      className="text-slate-400 hover:text-[#0D47A1] p-1 transition-colors"
                    >
                      {isCopiedClass ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Contrast Ratings */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D47A1]" />
                      <span>VS White:</span>
                    </span>
                    <span className="font-semibold text-slate-700">{color.contrastWhite}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span>VS Dark text:</span>
                    </span>
                    <span className="font-semibold text-slate-700">{color.contrastDark}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
