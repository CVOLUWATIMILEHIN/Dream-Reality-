import { useState } from 'react';
import { BUTTON_STATES } from '../data';
import { ButtonToken } from '../types';
import { Sparkles, Code, Check, Eye, HelpCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ButtonShowcase() {
  const [activeCodeTab, setActiveCodeTab] = useState<string | null>(null);
  const [btnState, setBtnState] = useState<'normal' | 'loading' | 'disabled'>('normal');
  const [clickCount, setClickCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const triggerClick = (btnName: string) => {
    if (btnState === 'disabled' || btnState === 'loading') return;
    setClickCount((prev) => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="space-y-8" id="button-system-section">
      {/* Header and Controller */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0D47A1] rounded-full inline-block" />
            3. Interactive Button & Action States
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl">
            Clean, tactile elements engineered for elevated micro-interactions. Every action trigger responds with a physics-based lift, subtle shadow adjustments, and smooth color blends.
          </p>
        </div>

        {/* Global State Modifiers */}
        <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto border border-slate-200/50">
          <button
            onClick={() => setBtnState('normal')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              btnState === 'normal' ? 'bg-white text-[#0D47A1] shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Normal (Hover Ready)
          </button>
          <button
            onClick={() => setBtnState('loading')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              btnState === 'loading' ? 'bg-white text-[#0D47A1] shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Loading State
          </button>
          <button
            onClick={() => setBtnState('disabled')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              btnState === 'disabled' ? 'bg-white text-slate-500 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Disabled State
          </button>
        </div>
      </div>

      {/* Button Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {BUTTON_STATES.map((token: ButtonToken, idx: number) => {
          const isPrimary = token.type === 'primary';
          const isSecondary = token.type === 'secondary';
          const isGhost = token.type === 'ghost';
          const isTabActive = activeCodeTab === token.name;

          return (
            <motion.div
              key={token.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all duration-300"
              id={`btn-card-${token.type}`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-poppins font-bold text-slate-800 text-base">{token.name}</h4>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {token.type}
                  </span>
                </div>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed min-h-[40px]">
                  {token.description}
                </p>

                {/* Demonstration Box */}
                <div className="my-8 h-32 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <AnimatePresence mode="wait">
                    {btnState === 'loading' ? (
                      <motion.button
                        key="loading"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        disabled
                        className={`px-8 py-4 font-semibold rounded-full flex items-center gap-2 cursor-not-allowed ${
                          isPrimary
                            ? 'bg-[#0D47A1]/80 text-white'
                            : isSecondary
                            ? 'border-2 border-[#0D47A1]/40 text-[#0D47A1]/60 bg-white'
                            : 'text-slate-400 bg-transparent'
                        }`}
                      >
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing...</span>
                      </motion.button>
                    ) : btnState === 'disabled' ? (
                      <motion.button
                        key="disabled"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        disabled
                        className={`px-8 py-4 font-semibold rounded-full cursor-not-allowed ${
                          isPrimary
                            ? 'bg-slate-200 text-slate-400 shadow-none'
                            : isSecondary
                            ? 'border-2 border-slate-200 text-slate-400 bg-white'
                            : 'text-slate-300 bg-transparent'
                        }`}
                      >
                        Unavailable
                      </motion.button>
                    ) : (
                      <motion.div
                        key="interactive"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* RENDER DYNAMIC BUTTON BASED ON DEFINITIONS */}
                        {isPrimary && (
                          <motion.button
                            onClick={() => triggerClick(token.name)}
                            whileHover={{ y: -3, scale: 1.01 }}
                            whileTap={{ y: 0, scale: 0.98 }}
                            className="px-8 py-4 bg-[#0D47A1] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:shadow-blue-900/15 cursor-pointer relative overflow-hidden group transition-shadow duration-300"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Donate Now <Sparkles className="w-4 h-4 text-orange-400" />
                            </span>
                            {/* Glow radial overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                          </motion.button>
                        )}

                        {isSecondary && (
                          <motion.button
                            onClick={() => triggerClick(token.name)}
                            whileHover={{ y: -3 }}
                            whileTap={{ y: 0, scale: 0.98 }}
                            className="px-8 py-4 border-2 border-[#0D47A1] text-[#0D47A1] font-semibold rounded-full hover:bg-[#0D47A1] hover:text-white cursor-pointer transition-all duration-300"
                          >
                            Explore Programs
                          </motion.button>
                        )}

                        {isGhost && (
                          <motion.button
                            onClick={() => triggerClick(token.name)}
                            className="relative py-2 font-semibold text-slate-700 hover:text-[#0D47A1] cursor-pointer group flex items-center gap-1 text-sm sm:text-base"
                          >
                            <span>Read Inspiring Stories</span>
                            <span className="text-slate-400 group-hover:text-[#0D47A1] group-hover:translate-x-1 transition-all duration-300">
                              →
                            </span>
                            {/* Sliding Underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D47A1] transition-all duration-300 group-hover:w-full" />
                          </motion.button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Code Snippet & Info Drawer */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <button
                  onClick={() => setActiveCodeTab(isTabActive ? null : token.name)}
                  className="flex items-center gap-1.5 text-xs text-[#0D47A1] hover:text-blue-800 font-semibold cursor-pointer select-none"
                >
                  {isTabActive ? (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Hide Integration Code</span>
                    </>
                  ) : (
                    <>
                      <Code className="w-3.5 h-3.5" />
                      <span>Show Tailwind Integration Code</span>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isTabActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-slate-900 text-slate-300 text-[11px] font-mono rounded-xl p-3 mt-3 overflow-x-auto border border-slate-800 leading-relaxed max-w-full">
                        <pre className="whitespace-pre-wrap word-break-all">{token.markup}</pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Action Counter feedback */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white font-semibold text-xs px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-emerald-500"
          >
            <Check className="w-4 h-4" />
            <span>Tactile Response Validated ({clickCount} clicks simulated)</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
