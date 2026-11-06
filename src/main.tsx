import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { brandLogo } from './data/mediaAssets';
import './index.css';

// Ensure browser tab favicon and Apple touch icon always display the DRYCI brand logo
const applyBrandFavicon = () => {
  const iconEl = document.getElementById('dynamic-favicon') as HTMLLinkElement | null;
  if (iconEl) {
    iconEl.href = brandLogo;
  }

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0, 180, 180);
      const pngDataUrl = canvas.toDataURL('image/png');
      const appleEl = document.getElementById('dynamic-apple-icon') as HTMLLinkElement | null;
      if (appleEl) appleEl.href = pngDataUrl;
    }
  };
  img.src = brandLogo;
};

applyBrandFavicon();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
