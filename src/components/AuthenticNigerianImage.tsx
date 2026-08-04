import { Camera, MapPin, ShieldCheck } from 'lucide-react';

import calabar1 from './gallery_calabar_20260205_115959.jpg';
import calabar2 from './gallery_calabar_20260205_111722.jpg';
import calabar3 from './gallery_calabar_20260205_112327.jpg';
import calabar4 from './gallery_calabar_20260205_113039.jpg';
import calabar5 from './gallery_calabar_20260205_113703.jpg';
import calabar6 from './gallery_calabar_20260205_114311.jpg';
import calabar7 from './gallery_calabar_20260205_114526.jpg';
import calabar8 from './gallery_calabar_gallery_49.jpg';
import calabar9 from './gallery_calabar_gallery_50.jpg';
import calabar10 from './gallery_calabar_20260205_114701.jpg';

interface AuthenticNigerianImageProps {
  title: string;
  location: string;
  subject: string;
  uniform: string;
  lighting?: string;
  aspectRatio?: string;
  className?: string;
}

// Curated collection of real Calabar school outreach photographs
const curatedPhotos = [
  {
    url: calabar1,
    desc: 'Joyful students raising hands in active classroom learning'
  },
  {
    url: calabar2,
    desc: 'Young children in a reading group smiling with books'
  },
  {
    url: calabar3,
    desc: 'Primary students writing and collaborating at wooden desks'
  },
  {
    url: calabar4,
    desc: 'Secondary students gathered together reading in a library'
  },
  {
    url: calabar5,
    desc: 'Happy children holding study books and laughing'
  },
  {
    url: calabar6,
    desc: 'A classroom mentor guiding enthusiastic young minds'
  },
  {
    url: calabar7,
    desc: 'Smiling children celebrating educational access and materials'
  },
  {
    url: calabar8,
    desc: 'Secondary school students in computer lab or classroom research'
  },
  {
    url: calabar9,
    desc: 'Neatly organized academic library books'
  },
  {
    url: calabar10,
    desc: 'Students utilizing digital computers and training resources'
  }
];

function getPhotoUrl(title: string, location: string): string {
  const combined = (title + ' ' + location).toLowerCase();
  
  if (combined.includes('enugu') || combined.includes('academic') || combined.includes('school')) {
    return calabar1;
  }
  if (combined.includes('lagos') || combined.includes('outreach') || combined.includes('community')) {
    return calabar2;
  }
  if (combined.includes('library') || combined.includes('book') || combined.includes('literacy')) {
    return calabar4;
  }
  if (combined.includes('leadership') || combined.includes('mentorship') || combined.includes('youth') || combined.includes('ethical')) {
    return calabar3;
  }
  if (combined.includes('digital') || combined.includes('innovation') || combined.includes('skill') || combined.includes('computer') || combined.includes('advocate')) {
    return calabar10;
  }
  if (combined.includes('scholarship') || combined.includes('sponsorship') || combined.includes('fund') || combined.includes('excellence')) {
    return calabar5;
  }
  if (combined.includes('faith') || combined.includes('spiritual') || combined.includes('bible') || combined.includes('values') || combined.includes('seminar')) {
    return calabar6;
  }
  if (combined.includes('advocacy') || combined.includes('voice') || combined.includes('empower') || combined.includes('ambassador')) {
    return calabar7;
  }
  
  // Hash selection fallback for unique matching
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = combined.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % curatedPhotos.length;
  return curatedPhotos[index].url;
}

export default function AuthenticNigerianImage({
  title,
  location,
  subject,
  uniform,
  lighting = "Natural, soft daylight documentary photography",
  aspectRatio = "aspect-[4/3]",
  className = ""
}: AuthenticNigerianImageProps) {
  const imageUrl = getPhotoUrl(title, location);

  return (
    <div 
      className={`relative ${aspectRatio} w-full rounded-[28px] overflow-hidden bg-slate-950 border border-slate-800/25 flex flex-col justify-between p-5 select-none group shadow-lg ${className}`}
    >
      {/* 1. Actual Photographic Image with Zoom Transition on Hover */}
      <img 
        src={imageUrl} 
        alt={title}
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          const combined = (title + ' ' + location).toLowerCase();
          if (combined.includes('enugu') || combined.includes('academic') || combined.includes('school')) {
            target.src = calabar1;
          } else if (combined.includes('lagos') || combined.includes('outreach') || combined.includes('community')) {
            target.src = calabar2;
          } else if (combined.includes('library') || combined.includes('book') || combined.includes('literacy')) {
            target.src = calabar4;
          } else if (combined.includes('leadership') || combined.includes('mentorship') || combined.includes('youth') || combined.includes('ethical')) {
            target.src = calabar3;
          } else {
            target.src = calabar5;
          }
        }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none z-0"
      />

      {/* 2. Premium visual gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

      {/* 3. Viewfinder brackets in four corners for professional camera focus look */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/40 rounded-tl pointer-events-none z-20 group-hover:border-[#F57C00]/80 transition-colors duration-500" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-white/40 rounded-tr pointer-events-none z-20 group-hover:border-[#F57C00]/80 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-white/40 rounded-bl pointer-events-none z-20 group-hover:border-[#0D47A1]/80 transition-colors duration-500" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-white/40 rounded-br pointer-events-none z-20 group-hover:border-[#0D47A1]/80 transition-colors duration-500" />

      {/* 4. Top Overlay Badge bar */}
      <div className="relative z-20 flex items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full shadow-sm">
          <Camera className="w-3 h-3 text-[#F57C00] animate-pulse" />
          <span className="font-mono text-[8px] font-bold text-slate-200 uppercase tracking-widest">
            DRYCI Field View
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#0D47A1]/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[8px] text-white font-mono uppercase tracking-widest">
          <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
          <span>Verified</span>
        </div>
      </div>

      {/* 5. Bottom Overlay: High-contrast typography detail card */}
      <div className="relative z-20 mt-auto text-left space-y-1">
        <div className="flex items-center gap-1 text-amber-400 font-mono text-[10px] uppercase tracking-wider font-bold">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>
        
        <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors duration-300">
          {title}
        </h4>
        
        <p className="text-[11px] text-slate-300 leading-normal font-sans line-clamp-2 pt-0.5 opacity-90">
          {subject}
        </p>
      </div>
    </div>
  );
}
