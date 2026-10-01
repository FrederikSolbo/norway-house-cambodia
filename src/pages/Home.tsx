import Banner from '../components/Banner';
import { ImageRow, Divider } from '../components/blocks';
import { home } from '../content';
import { usePageTitle } from '../usePageTitle';

export default function Home() {
  usePageTitle('HJEM');
  return (
    <>
      <Banner {...home.banner} />
      <div className="band">
        <article className="column">
          <h2>{home.heading}</h2>
          {home.intro}
          <ImageRow
            items={home.tiles.map((t) => ({ image: t.image, caption: t.label, to: `/${t.slug}`, alt: t.label }))}
          />
          <Divider />
          <h2>{home.newsHeading}</h2>
          {home.news}
          <a className="fb-link" href={home.facebookUrl} target="_blank" rel="noopener noreferrer">
            Norway House Cambodia på Facebook
          </a>
        </article>
      </div>
    </>
  );
}
