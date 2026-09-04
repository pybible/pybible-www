import type { ImgHTMLAttributes } from 'react';
import manifestData from '@/generated/image-manifest.json';

type ImageVariant = { src: string; width: number };
type ImageMetadata = {
  width: number;
  height: number;
  avif: ImageVariant[];
  webp: ImageVariant[];
};

const manifest = manifestData as Record<string, ImageMetadata>;

type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'width' | 'height'
> & {
  image: string;
  sizes?: string;
};

function srcSet(variants: ImageVariant[]) {
  return variants.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

export function ResponsiveImage({ image, alt, sizes = '100vw', ...props }: ResponsiveImageProps) {
  const metadata = manifest[image];

  if (!metadata) {
    throw new Error(`Missing responsive image metadata for ${image}`);
  }

  return (
    <picture>
      {metadata.avif.length > 0 && <source type="image/avif" srcSet={srcSet(metadata.avif)} sizes={sizes} />}
      {metadata.webp.length > 0 && <source type="image/webp" srcSet={srcSet(metadata.webp)} sizes={sizes} />}
      <img
        src={`/assets/${image}`}
        alt={alt}
        width={metadata.width}
        height={metadata.height}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
}
