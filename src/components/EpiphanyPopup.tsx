import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import flyerImage from './epiph.png'; // Using the user's uploaded conference flyer

interface EpiphanyPopupProps {
  onViewDetails: () => void;
}

export default function EpiphanyPopup({ onViewDetails }: EpiphanyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const GOOGLE_FORMS_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdVtEEFM1s_jdzJcSP51zjHxCcmgdR-bL0Uc_O1gFcurIJPiw/viewform";
  const CONFERENCE_END_DATE = new Date('2026-08-28T20:00:00'); // August 28, 2026, 8:00 PM

  useEffect(() => {
    // 1. Check if the conference has already ended
    const isConferenceEnded = new Date() > CONFERENCE_END_DATE;
    if (isConferenceEnded) {
      return; // Automatically disable if past the date
    }

    // 2. Trigger popup with a snappy delay of 1 second for instant gratification & reliable dev feedback
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Calculate countdown to August 26, 2026
  useEffect(() => {
    const targetDate = new Date('2026-08-26T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    window.open(GOOGLE_FORMS_LINK, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  const handleViewDetails = () => {
    onViewDetails();
    handleClose();
  };

  // Focus trap list of focusable elements
  const getFocusableElements = () => {
    if (!modalRef.current) return [];
    return Array.from(
      modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => {
      const htmlEl = el as HTMLElement;
      return !htmlEl.hasAttribute('disabled') && htmlEl.getAttribute('aria-hidden') !== 'true';
    }) as HTMLElement[];
  };

  // Keyboard navigation, ESC key closing & Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault(); // Never refresh page
        handleClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = getFocusableElements();
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus({ preventScroll: true });
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus({ preventScroll: true });
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle previous element keyboard focus restoration
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const timer = setTimeout(() => {
        const focusable = getFocusableElements();
        if (focusable.length > 0) {
          focusable[0].focus({ preventScroll: true });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus({ preventScroll: true });
      }
    }
  }, [isOpen]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          aria-describedby="popup-desc"
        >
          {/* Dismiss backdrop on click */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0"
          />

          {/* Premium Large Modal Card */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative bg-white text-slate-800 rounded-[24px] md:rounded-[32px] shadow-2xl w-[94%] sm:w-[92%] md:max-w-4xl z-10 border border-slate-100 flex flex-col max-h-[90dvh] md:max-h-[90vh] lg:max-h-none overflow-hidden text-left"
          >
            {/* Close Button on top right of modal - stays permanently accessible */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 bg-slate-900/60 hover:bg-slate-900 text-white p-2 sm:p-2.5 rounded-full cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
              aria-label="Close promotion"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Container Wrapper */}
            <div className="w-full overflow-y-auto md:overflow-visible flex flex-col md:grid md:grid-cols-12 scrollbar-thin">
              
              {/* Left side: Flyer Image Block */}
              <div className="relative md:col-span-5 bg-slate-950 flex items-center justify-center p-4 md:p-6 shrink-0 w-full md:min-h-[550px]">
                <img 
                  src={flyerImage} 
                  alt="EPIPHANY Conference Flyer" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={400}
                  height={550}
                  className="w-full h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[580px] object-contain rounded-xl shadow-md"
                />
                
                {/* Glowing Label */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F57C00] text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3 text-white animate-pulse" />
                  <span>EPIPHANY 2026</span>
                </div>
              </div>

              {/* Right side: Description & Metadata Section */}
              <div className="md:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#0D47A1] uppercase bg-blue-50 px-3 py-1 rounded-md inline-block">
                    26th – 28th August 2026
                  </span>
                  <h4 id="popup-title" className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-tight">
                    EPIPHANY: DRYCI's Flagship Annual Girls' Leadership Conference
                  </h4>
                  <div className="text-xs text-slate-600 font-medium font-sans">
                    Theme: <span className="text-[#F57C00] font-serif font-semibold italic text-sm">"Awakening Purpose. Igniting Leadership. Transforming Lives."</span>
                  </div>
                  <p id="popup-desc" className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light font-sans">
                    An uncompromised leadership and personal development summit designed exclusively for secondary school girls to build moral values, discover purpose, and unlock vision.
                  </p>

                  {/* Highlights List to enrich the larger layout */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-[#F57C00] mt-0.5" aria-hidden="true">✦</span>
                      <span><strong>Target Audience:</strong> Girls in Senior Secondary School (SS1–SS3)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-[#F57C00] mt-0.5" aria-hidden="true">✦</span>
                      <span><strong>100% Fully Sponsored:</strong> Pass, stationery backpack, leadership manuals, and lunches included at zero cost.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-[#F57C00] mt-0.5" aria-hidden="true">✦</span>
                      <span><strong>Safety & Supervision:</strong> Strictly supervised by verified female mentors and secure environments.</span>
                    </div>
                  </div>

                  {/* Live Countdown Timer */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">CONFERENCE COUNTDOWN</span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "DAYS", value: timeLeft.days },
                        { label: "HOURS", value: timeLeft.hours },
                        { label: "MINS", value: timeLeft.minutes },
                        { label: "SECS", value: timeLeft.seconds }
                      ].map((t) => (
                        <div key={t.label} className="bg-slate-50 border border-slate-100 rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 min-w-[58px] sm:min-w-[62px] text-center shadow-xs">
                          <span className="text-sm sm:text-lg font-mono font-black text-[#0D47A1] block leading-none">{String(t.value).padStart(2, '0')}</span>
                          <span className="text-[8px] font-mono tracking-wider text-slate-400 block mt-1 font-bold">{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date & Venue grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0D47A1] flex items-center justify-center shrink-0">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase">DATE & TIME</span>
                      <span className="text-xs font-semibold text-slate-800">26–28 Aug, 8am - 3pm</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F57C00] flex items-center justify-center shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase">PHYSICAL VENUE</span>
                      <span className="text-xs font-semibold text-slate-800 leading-tight block truncate">Edgerly Girls' Sec. School, Calabar</span>
                    </div>
                  </div>
                </div>

                {/* Interactive buttons */}
                <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
                  <button
                    onClick={handleViewDetails}
                    className="w-full sm:flex-1 h-12 border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                  >
                    <span>View Details</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>

                  <a
                    href={GOOGLE_FORMS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 h-12 bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00] text-center"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Quick inner ArrowRight icon helper to prevent unused Lucide imports if need be
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
