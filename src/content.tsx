import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Paste the site's own text here as JSX.
// Use <Link to="/slug"> for internal links and "/images/..." for images in public/.

export const logo = {
  src: '/images/logo.png',
  alt: 'Norway House Cambodia',
};

export const home = {
  heading: 'Hva er Norway House',
  intro: (
    <p>
      [Paste the intro paragraph from the home page here. Link to the work page with{' '}
      <Link to="/vart-arbeid">this</Link>.]
    </p>
  ),
  tiles: [
    { slug: 'barnehjem', label: 'Barnehjem', image: '/images/barnehjem.jpg' },
    { slug: 'skoleprosjekt', label: 'Skoleprosjekt', image: '/images/skoleprosjekt.jpg' },
    { slug: 'studentprogram', label: 'Student program', image: '/images/studentprogram.jpg' },
  ],
  newsHeading: 'Siste nytt',
  news: (
    <p>
      [Paste the latest news text here, e.g. a link to{' '}
      <Link to="/utfasing-til-juni-2019">the phase-out page</Link>.]
    </p>
  ),
  facebookUrl: 'https://www.facebook.com/NorwayHouseCambodia/',
};

// Body content for every sub-page, keyed by slug from siteMap.ts.
// Any slug left out shows a placeholder box.
export const pages: Partial<Record<string, ReactNode>> = {
  // barnehjem: (
  //   <>
  //     <p>...</p>
  //     <img src="/images/barnehjem-1.jpg" alt="" />
  //   </>
  // ),
};
