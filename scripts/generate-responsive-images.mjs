import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const images = [
  'PBI logo.png',
  'PBI logo - mobile.png',
  'Why North Korean Bible.png',
  'Gods Promises New Testament.png',
  'Behind the Scenes.png',
  'Looking Back.png',
  'Prayer Group Signup.png',
  'Donate.png',
  'English-Korean Biligual Bible - Book of John.jpg',
  'Childrens bible story-small.png',
  'Gods Promises Side.png',
  'PBI founding members.jpg',
  'KASCON.jpg',
  'North_Korean_students.jpg',
  'ProfKimDuringLecture.png',
  'NorthSouthDictionary.jpg',
  'DocumentaryKJI.jpg',
  'current/about-mission.webp',
  'current/autobiography-80-years.webp',
  'current/autobiography-nomad.webp',
  'current/beyond-now.webp',
  'current/book-of-john-reference.webp',
  'current/esl-class.webp',
  'current/gods-promises-side2.webp',
  'current/jin-keol-park.webp',
  'current/jong-woo-lee.webp',
  'current/korean-language-divide.webp',
  'current/old-korean-bible.webp',
  'current/page-texture.webp',
  'current/prayer-newsletter.webp',
  'current/prof-and-mrs-kim.webp',
  'current/prof-kim-couple.webp',
  'current/publications-cherry-blossoms.webp',
  'current/rex-lee.webp',
  'current/support-prayer.webp',
  'current/yoo-jin-kim.webp',
  'current/youversion-bible-icon.webp',
];

const widths = [480, 960, 1440];
const root = process.cwd();
const assetsRoot = path.join(root, 'public', 'assets');
const outputRoot = path.join(assetsRoot, 'optimized');
const manifestPath = path.join(root, 'generated', 'image-manifest.json');
const manifest = {};

function slugFor(image) {
  return image
    .replace(/\.[^.]+$/, '')
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

await mkdir(outputRoot, { recursive: true });
await mkdir(path.dirname(manifestPath), { recursive: true });

for (const image of images) {
  const input = path.join(assetsRoot, image);
  const metadata = await sharp(input).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read dimensions for ${image}`);
  }

  const slug = slugFor(image);
  const variants = widths.filter((width) => width < metadata.width);
  const entry = {
    width: metadata.width,
    height: metadata.height,
    avif: [],
    webp: [],
  };

  for (const width of variants) {
    const avifName = `${slug}-${width}.avif`;
    const webpName = `${slug}-${width}.webp`;

    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 60, effort: 5 })
      .toFile(path.join(outputRoot, avifName));
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(path.join(outputRoot, webpName));

    entry.avif.push({ src: `/assets/optimized/${avifName}`, width });
    entry.webp.push({ src: `/assets/optimized/${webpName}`, width });
  }

  manifest[image] = entry;
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
