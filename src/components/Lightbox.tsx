import { useEffect } from 'react';

export interface Photo {
  src: string;
  alt?: string;
  caption?: string;
}

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onChange: (i: number | null) => void;
}

export default function Lightbox({ photos, index, onChange }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null);
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, photos.length, onChange]);

  if (index === null) return null;
  const photo = photos[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={() => onChange(null)}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt ?? ''} />
        {photo.caption && <figcaption>{photo.caption}</figcaption>}
      </figure>
      {photos.length > 1 && (
        <>
          <button
            className="lb-prev"
            aria-label="Forrige bilde"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + photos.length) % photos.length);
            }}
          >
            ‹
          </button>
          <button
            className="lb-next"
            aria-label="Neste bilde"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % photos.length);
            }}
          >
            ›
          </button>
        </>
      )}
      <button className="lb-close" aria-label="Lukk" onClick={() => onChange(null)}>
        ×
      </button>
    </div>
  );
}
