// Building blocks that match the element types used on the original pages.
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Lightbox, { type Photo } from './Lightbox';

/** Red section heading, e.g. the goals/results headings inside a page. */
export function Subheading({ children }: { children: ReactNode }) {
  return <h3 className="subheading">{children}</h3>;
}

/** Red bold lead-in line used above lists. */
export function Lead({ children }: { children: ReactNode }) {
  return <p className="lead">{children}</p>;
}

/** Text next to an image. side="right" puts the image on the right. */
export function TextImage({
  image,
  alt = '',
  caption,
  side = 'right',
  to,
  children,
}: {
  image: string;
  alt?: string;
  caption?: ReactNode;
  side?: 'left' | 'right';
  to?: string;
  children: ReactNode;
}) {
  const img = <img src={image} alt={alt} loading="lazy" />;
  return (
    <div className={`text-image ${side}`}>
      <figure>
        {to ? <Link to={to}>{img}</Link> : img}
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <div className="text-image-body">{children}</div>
    </div>
  );
}

/** Row of equal-width captioned images, optionally linking somewhere. */
export function ImageRow({
  items,
}: {
  items: { image: string; caption?: ReactNode; alt?: string; to?: string }[];
}) {
  return (
    <ul className="image-row" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
      {items.map((it, i) => {
        const img = <img src={it.image} alt={it.alt ?? ''} loading="lazy" />;
        return (
          <li key={i}>
            {it.to ? <Link to={it.to}>{img}</Link> : img}
            {it.caption && <span className="caption">{it.caption}</span>}
          </li>
        );
      })}
    </ul>
  );
}

/** Strip of square thumbnails that open in a lightbox. */
export function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <ul className="gallery">
        {photos.map((p, i) => (
          <li key={p.src}>
            <button onClick={() => setOpen(i)} aria-label={p.alt || `Bilde ${i + 1}`}>
              <img src={p.src} alt={p.alt ?? ''} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox photos={photos} index={open} onChange={setOpen} />
    </>
  );
}

/** Large full-width image inside the content column. */
export function WideImage({ image, alt = '', caption }: { image: string; alt?: string; caption?: ReactNode }) {
  return (
    <figure className="wide-image">
      <img src={image} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Responsive embedded video (YouTube/Vimeo embed URL). */
export function Video({ src, title }: { src: string; title: string }) {
  return (
    <div className="video">
      <iframe src={src} title={title} allowFullScreen loading="lazy" />
    </div>
  );
}

export function Divider() {
  return <hr className="divider" />;
}
