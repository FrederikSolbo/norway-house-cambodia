import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { BannerProps } from './components/Banner';
import { Subheading, Lead, TextImage, ImageRow, Gallery, WideImage, Divider } from './components/blocks';

// Paste the site's own text and images here.
// Images go in public/images/ and are referenced as "/images/name.jpg".

export const logo = {
  src: '/images/logo.png',
  alt: 'Norway House',
};

export const home = {
  banner: { image: '' } as BannerProps,
  heading: 'Hva er Norway House',
  intro: (
    <p>
      [Intro paragraph. Link to the work page like <Link to="/vart-arbeid">this</Link>.]
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
      [Latest news, e.g. a link to <Link to="/utfasing-til-juni-2019">the phase-out page</Link>.]
    </p>
  ),
  facebookUrl: 'https://www.facebook.com/NorwayHouseCambodia/',
};

export interface PageContent {
  /** Banner above the page. Omit for a grey block, or false to hide it. */
  banner?: BannerProps | false;
  /** Overrides the menu title as the page heading. */
  heading?: string;
  /** Large light heading, as on the personal story pages. */
  bigTitle?: boolean;
  body: ReactNode;
}

// Keyed by slug from siteMap.ts. Any slug left out shows a placeholder.
export const pages: Partial<Record<string, PageContent>> = {
  // Example showing every building block. Replace the bracketed text and images.
  barnehjem: {
    banner: false,
    heading: 'Barnehjemmet',
    body: (
      <>
        <WideImage image="/images/barnehjem-banner.jpg" />
        <Gallery
          photos={[
            { src: '/images/barnehjem-1.jpg' },
            { src: '/images/barnehjem-2.jpg' },
            { src: '/images/barnehjem-3.jpg' },
          ]}
        />
        <p>[Paragraph]</p>
        <Subheading>[Red section heading]</Subheading>
        <p>[Paragraph]</p>
        <Lead>[Red bold lead-in]</Lead>
        <ul>
          <li>[List item]</li>
          <li>[List item]</li>
        </ul>
        <TextImage image="/images/example.jpg" caption="[Caption]" side="right">
          <p>[Text beside an image]</p>
        </TextImage>
        <Divider />
        <ImageRow
          items={[
            { image: '/images/row-1.jpg', caption: '[Caption]' },
            { image: '/images/row-2.jpg', caption: '[Caption]' },
            { image: '/images/row-3.jpg', caption: '[Caption]' },
          ]}
        />
      </>
    ),
  },
  'thearys-story-en': {
    heading: 'Theary`s story',
    bigTitle: true,
    body: (
      <TextImage image="/images/theary.jpg" side="right">
        <p>[Story text]</p>
      </TextImage>
    ),
  },
};
