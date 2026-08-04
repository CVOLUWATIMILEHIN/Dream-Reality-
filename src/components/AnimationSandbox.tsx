import { useState } from 'react';
import { ANIMATIONS_METADATA } from '../data';
import { Play, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

export default function AnimationSandbox() {
  const [animationKey, setAnimationKey] = useState(0);
  const [countValue, setCountValue] = useState(0);

  const triggerCounter = () => {
    setCountValue(0);
    const obj = { val: 0 };
    animate(obj, { val: 14238 }, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setCountValue(Math.floor(latest));
      }
    });
  };

  const reloadAll = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-8" id="animations-section">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
            6. Premium Animation Presets
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            Symmetric, non-distracting motion values engineered through `motion/react`. We utilize cubic-bezier curves to give components a physically organic velocity.
          </p>
        </div>

        <button
          onClick={reloadAll}
          className="px-4 py-2 border border-slate-200 hover:border-[#0D47A1] text-slate-700 hover:text-[#0D47A1] rounded-xl flex items-center gap-2 text-xs font-bold transition-all bg-white self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Animations</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Animations Specifications */}
        <div className="space-y-4">
          <h4 className="font-poppins font-bold text-slate-800 text-base flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-[#0D47A1]" /> Motion Specifications Table
          </h4>
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
                  <th className="px-5 py-3">Preset Name</th>
                  <th className="px-5 py-3">Motion Parameters</th>
                  <th className="px-5 py-3">Timing Spec</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-500">
                {ANIMATIONS_METADATA.map((anim) => (
                  <tr key={anim.name} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-5 py-3.5 font-sans font-bold text-slate-700">{anim.name}</td>
                    <td className="px-5 py-3.5 text-blue-800">{anim.effect}</td>
                    <td className="px-5 py-3.5 text-orange-700">{anim.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Playground Sandbox */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="font-poppins font-bold text-slate-800 text-base">Live Animation Sandbox</h4>
            <p className="text-slate-500 text-xs mt-1">
              Click play elements to see presets run in real-time.
            </p>

            {/* Test Cards triggers */}
            <div className="grid grid-cols-2 gap-4 my-6" key={animationKey}>
              {/* Fade Up Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex flex-col justify-between h-28"
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Preset 1</span>
                <span className="font-poppins font-bold text-xs text-[#0D47A1]">Fade Up Demo</span>
                <span className="text-[10px] text-slate-400">Triggered on entering viewport</span>
              </motion.div>

              {/* Zoom Scale Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex flex-col justify-between h-28"
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Preset 2</span>
                <span className="font-poppins font-bold text-xs text-[#F57C00]">Scale & Zoom</span>
                <span className="text-[10px] text-slate-400">Applied to high-impact modals</span>
              </motion.div>
            </div>
          </div>

          {/* Interactive Counter block */}
          <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-mono text-[#2E7D32] uppercase font-bold tracking-widest block">
                Humanitarian Analytics
              </span>
              <div className="font-serif text-3xl font-extrabold text-slate-800">
                {countValue.toLocaleString() || '---'}
              </div>
              <span className="text-[11px] text-slate-400 block">Children impacted globally</span>
            </div>

            <button
              onClick={triggerCounter}
              className="px-6 py-3 bg-[#2E7D32] hover:bg-[#225C25] text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulate Counter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
