import Tile from '../components/Tile';
import { home } from '../content';
import { usePageTitle } from '../usePageTitle';

export default function Home() {
  usePageTitle('HJEM');
  return (
    <>
      <section className="block">
        <h2>{home.heading}</h2>
        {home.intro}
        <ul className="tiles">
          {home.tiles.map((t) => (
            <Tile key={t.slug} {...t} />
          ))}
        </ul>
      </section>
      <hr />
      <section className="block news">
        <h2>{home.newsHeading}</h2>
        {home.news}
        <a className="fb" href={home.facebookUrl} target="_blank" rel="noopener noreferrer">
          Norway House Cambodia på Facebook
        </a>
      </section>
    </>
  );
}
