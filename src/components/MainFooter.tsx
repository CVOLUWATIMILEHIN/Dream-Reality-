import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, ArrowUp, ShieldCheck } from 'lucide-react';
import DryciLogo from './DryciLogo';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export default function MainFooter({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-16 sm:py-20 border-t border-slate-900 relative overflow-hidden">
      {/* Absolute design accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0D47A1]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand and Description column */}
          <div className="md:col-span-5 space-y-6 text-left">
            <DryciLogo
              className="w-10 h-10"
              showText={true}
              textColor="text-white"
              subtextColor="text-slate-500"
            />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dreams to Reality Youth and Children Initiative (DRYCI) is a registered non-profit organization in Nigeria dedicated to education, youth training, and grassroots community advocacy. We partner with parents, teachers, and global supporters.
            </p>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/DRYCI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official DRYCI Facebook Page"
                className="px-3.5 py-2 rounded-lg bg-[#0D47A1] hover:bg-[#F57C00] text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-sm"
              >
                <Facebook className="w-4 h-4" />
                <span>facebook.com/DRYCI</span>
              </a>
              <a
                href="https://www.facebook.com/DRYCI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-slate-900 hover:bg-[#0D47A1] text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/DRYCI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-slate-900 hover:bg-[#0D47A1] text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/DRYCI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 hover:bg-[#0D47A1] text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-wider mb-4">
              Core Interventions
            </h4>
            <ul className="space-y-3 font-medium">
              <li>
                <a href="#epiphany" onClick={(e) => handleLinkClick(e, 'epiphany')} className="hover:text-[#F57C00] transition-colors">EPIPHANY Bootcamp</a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-[#F57C00] transition-colors">Inclusive Academic Support</a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-[#F57C00] transition-colors">Tech & Vocational Training</a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, 'programs')} className="hover:text-[#F57C00] transition-colors">Water Wells & Hygiene</a>
              </li>
            </ul>
          </div>

          {/* Verification & Trust seal column */}
          <div className="md:col-span-4 text-left space-y-6">
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Authorized & Certified</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Dreams to Reality Youth and Children Initiative (DRYCI) is an incorporated not-for-profit organisation. Established in March 2024, our head office is in Calabar, Cross River State, Nigeria.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span>Coded with</span>
              <Heart className="w-3.5 h-3.5 text-[#F57C00] fill-current animate-pulse" />
              <span>for African Leadership &bull;</span>
              <a
                href="https://oluwatimilehincv.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F57C00] font-bold underline decoration-[#F57C00]/60 underline-offset-4 transition-colors"
              >
                Built by CV by Vincent
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              &copy; {currentYear} Dreams to Reality Youth and Children Initiative. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="https://oluwatimilehincv.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 hover:bg-[#F57C00] border border-slate-800 hover:border-[#F57C00] text-slate-300 hover:text-white font-mono text-[10px] uppercase tracking-wider font-bold transition-all shadow-sm"
            >
              <span>Built by CV by Vincent</span>
            </a>
          </div>
          
          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 bg-slate-900 group-hover:bg-[#0D47A1] rounded-lg flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
