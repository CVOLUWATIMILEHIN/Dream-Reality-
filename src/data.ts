import { ColorToken, FontToken, ButtonToken, CardToken, AnimationToken, ImagePhilosophy } from './types';
import gallery30 from './components/gallery_calabar_20260205_111722.jpg';
import gallery29 from './components/gallery_calabar_20260205_115959.jpg';
import gallery32 from './components/gallery_calabar_20260205_113039.jpg';

export const BRAND_COLORS: ColorToken[] = [
  {
    name: 'Primary Blue',
    role: 'Primary brand identity, trust, authority, global reach',
    hex: '#0D47A1',
    bgClass: 'bg-[#0D47A1]',
    textClass: 'text-[#0D47A1]',
    contrastWhite: '7.8:1 (AAA Pass)',
    contrastDark: '2.7:1 (Fail on Black)',
    description: 'Deep Royal Blue. Used for major structural elements, headings, primary buttons, and hero themes to signify stability and integrity.',
  },
  {
    name: 'Secondary Orange',
    role: 'Urgency, energy, action, youth, optimism',
    hex: '#F57C00',
    bgClass: 'bg-[#F57C00]',
    textClass: 'text-[#F57C00]',
    contrastWhite: '3.4:1 (AA Large Text Only)',
    contrastDark: '6.1:1 (AA Pass)',
    description: 'Vibrant Orange. Used selectively for call-to-action badges, highlights, secondary focus points, and interactive state modifiers.',
  },
  {
    name: 'Accent Green',
    role: 'Growth, sustainability, transformation, hope',
    hex: '#2E7D32',
    bgClass: 'bg-[#2E7D32]',
    textClass: 'text-[#2E7D32]',
    contrastWhite: '5.1:1 (AA Pass)',
    contrastDark: '4.1:1 (Fail on Black)',
    description: 'Emerald Green. Used for impact metrics, successful outcomes, progress indicators, and community empowerment showcases.',
  },
  {
    name: 'Neutral Background',
    role: 'Base canvas background',
    hex: '#F8FAFC',
    bgClass: 'bg-[#F8FAFC]',
    textClass: 'text-[#F8FAFC]',
    contrastWhite: '1.0:1 (Identical)',
    contrastDark: '21:1 (AAA Pass)',
    description: 'Ultra-soft slate grey. Provides an open, breathable workspace backdrop that reduces visual fatigue and enhances readability.',
  },
  {
    name: 'Pure White',
    role: 'Content containers, structural sections',
    hex: '#FFFFFF',
    bgClass: 'bg-white',
    textClass: 'text-white',
    contrastWhite: '1.0:1 (Identical)',
    contrastDark: '21:1 (AAA Pass)',
    description: 'High-contrast base. Used for cards, navbar base (scrolled state), text content overlays, and negative space cushions.',
  },
  {
    name: 'Text Primary',
    role: 'Core readability, main body and header copy',
    hex: '#1E293B',
    bgClass: 'bg-[#1E293B]',
    textClass: 'text-[#1E293B]',
    contrastWhite: '16.2:1 (AAA Pass)',
    contrastDark: '1.3:1 (Fail)',
    description: 'Deep Slate. Serves as our absolute primary typographical shade. Offers optimal legibility without the harshness of pure black.',
  },
  {
    name: 'Text Secondary',
    role: 'Subtitles, secondary labels, metadata',
    hex: '#64748B',
    bgClass: 'bg-[#64748B]',
    textClass: 'text-[#64748B]',
    contrastWhite: '6.0:1 (AA Pass)',
    contrastDark: '3.5:1 (AA Large)',
    description: 'Muted Slate. Standardized for supplementary descriptions, timestamps, borders details, and decorative elements.',
  },
  {
    name: 'Borders & Rules',
    role: 'Layout boundaries, separators, decorative lines',
    hex: '#E2E8F0',
    bgClass: 'bg-[#E2E8F0]',
    textClass: 'text-[#E2E8F0]',
    contrastWhite: '1.3:1 (Fail as text)',
    contrastDark: '16.5:1 (AAA Pass)',
    description: 'Light Slate Grey. Applied strictly to separate layout nodes and cards without obstructing the flowing visual hierarchy.',
  }
];

export const TYPOGRAPHY_SCALE: FontToken[] = [
  {
    name: 'Hero Title',
    size: '64px - 72px',
    lineHeight: '1.1 (Tight)',
    weight: '800 (Extra Bold)',
    role: 'Main high-impact messaging, primary Hero titles',
    sampleText: 'Empower African Children, Shape Global Futures'
  },
  {
    name: 'Section Title',
    size: '48px',
    lineHeight: '1.2 (Slightly Tight)',
    weight: '700 (Bold)',
    role: 'Primary section dividers, editorial headers',
    sampleText: 'Nurturing Potential, Unleashing Dreams'
  },
  {
    name: 'Card Title',
    size: '24px',
    lineHeight: '1.3 (Balanced)',
    weight: '600 (Semi Bold)',
    role: 'Program modules, grid cards, panel titles',
    sampleText: 'EPIPHANY: Leadership Development'
  },
  {
    name: 'Body Regular',
    size: '18px',
    lineHeight: '1.6 (Relaxed)',
    weight: '400 (Regular)',
    role: 'Core narrative, stories of change, paragraph copy',
    sampleText: 'At DRYCI, we believe every child contains a spark of extraordinary genius. Through structured leadership training, qualitative education, and mentorship, we turn dreams into active realities.'
  },
  {
    name: 'Button Label / UI',
    size: '16px',
    lineHeight: '1.0 (Centered)',
    weight: '600 (Semi Bold)',
    role: 'Actions, navigation links, forms, and interactive labels',
    sampleText: 'Become a Partner Today'
  }
];

export const BUTTON_STATES: ButtonToken[] = [
  {
    name: 'Primary Action Button',
    type: 'primary',
    description: 'High-visibility call-to-action (CTA). Reserved for Donate, Join, and primary submission commands.',
    markup: '<button className="px-8 py-4 bg-[#0D47A1] text-white font-semibold rounded-full shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">Donate Now</button>'
  },
  {
    name: 'Secondary Support Button',
    type: 'secondary',
    description: 'Secondary operations. Used for Program Details, Learn More, and Read Our Stories.',
    markup: '<button className="px-8 py-4 border-2 border-[#0D47A1] text-[#0D47A1] font-semibold rounded-full hover:bg-[#0D47A1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">Our Programs</button>'
  },
  {
    name: 'Ghost Interactive Link',
    type: 'ghost',
    description: 'Subtle inline exploration. Used in navigation links, footer maps, and secondary micro-interactions.',
    markup: '<button className="relative py-2 text-slate-700 hover:text-[#0D47A1] transition-colors duration-300 group">Read Full Article<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D47A1] transition-all duration-300 group-hover:w-full" /></button>'
  }
];

export const DEMO_CARDS: CardToken[] = [
  {
    title: 'Classroom Leadership Development',
    category: 'Education Support',
    imageUrl: gallery30,
    description: 'Providing primary educational infrastructure, digital tools, and leadership mentoring for children in underserved communities across Nigeria.',
    impactMetric: '14,200+ Children Enrolled',
    author: 'Mentorship Board'
  },
  {
    title: 'The EPIPHANY Leadership Camp',
    category: 'Youth Leadership & Initiative',
    imageUrl: gallery29,
    description: 'An intensive bootcamp equipping teenage leaders with social entrepreneurship skills, community values, public speaking, and ethics.',
    impactMetric: '520 Projects Launched',
    author: 'DRYCI Fellows'
  },
  {
    title: 'Sowing the Seeds of Transformation',
    category: 'Community & Volunteerism',
    imageUrl: gallery32,
    description: 'Global volunteers collaborating hand-in-hand with local chiefs and parents to foster inclusive, long-term learning ecosystems.',
    impactMetric: '850 Active Volunteers',
    author: 'DRYCI Field Office'
  }
];

export const ANIMATIONS_METADATA: AnimationToken[] = [
  {
    name: 'Fade Up',
    effect: 'y: 40 -> 0, opacity: 0 -> 1',
    timing: '600ms, easeOutCubic',
    description: 'Primary entrance for structural headers, cards, and primary containers on viewport enter.'
  },
  {
    name: 'Fade Left / Right',
    effect: 'x: ±50 -> 0, opacity: 0 -> 1',
    timing: '700ms, easeOutCubic',
    description: 'Used for alternating asymmetrical sections (e.g., text block left, authentic imagery right).'
  },
  {
    name: 'Image Zoom Hover',
    effect: 'scale: 1.0 -> 1.05',
    timing: '500ms, easeInOutCubic',
    description: 'Applied strictly to cards on hover, suggesting depth and inviting interactive engagement.'
  },
  {
    name: 'Button Hover Lift',
    effect: 'y: 0 -> -3px, shadow-elevation',
    timing: '300ms, cubic-bezier(0.16, 1, 0.3, 1)',
    description: 'Tactile physical response for high-priority CTA buttons, creating a spring-loaded clickable feel.'
  }
];

export const IMAGE_PHILOSOPHIES: ImagePhilosophy[] = [
  {
    title: '1. Authentic Moments Only',
    description: 'Strictly avoid sterile, polished, studio-lighted stock photos. Every image should depict real moments of study, interaction, and development.',
    icon: 'Heart',
    exampleText: 'Real children laughing, raising hands in outdoor classrooms, studying under solar lanterns.'
  },
  {
    title: '2. Natural Environmental Lighting',
    description: 'Ensure natural golden daylight, warm interior glows, or shaded community setups. Avoid over-processed overlays or cold synthetic lighting.',
    icon: 'Sun',
    exampleText: 'Dappled sunlight through acacia foliage, golden hour photography capturing soft expressions.'
  },
  {
    title: '3. Dignity & Respect First',
    description: 'Never represent subjects in despair or vulnerability. Photos must showcase strength, focus, teamwork, curiosity, and high emotional agency.',
    icon: 'Shield',
    exampleText: 'A teenager presenting their enterprise project with pride; a girl smiling directly into the camera lens with confidence.'
  },
  {
    title: '4. Active Leadership in Action',
    description: 'Prioritize images of collaborative learning, hands-on digital coding, collective building, and mentorship circles.',
    icon: 'Users',
    exampleText: 'A young volunteer helping group students around a shared tablet computer, pointing out a coding map.'
  }
];
