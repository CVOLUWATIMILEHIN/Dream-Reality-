export interface ColorToken {
  name: string;
  role: string;
  hex: string;
  bgClass: string;
  textClass: string;
  contrastWhite: string; // WCAG contrast score on white background
  contrastDark: string;  // WCAG contrast score on dark text
  description: string;
}

export interface FontToken {
  name: string;
  size: string;
  lineHeight: string;
  weight: string;
  role: string;
  sampleText: string;
}

export interface ButtonToken {
  name: string;
  type: 'primary' | 'secondary' | 'ghost';
  description: string;
  markup: string;
}

export interface CardToken {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  impactMetric?: string;
  author?: string;
}

export interface AnimationToken {
  name: string;
  effect: string;
  timing: string;
  description: string;
}

export interface ImagePhilosophy {
  title: string;
  description: string;
  icon: string;
  exampleText: string;
}
