import React, { useState, useEffect } from 'react';
import { 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Calendar, 
  MapPin, 
  Upload, 
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroSection1 from './gallery_calabar_gallery_49.jpg';
import { 
  PhotoItem, 
  VideoItem, 
  initialPhotos, 
  initialVideos 
} from '../data/galleryData';

interface MainGalleryProps {
  onNavigate?: (section: string) => void;
}

interface UnifiedMediaItem {
  id: string;
  url?: string;         // for photo
  thumbnail?: string;   // for video
  embedId?: string;     // for video
  type?: 'youtube' | 'vimeo'; // for video
  duration?: string;    // for video
  title: string;
  description: string;
  date: string;
  location: string;
  isVideo: boolean;
}

export default function MainGallery({ onNavigate }: MainGalleryProps) {
  // Gallery state supporting runtime uploads
  const [photos, setPhotos] = useState<PhotoItem[]>(initialPhotos);
  
  // Lightbox index state referencing the unified media array
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Admin upload modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newLocation, setNewLocation] = useState('Calabar, Nigeria');
  const [newDate, setNewDate] = useState('July 20, 2026');
  const [selectedFileUrl, setSelectedFileUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Parse dates robustly for sorting (newest first)
  const parseDate = (dateStr: string): number => {
    const d = Date.parse(dateStr);
    return isNaN(d) ? 0 : d;
  };

  // Combine photos state and initialVideos into a single deduplicated list sorted by date (newest first)
  const getUnifiedMediaList = (): UnifiedMediaItem[] => {
    const list: UnifiedMediaItem[] = [];
    const seenUrls = new Set<string>();
    const seenIds = new Set<string>();

    // 1. Process Photos (including user uploaded photographs)
    photos.forEach((p) => {
      if (!p.url || seenUrls.has(p.url) || seenIds.has(p.id)) return;
      seenUrls.add(p.url);
      seenIds.add(p.id);
      list.push({
        id: p.id,
        url: p.url,
        title: p.title || 'Untitled Activity',
        description: p.description || '',
        date: p.date || 'July 20, 2026',
        location: p.location || 'Calabar, Nigeria',
        isVideo: false,
      });
    });

    // 2. Process Videos
    initialVideos.forEach((v) => {
      if (seenIds.has(v.id)) return;
      seenIds.add(v.id);
      list.push({
        id: v.id,
        thumbnail: v.thumbnail,
        embedId: v.embedId,
        type: v.type,
        duration: v.duration,
        title: v.title || 'Untitled Documentary',
        description: v.description || '',
        date: v.date || 'July 20, 2026',
        location: 'Calabar, Nigeria',
        isVideo: true,
      });
    });

    // Sort by parsed date descending (newest first)
    return list.sort((a, b) => {
      const timeA = parseDate(a.date);
      const timeB = parseDate(b.date);
      return timeB - timeA;
    });
  };

  const unifiedMedia = getUnifiedMediaList();

  // Navigation handlers within lightbox
  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const newIdx = (lightboxIndex - 1 + unifiedMedia.length) % unifiedMedia.length;
    setLightboxIndex(newIdx);
    setIsZoomed(false);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const newIdx = (lightboxIndex + 1) % unifiedMedia.length;
    setLightboxIndex(newIdx);
    setIsZoomed(false);
  };

  // Close lightbox on background overlay click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setLightboxIndex(null);
      setIsZoomed(false);
    }
  };

  // Keyboard navigation listener for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, unifiedMedia.length]);

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedFileUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedFileUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission logic
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFileUrl) {
      alert("Please select or drop an image file first.");
      return;
    }

    const newPhotoItem: PhotoItem = {
      id: `user_photo_${Date.now()}`,
      url: selectedFileUrl,
      title: newTitle.trim() || 'Untitled Outreach Activity',
      description: newDesc.trim() || 'A positive mentoring or education assembly session under DRYCI supervision.',
      category: 'Education', // system default to satisfy types
      album: 'Media Archive', // system default to satisfy types
      date: newDate || 'July 20, 2026',
      location: newLocation.trim() || 'Calabar, Nigeria',
    };

    setPhotos([newPhotoItem, ...photos]);
    setIsUploadOpen(false);

    // Reset Form
    setNewTitle('');
    setNewDesc('');
    setNewLocation('Calabar, Nigeria');
    setNewDate('July 20, 2026');
    setSelectedFileUrl(null);

    // Show toast success
    setToastMessage('Successfully added your photo to the active gallery!');
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const activeItem = lightboxIndex !== null ? unifiedMedia[lightboxIndex] : null;

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen overflow-x-hidden selection:bg-[#0D47A1] selection:text-white flex flex-col justify-between">
      
      {/* ==================================================
          1. IMMERSIVE HERO HEADER (CINEMATIC NGO STYLE)
          ================================================== */}
      <section className="relative py-20 sm:py-28 xl:py-32 bg-slate-950 overflow-hidden flex items-center justify-center min-h-[45vh] md:min-h-[55vh] w-full shrink-0">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src={heroSection1} 
            alt="Nigeria Community & Leadership background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30 scale-102"
          />
          {/* Modern grid overlay matching Hero */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/45 via-transparent to-[#F57C00]/20" />
          {/* Shading gradient for legibility */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-4xl text-left space-y-5">
            <span className="text-[#F57C00] font-mono text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 bg-[#F57C00]/10 border border-[#F57C00]/20 rounded-full inline-block">
              OUR GALLERY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Capturing moments of transformation, leadership, education, outreach and community impact across Nigeria.
            </h1>
          </div>
          {/* Contribution functionality deactivated as requested by user to lock the curated gallery */}
        </div>

        {/* Subtle bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ==================================================
          2. UNIFIED MASSIVE GRID / MASONRY GALLERY (FULL-WIDTH)
          ================================================== */}
      <main className="py-12 bg-white flex-grow">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          {unifiedMedia.length > 0 ? (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6 [column-fill:_balance] w-full">
              {unifiedMedia.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setLightboxIndex(index);
                    setIsZoomed(false);
                  }}
                  className="inline-block w-full break-inside-avoid mb-6 group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-350 cursor-pointer flex flex-col transform hover:-translate-y-1"
                >
                  {/* Photo or Video Thumbnail Frame */}
                  <div className="relative overflow-hidden bg-slate-50 shrink-0">
                    <img 
                      src={item.isVideo ? item.thumbnail : item.url} 
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = initialPhotos[0]?.url || '';
                      }}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none"
                    />
                    
                    {/* Absolute Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Video Play Overlay */}
                    {item.isVideo ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#F57C00] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-[#0D47A1] transition-all duration-300">
                          <Play className="w-5 h-5 text-white fill-current ml-1" />
                        </div>
                        {item.duration && (
                          <div className="absolute bottom-3 right-3 bg-slate-950/80 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                            {item.duration}
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Hover Zoom Indicator for Photos */
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-11 h-11 rounded-full bg-white text-[#0D47A1] shadow-2xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="w-5 h-5 text-[#F57C00]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Narrative details inside card (No Category Badge) */}
                  {item.title || item.description || item.location || item.date ? (
                    <div className="p-5 flex-grow flex flex-col justify-between gap-3 text-left">
                      {(item.title || item.description) && (
                        <div className="space-y-1.5">
                          {item.title && (
                            <h4 className="font-serif font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#0D47A1] transition-colors">
                              {item.title}
                            </h4>
                          )}
                          {item.description && (
                            <p className="text-slate-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {(item.location || item.date) && (
                        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400 pt-3 border-t border-slate-100 shrink-0">
                          {item.location && (
                            <span className="flex items-center gap-1 font-bold text-[#F57C00]">
                              <MapPin className="w-3.5 h-3.5" />
                              {item.location}
                            </span>
                          )}
                          {item.date && <span>{item.date}</span>}
                        </div>
                      )}
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-150">
              <p className="text-slate-400 text-sm font-light">No photographs or videos are currently available in the repository.</p>
            </div>
          )}
        </div>
      </main>

      {/* ==================================================
          3. COMPACT NGO CALL TO ACTION SECTION
          ================================================== */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 text-slate-900 text-center space-y-6">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 max-w-4xl mx-auto space-y-6">
          <span className="text-[#0D47A1] font-mono text-[11px] uppercase tracking-[0.2em] font-black block">
            MAKE A REAL DIFFERENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-slate-900">
            Support Our Educational Missions & Outreaches
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Your material sponsorship, textbooks, and active volunteering directly enable us to expand these visual moments of real-world impact.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate('volunteer');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const el = document.getElementById('volunteer');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="h-12 px-8 bg-[#0D47A1] hover:bg-[#0A3780] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10"
            >
              <span>Become a Volunteer Mentor</span>
            </button>
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="h-12 px-8 border border-slate-200 hover:bg-slate-100 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact DRYCI Offices</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. IMMERSIVE LIGHTBOX MODAL WITH FULL CONTROLS
          ================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && activeItem && (
          <div 
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-6 select-none cursor-default"
          >
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between text-white relative z-10 py-2 border-b border-white/5 w-full">
              <div className="text-left max-w-lg">
                <span className="text-[#F57C00] font-mono text-[9px] font-extrabold uppercase tracking-widest block">
                  {activeItem.isVideo ? 'VIDEO DOCUMENTARY' : 'GALLERY OUTREACH'}
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-base text-slate-100 truncate">
                  {activeItem.title}
                </h4>
              </div>

              {/* Action Toggles */}
              <div className="flex items-center gap-3">
                {!activeItem.isVideo && (
                  <button
                    type="button"
                    onClick={() => setIsZoomed(!isZoomed)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isZoomed 
                        ? 'bg-[#F57C00] border-[#F57C00] text-white' 
                        : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                    title="Toggle Zoom"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(null);
                    setIsZoomed(false);
                  }}
                  className="p-2.5 bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer"
                  title="Close Gallery"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle Main Slider Stage */}
            <div className="relative flex-grow flex items-center justify-center min-h-0 py-4 px-12">
              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-4 z-10 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Previous Item"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Media element with optional Zoom */}
              <div className="max-w-4xl max-h-[55vh] sm:max-h-[60vh] w-full h-full flex items-center justify-center relative overflow-hidden">
                {activeItem.isVideo ? (
                  <div className="relative aspect-video w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeItem.embedId}?autoplay=1`}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-none"
                    />
                  </div>
                ) : (
                  <motion.div 
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: isZoomed ? 1.2 : 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="relative max-w-full max-h-full flex items-center justify-center"
                  >
                    <img
                      src={activeItem.url}
                      alt={activeItem.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = initialPhotos[0]?.url || '';
                      }}
                      className="max-w-full max-h-[55vh] sm:max-h-[60vh] rounded-2xl object-contain shadow-2xl border border-white/5 pointer-events-none select-none"
                    />
                  </motion.div>
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-4 z-10 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all cursor-pointer backdrop-blur-sm"
                aria-label="Next Item"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Backstory details panel (No Category Badge) */}
            {activeItem.title || activeItem.description || activeItem.location || activeItem.date ? (
              <div className="w-full max-w-3xl mx-auto bg-slate-900/80 border border-white/10 p-5 sm:p-6 rounded-2xl text-left text-slate-300 space-y-3 backdrop-blur-md relative z-10 shadow-2xl">
                {activeItem.title && (
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    {activeItem.title}
                  </h3>
                )}
                {activeItem.description && (
                  <p className="text-xs sm:text-sm font-sans font-light leading-relaxed text-slate-200">
                    {activeItem.description}
                  </p>
                )}
                
                {(activeItem.location || activeItem.date) && (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-mono text-slate-400 pt-3 border-t border-white/5">
                    {activeItem.location && (
                      <span className="flex items-center gap-1 font-bold text-[#F57C00]">
                        <MapPin className="w-3.5 h-3.5" />
                        {activeItem.location}
                      </span>
                    )}
                    {activeItem.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {activeItem.date}
                      </span>
                    )}
                    {activeItem.isVideo && activeItem.duration && (
                      <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white text-[9px] font-bold">
                        Duration: {activeItem.duration}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : null}

          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          5. NGO PORTAL PHOTO UPLOAD FORM MODAL (Hidden album inputs to respect no categorization layout)
          ================================================== */}
      <AnimatePresence>
        {isUploadOpen && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative text-left flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-5 bg-slate-50 border-b border-slate-200/60 flex justify-between items-center sticky top-0 z-10">
                <div className="space-y-0.5">
                  <span className="text-[#0D47A1] font-mono text-[10px] tracking-widest font-black uppercase">
                    DRYCI Media Portal
                  </span>
                  <h4 className="font-serif font-black text-lg text-slate-900">Contribute Photo to Gallery</h4>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    setIsUploadOpen(false);
                    setSelectedFileUrl(null);
                  }} 
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all cursor-pointer border border-slate-200/40"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleUploadSubmit} className="p-6 overflow-y-auto space-y-5 flex-grow">
                {/* Drag and Drop Upload Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Upload Image <span className="text-red-500">*</span>
                  </label>
                  
                  {selectedFileUrl ? (
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video flex items-center justify-center group shadow-inner">
                      <img 
                        src={selectedFileUrl} 
                        alt="Preview" 
                        className="max-h-full max-w-full object-contain"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedFileUrl(null)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold transition-all shadow"
                        >
                          Remove Photo
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('gallery-file-input')?.click()}
                      className={`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer ${
                        isDragging 
                          ? 'border-[#0D47A1] bg-blue-50/50 scale-[1.01]' 
                          : 'border-slate-300 hover:border-[#0D47A1] hover:bg-slate-50/50'
                      }`}
                    >
                      <input 
                        type="file" 
                        id="gallery-file-input" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        className="hidden" 
                      />
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center border border-slate-200/50">
                        <Upload className="w-5 h-5 text-[#0D47A1]" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-800">
                          Drag & drop your photograph here, or <span className="text-[#0D47A1] underline">click to browse</span>
                        </p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          SUPPORTS JPG, JPEG, PNG, OR WEBP (MAX 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="space-y-1.5">
                  <label htmlFor="upload-title" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Photo Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="upload-title"
                    type="text"
                    required
                    placeholder="e.g. Calabar Reading Circle Empowerment"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0D47A1] focus:ring-1 focus:ring-[#0D47A1] text-sm outline-none transition-all shadow-sm"
                  />
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label htmlFor="upload-desc" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Brief Narrative / Description
                  </label>
                  <textarea
                    id="upload-desc"
                    rows={3}
                    placeholder="Provide a short story or details of what happened in this photo..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0D47A1] focus:ring-1 focus:ring-[#0D47A1] text-sm outline-none transition-all resize-none shadow-sm"
                  />
                </div>

                {/* Location & Date Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="upload-location" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Location
                    </label>
                    <input
                      id="upload-location"
                      type="text"
                      placeholder="e.g. Calabar, Nigeria"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0D47A1] focus:ring-1 focus:ring-[#0D47A1] text-sm outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="upload-date" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Date of Event
                    </label>
                    <input
                      id="upload-date"
                      type="text"
                      placeholder="e.g. July 20, 2026"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0D47A1] focus:ring-1 focus:ring-[#0D47A1] text-sm outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="pt-4 border-t border-slate-100 flex gap-3 sticky bottom-0 bg-white">
                  <button
                    type="button"
                    onClick={() => {
                      setIsUploadOpen(false);
                      setSelectedFileUrl(null);
                    }}
                    className="flex-1 py-3 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 active:scale-98 transition-all cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#F57C00] hover:bg-[#E65100] active:scale-98 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-orange-500/10 transition-all cursor-pointer text-center"
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          6. FLOATING TOAST SUCCESS NOTIFICATION
          ================================================== */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-emerald-500/30 text-white px-5 py-4 rounded-2xl flex items-center gap-3.5 shadow-2xl pointer-events-auto max-w-sm"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow shrink-0">
                <Check className="w-4 h-4 text-white font-black" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">SUCCESSFUL</p>
                <p className="text-slate-100 text-xs sm:text-sm font-sans font-medium">{toastMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
