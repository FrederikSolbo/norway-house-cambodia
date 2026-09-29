import { useState } from 'react';
import { Link } from 'react-router-dom';

interface TileProps {
  slug: string;
  label: string;
  image: string;
}

export default function Tile({ slug, label, image }: TileProps) {
  const [missing, setMissing] = useState(false);
  return (
    <li>
      <Link to={`/${slug}`}>
        <img
          src={image}
          alt={label}
          className={missing ? 'missing' : undefined}
          onError={() => setMissing(true)}
        />
      </Link>
      <span>{label}</span>
    </li>
  );
}
