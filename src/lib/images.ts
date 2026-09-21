import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/uploads/*.{webp,jpg,jpeg,png,avif}',
  { eager: true },
);

export function resolveImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = path.startsWith('/') ? path : `/${path}`;
  const hit = all[key];
  if (!hit) throw new Error(`Immagine non trovata: ${path}`);
  return hit.default;
}
