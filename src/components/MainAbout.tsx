import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutCreed from './AboutCreed';
import AboutFocus from './AboutFocus';
import AboutImpactAndOutlook from './AboutImpactAndOutlook';
import AboutGovernance from './AboutGovernance';
import AboutCTA from './AboutCTA';

export default function MainAbout() {
  const scrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGovernance = () => {
    const el = document.getElementById('our-governance');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="about" className="bg-slate-50 min-h-screen">
      {/* 1. Hero Banner */}
      <AboutHero 
        onScrollToStory={scrollToStory} 
        onScrollToGovernance={scrollToGovernance} 
      />

      {/* 2. Our Story (Narrative + Slideshow + Timeline + Founder profile) */}
      <AboutStory />

      {/* 3. Vision, Mission & Core Values */}
      <AboutCreed />

      {/* 4. Strategic Focus Areas */}
      <AboutFocus />

      {/* 4.5. Verified Impact & Outlook Sections */}
      <AboutImpactAndOutlook />

      {/* 5. Our Governance (Board of Trustees with alternating cards) */}
      <AboutGovernance />

      {/* 6. Call to Action */}
      <AboutCTA />
    </div>
  );
}
