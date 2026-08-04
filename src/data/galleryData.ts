// Auto-generated and curated Calabar & DRYCI images (de-duplicated by content size)
const globbedImages = import.meta.glob('../components/gallery_calabar_*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  album: string;
  date: string;
  location: string;
}

export interface VideoItem {
  id: string;
  type: 'youtube' | 'vimeo';
  embedId: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  date: string;
}

export interface AlbumItem {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  count: number;
}

// Maps authentic uploaded photographs to their respective real-world metadata.
const REAL_METADATA_MAP: Record<string, { title: string; description: string; date: string; location: string }> = {
  "gallery_calabar_gallery_49": {
    title: "Calabar Spelling Bee & Homework Support Club",
    description: "A structured spelling bee contest and literacy development support session led by volunteer educators and mentors in Calabar, helping local children excel academically.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  },
  "gallery_calabar_gallery_50": {
    title: "Volunteer Mentor Orientation & Guidelines Briefing",
    description: "DRYCI program administrators briefing volunteer tutors and mentors on structured student-centered leadership club curriculum and instructional approaches.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  },
  "gallery_calabar_20260205_115959": {
    title: "Calabar School Outreach Launch",
    description: "A vibrant assembly of primary scholars and DRYCI volunteer mentors celebrating the launch of the Calabar academic empowerment outreach.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  },
  "gallery_calabar_20260205_111722": {
    title: "Youth Reading Circles in Calabar",
    description: "Local primary school pupils receiving personalized writing materials and textbooks, engaging in our structured read-aloud literacy circles.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  },
  "gallery_calabar_20260205_111724": {
    title: "Spelling Bee & Character Seminar",
    description: "Enthusiastic primary school children participating in a values-driven interactive storytelling and moral spelling competition.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  },
  "gallery_calabar_20260205_111752": {
    title: "Calabar Academic Mentoring Circle",
    description: "DRYCI volunteer guides sitting with junior students to provide early-childhood mentoring, goal-setting worksheets, and character coaching.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  },
  "gallery_calabar_20260205_112327": {
    title: "Textbook & Uniform Sponsorship Drive",
    description: "Providing complete academic sponsorships, school bags, writing notebooks, and uniforms to vulnerable primary scholars in Calabar district.",
    date: "February 5, 2026",
    location: "Calabar, Nigeria"
  }
};

// Set of verified unique file names (reduced to 20 gallery images)
const UNIQUE_FILENAMES = new Set([
  "gallery_calabar_gallery_49.jpg",
  "gallery_calabar_gallery_50.jpg",
  "gallery_calabar_20260205_115959.jpg",
  "gallery_calabar_20260205_111722.jpg",
  "gallery_calabar_20260205_111724.jpg",
  "gallery_calabar_20260205_111752.jpg",
  "gallery_calabar_20260205_112327.jpg",
  "gallery_calabar_20260205_112724.jpg",
  "gallery_calabar_20260205_112726.jpg",
  "gallery_calabar_20260205_112954.jpg",
  "gallery_calabar_20260205_113039.jpg",
  "gallery_calabar_20260205_113040_1.jpg",
  "gallery_calabar_20260205_113058.jpg",
  "gallery_calabar_20260205_113703.jpg",
  "gallery_calabar_20260205_113722.jpg",
  "gallery_calabar_20260205_113727.jpg",
  "gallery_calabar_20260205_114118.jpg",
  "gallery_calabar_20260205_114311.jpg",
  "gallery_calabar_20260205_114526.jpg",
  "gallery_calabar_20260205_114701.jpg"
]);

const parsedPhotos: PhotoItem[] = [];
let index = 1;

for (const [filePath, module] of Object.entries(globbedImages)) {
  const url = (module as any).default || module;
  if (!url) continue;

  const fileName = filePath.split('/').pop() || '';
  if (!UNIQUE_FILENAMES.has(fileName)) {
    continue; // Remove duplicates and limit count!
  }

  const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const realMeta = REAL_METADATA_MAP[baseName];

  parsedPhotos.push({
    id: `photo_calabar_${index}`,
    url,
    title: realMeta ? realMeta.title : '',
    description: realMeta ? realMeta.description : '',
    category: '',
    album: '',
    date: realMeta ? realMeta.date : '',
    location: realMeta ? realMeta.location : '',
  });

  index++;
}

// Sort parsedPhotos so metadata ones are first, or we keep sortedEntries order
const sortedPhotos = parsedPhotos.sort((a, b) => {
  // Always prioritize gallery_49 and gallery_50
  const isA49 = a.url.includes('gallery_49');
  const isB49 = b.url.includes('gallery_49');
  if (isA49 && !isB49) return -1;
  if (!isA49 && isB49) return 1;

  const isA50 = a.url.includes('gallery_50');
  const isB50 = b.url.includes('gallery_50');
  if (isA50 && !isB50) return -1;
  if (!isA50 && isB50) return 1;

  const isA_Meta = a.title !== '';
  const isB_Meta = b.title !== '';
  if (isA_Meta && !isB_Meta) return -1;
  if (!isA_Meta && isB_Meta) return 1;

  return a.id.localeCompare(b.id);
});

export const initialPhotos: PhotoItem[] = sortedPhotos.slice(0, 20);
export const initialVideos: VideoItem[] = [];
export const initialAlbums: AlbumItem[] = [];

export const presetsForAdmins = sortedPhotos.slice(0, 20).map((p) => ({
  url: p.url,
  label: p.title || 'Outreach Image'
}));
