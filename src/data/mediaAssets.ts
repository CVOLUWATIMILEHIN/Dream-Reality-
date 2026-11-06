// Centralized, UTF-8 safe media asset registry for DRYCI
// Prevents binary JPEG corruption across container snapshots and eliminates infinite onError loops.

const svgToDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

export const brandLogo = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="skyGrad" x1="15%" y1="10%" x2="85%" y2="90%">
      <stop offset="0%" stop-color="#0684F2" />
      <stop offset="55%" stop-color="#0074E0" />
      <stop offset="100%" stop-color="#005BB5" />
    </linearGradient>
    <linearGradient id="moonGold" x1="25%" y1="5%" x2="80%" y2="95%">
      <stop offset="0%" stop-color="#FCE3A4" />
      <stop offset="32%" stop-color="#F3A744" />
      <stop offset="72%" stop-color="#DF8727" />
      <stop offset="100%" stop-color="#BE6A15" />
    </linearGradient>
    <linearGradient id="wingGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF0C2" />
      <stop offset="45%" stop-color="#F2A441" />
      <stop offset="100%" stop-color="#C86E17" />
    </linearGradient>
    <clipPath id="emblemClip">
      <circle cx="250" cy="198" r="156" />
    </clipPath>
  </defs>

  <!-- Pure Black Background -->
  <rect width="500" height="500" rx="36" fill="#000000" />

  <!-- Circular Emblem Group -->
  <g clip-path="url(#emblemClip)">
    <!-- Vibrant Blue Starry Night Sky -->
    <circle cx="242" cy="194" r="146" fill="url(#skyGrad)" />

    <!-- Large 6-Pointed Star at Top -->
    <polygon
      points="248,66 254,80 269,78 259,90 267,103 252,99 245,112 241,97 226,99 236,88 229,75 243,79"
      fill="#FFFFFF"
    />

    <!-- 4-Pointed Sparkle Stars in Sky -->
    <path d="M198,113 L202,124 L213,128 L202,132 L198,143 L194,132 L183,128 L194,124 Z" fill="#FFFFFF" />
    <path d="M288,112 L291,120 L299,123 L291,126 L288,134 L285,126 L277,123 L285,120 Z" fill="#FFFFFF" />
    <path d="M157,114 L159.5,120.5 L166,123 L159.5,125.5 L157,132 L154.5,125.5 L148,123 L154.5,120.5 Z" fill="#FFFFFF" />
    <path d="M132,155 L135,163 L143,166 L135,169 L132,177 L129,169 L121,166 L129,163 Z" fill="#FFFFFF" />
    <path d="M277,152 L279.5,158.5 L286,161 L279.5,163.5 L277,170 L274.5,163.5 L268,161 L274.5,158.5 Z" fill="#FFFFFF" />

    <!-- Star Dots in Blue Sky -->
    <circle cx="212" cy="83" r="3" fill="#FFFFFF" />
    <circle cx="190" cy="96" r="4.2" fill="#FFFFFF" />
    <circle cx="170" cy="106" r="2.6" fill="#FFFFFF" />
    <circle cx="144" cy="142" r="2.8" fill="#FFFFFF" />
    <circle cx="174" cy="151" r="2.8" fill="#FFFFFF" />
    <circle cx="234" cy="134" r="4.2" fill="#FFFFFF" />
    <circle cx="258" cy="139" r="3" fill="#FFFFFF" />
    <circle cx="330" cy="193" r="2.6" fill="#FFFFFF" />
    <circle cx="322" cy="226" r="4.8" fill="#FFFFFF" />
    <circle cx="300" cy="252" r="3.4" fill="#FFFFFF" />
    <circle cx="325" cy="256" r="2.2" fill="#FFFFFF" />
    <circle cx="142" cy="196" r="2.4" fill="#FFFFFF" />
    <circle cx="159" cy="238" r="2.8" fill="#FFFFFF" />
    <circle cx="166" cy="272" r="2.6" fill="#FFFFFF" />

    <!-- Child / Angelic Youth Figure Reaching Upward -->
    <!-- Golden Wing (Left Side) -->
    <g stroke="#000000" stroke-width="6" stroke-linejoin="round">
      <!-- Wing Black Silhouette Base -->
      <path
        d="M92,196 C118,214 156,220 196,216 C206,238 196,268 184,274 C150,274 118,254 96,222 Z"
        fill="#000000"
      />
      <!-- Top Feather Highlight -->
      <path
        d="M94,196 C122,216 160,218 202,224 C192,234 152,232 104,212 Z"
        fill="#FFF3C8"
      />
      <!-- Second Feather -->
      <path
        d="M102,214 C132,232 164,234 194,234 C184,247 148,246 112,228 Z"
        fill="url(#wingGold)"
      />
      <!-- Third Feather -->
      <path
        d="M116,232 C142,246 168,248 190,246 C182,258 154,258 126,244 Z"
        fill="#E58F2E"
      />
      <!-- Bottom Feather -->
      <path
        d="M134,248 C154,258 174,260 188,258 C180,268 160,268 142,258 Z"
        fill="#C97016"
      />
    </g>

    <!-- Raised Right Arm & Open Hand -->
    <g>
      <!-- Black Outer Outline of Hand & Arm -->
      <path
        d="M272,190 L294,156 C288,150 286,144 291,141 C295,139 300,143 304,146 L312,123 C315,117 326,120 326,129 L330,136 C332,144 326,156 320,166 L308,204 Z"
        fill="#000000"
      />
      <!-- Golden Forearm/Wrist Shading -->
      <path
        d="M298,166 L306,152 L319,158 L311,182 C305,180 300,174 298,166 Z"
        fill="#DF8525"
      />
      <!-- Lit Cream Hand & Fingers Reaching to Star -->
      <path
        d="M294,145 C297,144 302,148 305,150 L314,126 C316,124 318,125 317,129 L311,147 L320,128 C322,126 324,128 322,132 L315,149 L323,134 C325,133 326,135 324,139 L317,153 L324,142 C326,142 326,145 323,150 L317,160 C312,162 305,159 302,154 Z"
        fill="#FFF8E2"
      />
    </g>

    <!-- Flowing Black Star-Spangled Robe / Cloak -->
    <path
      d="M180,318 L198,224 C216,218 244,224 264,238 L296,170 L322,178 C320,214 304,254 286,282 L288,332 Z"
      fill="#000000"
    />
    <!-- Golden Robe Trim Highlights -->
    <path d="M206,232 C220,238 232,246 242,256" fill="none" stroke="#E59334" stroke-width="5" stroke-linecap="round" />
    <path d="M272,226 C276,258 280,290 282,318" fill="none" stroke="#E59334" stroke-width="5.5" stroke-linecap="round" />
    <path d="M210,286 L204,316" fill="none" stroke="#D98224" stroke-width="4.5" stroke-linecap="round" />

    <!-- Stars Inside the Black Robe -->
    <path d="M222,256 L224.5,263.5 L232,266 L224.5,268.5 L222,276 L219.5,268.5 L212,266 L219.5,263.5 Z" fill="#FFFFFF" />
    <path d="M256,256 L258.5,263.5 L266,266 L258.5,268.5 L256,276 L253.5,268.5 L246,266 L253.5,263.5 Z" fill="#FFFFFF" />
    <path d="M306,199 L308,205 L314,207 L308,209 L306,215 L304,209 L298,207 L304,205 Z" fill="#FFFFFF" />
    <circle cx="238" cy="276" r="3" fill="#E59334" />
    <circle cx="294" cy="222" r="2" fill="#FFFFFF" />

    <!-- Child's Head & Hair Tilted Upward in Profile -->
    <g>
      <!-- Black Hair Silhouette Base -->
      <path
        d="M184,196 C180,174 196,154 218,154 C226,144 244,146 248,158 C256,162 260,170 256,178 C264,182 268,190 264,198 C266,206 260,216 254,224 L224,226 C204,222 188,210 184,196 Z"
        fill="#000000"
      />
      <!-- Warm Amber Neck & Cheek Shading -->
      <path
        d="M214,204 C224,200 234,204 242,214 L256,244 L228,228 C222,222 216,214 214,204 Z"
        fill="#E59135"
      />
      <!-- Sunlit Profile Face Looking Up at Star -->
      <path
        d="M234,166 C240,168 244,174 246,178 L255,180 C257,181 256,185 253,187 C256,190 258,194 256,198 C254,203 246,205 240,204 C236,212 242,224 252,238 C240,232 232,220 228,208 C222,208 216,204 216,198 C216,193 222,191 226,194 C226,184 228,172 234,166 Z"
        fill="#FFFDF7"
      />
      <!-- Closed Joyful Eye & Eyebrow -->
      <path d="M238,178 Q242,176 244,180" fill="none" stroke="#000000" stroke-width="2.8" stroke-linecap="round" />
      <!-- Ear Detail -->
      <path d="M214,198 C210,196 210,204 216,205" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" />
      <!-- Golden Hair Highlights -->
      <path d="M212,162 C220,152 234,152 242,160 C232,162 222,166 212,162 Z" fill="#FFF2C6" />
      <path d="M194,186 C196,172 206,164 216,166 C210,174 204,184 194,186 Z" fill="#EFA240" />
      <path d="M204,198 C206,186 214,178 222,178 C218,188 212,196 204,198 Z" fill="#E59135" />
    </g>

    <!-- Golden Crescent Moon Embracing the Right & Bottom Rim -->
    <!-- Outer Dark Border of Crescent Inner Curve -->
    <path
      d="M218,50 C316,58 378,142 360,234 C342,316 254,358 168,326 C138,314 114,292 100,266 C132,328 208,362 282,342 C362,320 408,236 388,154 C370,84 300,44 218,50 Z"
      fill="url(#moonGold)"
      stroke="#000000"
      stroke-width="6"
      stroke-linejoin="round"
    />
    <!-- Bright Cream-White Inner Rim Highlight on Crescent -->
    <path
      d="M226,53 C316,64 374,142 364,228 C358,152 308,82 226,53 Z"
      fill="#FFF9E2"
    />
    <!-- Deeper Amber Outer Rim Shading on Bottom of Crescent -->
    <path
      d="M388,184 C394,264 340,334 260,348 C192,360 128,324 102,268 C138,318 206,342 270,326 C338,310 382,250 388,184 Z"
      fill="#C16B16"
      opacity="0.85"
    />
  </g>

  <!-- Bold White Rounded "DRYCI" Wordmark -->
  <text
    x="250"
    y="446"
    text-anchor="middle"
    font-family="'Poppins', 'Montserrat', 'Nunito', 'Arial Rounded MT Bold', system-ui, sans-serif"
    font-weight="900"
    font-size="80"
    fill="#FFFFFF"
    letter-spacing="10"
  >DRYCI</text>
</svg>
`);

export const epiphanyFlyer = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="flyerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041434" />
      <stop offset="45%" stop-color="#0D47A1" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F57C00" />
      <stop offset="100%" stop-color="#FFB74D" />
    </linearGradient>
    <radialGradient id="glow1" cx="80%" cy="20%" r="45%">
      <stop offset="0%" stop-color="#F57C00" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#F57C00" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#flyerBg)" />
  <rect width="800" height="1000" fill="url(#glow1)" />
  <rect x="36" y="36" width="728" height="928" rx="28" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2" />
  
  <!-- Header Pill -->
  <rect x="80" y="80" width="640" height="48" rx="24" fill="#ffffff" fill-opacity="0.1" />
  <text x="400" y="111" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="16" fill="#FFB74D" letter-spacing="3">DREAMS TO REALITY YOUTH &amp; CHILDREN INITIATIVE</text>

  <!-- Main Title -->
  <text x="400" y="230" text-anchor="middle" font-family="Georgia, serif" font-weight="900" font-size="18" fill="#ffffff" letter-spacing="6">ANNUAL FLAGSHIP GIRLS' LEADERSHIP SUMMIT</text>
  <text x="400" y="340" text-anchor="middle" font-family="Georgia, serif" font-weight="900" font-size="108" fill="#ffffff" letter-spacing="4">EPIPHANY</text>
  <rect x="250" y="368" width="300" height="6" rx="3" fill="url(#accentGrad)" />
  <text x="400" y="425" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="26" fill="#FFB74D">"Awakening Purpose. Igniting Leadership. Transforming Lives."</text>

  <!-- Key Highlights Box -->
  <rect x="80" y="475" width="640" height="230" rx="24" fill="#020617" fill-opacity="0.65" stroke="#F57C00" stroke-opacity="0.4" stroke-width="2" />
  <text x="400" y="525" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="22" fill="#ffffff" letter-spacing="2">FOR SENIOR SECONDARY SCHOOL GIRLS (SS1 – SS3)</text>
  <text x="400" y="570" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="19" fill="#CBD5E1">• Purpose Discovery &amp; Leadership Excellence</text>
  <text x="400" y="608" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="19" fill="#CBD5E1">• Academic Mastery, Mentorship &amp; Career Guidance</text>
  <text x="400" y="646" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="19" fill="#CBD5E1">• Character, Personal Safety &amp; Enterprise Skills</text>
  <text x="400" y="684" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="18" fill="#4ADE80">★ 100% FREE REGISTRATION &amp; FULLY SPONSORED ★</text>

  <!-- Date & Venue Footer -->
  <rect x="80" y="745" width="640" height="165" rx="24" fill="#F57C00" />
  <text x="400" y="795" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="32" fill="#ffffff" letter-spacing="1">26TH – 28TH AUGUST, 2026</text>
  <text x="400" y="835" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="20" fill="#041434">TIME: 8:00 AM – 3:00 PM DAILY</text>
  <text x="400" y="875" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="800" font-size="20" fill="#ffffff">VENUE: EDGERLY MEMORIAL GIRLS' SEC. SCHOOL, CALABAR</text>
</svg>
`);

export {
  imageMoses,
  imageTaiwo,
  imageEmeka,
  imageVal,
  imageModestus,
} from './governancePortraits';

import {
  fieldPhoto1,
  fieldPhoto2,
  fieldPhoto3,
  fieldPhoto4,
  fieldPhoto5,
  fieldPhoto6,
  fieldPhoto7,
  fieldPhoto8,
  fieldPhoto9,
  fieldPhoto10,
  fieldPhoto11,
  fieldPhoto12,
  fieldPhoto13,
} from './dryciFieldPhotos';

// Authentic DRYCI Hero Slides & Field Photography (zero stock images)
export const heroSlide1 = fieldPhoto1;
export const heroSlide2 = fieldPhoto2;
export const heroSlide3 = fieldPhoto3;
export const heroSlide4 = fieldPhoto4;
export const heroSlide5 = fieldPhoto13;

export const calabar1 = fieldPhoto1;
export const calabar2 = fieldPhoto2;
export const calabar3 = fieldPhoto3;
export const calabar4 = fieldPhoto4;
export const calabar5 = fieldPhoto5;
export const calabar6 = fieldPhoto6;
export const calabar7 = fieldPhoto7;
export const calabar8 = fieldPhoto8;
export const calabar9 = fieldPhoto9;
export const calabar10 = fieldPhoto10;
export const calabar11 = fieldPhoto11;
export const calabar12 = fieldPhoto12;
export const calabar13 = fieldPhoto13;

export const GALLERY_CALABAR_MAP: Record<string, string> = {
  'gallery_calabar_gallery_49.jpg': fieldPhoto1,
  'gallery_calabar_gallery_50.jpg': fieldPhoto2,
  'gallery_calabar_20260205_115959.jpg': fieldPhoto3,
  'gallery_calabar_20260205_111722.jpg': fieldPhoto4,
  'gallery_calabar_20260205_111724.jpg': fieldPhoto5,
  'gallery_calabar_20260205_111752.jpg': fieldPhoto6,
  'gallery_calabar_20260205_112327.jpg': fieldPhoto7,
  'gallery_calabar_20260205_112724.jpg': fieldPhoto8,
  'gallery_calabar_20260205_112726.jpg': fieldPhoto9,
  'gallery_calabar_20260205_112954.jpg': fieldPhoto10,
  'gallery_calabar_20260205_113039.jpg': fieldPhoto11,
  'gallery_calabar_20260205_113040_1.jpg': fieldPhoto12,
  'gallery_calabar_20260205_113058.jpg': fieldPhoto13,
  'gallery_calabar_20260205_113703.jpg': fieldPhoto1,
  'gallery_calabar_20260205_113722.jpg': fieldPhoto2,
  'gallery_calabar_20260205_113727.jpg': fieldPhoto5,
  'gallery_calabar_20260205_114118.jpg': fieldPhoto7,
  'gallery_calabar_20260205_114311.jpg': fieldPhoto8,
  'gallery_calabar_20260205_114526.jpg': fieldPhoto9,
  'gallery_calabar_20260205_114701.jpg': fieldPhoto13,
};
