import Banner from '../components/Banner';
import type { NavItem } from '../siteMap';
import { pages } from '../content';
import { usePageTitle } from '../usePageTitle';

export default function Page({ item }: { item: NavItem }) {
  usePageTitle(item.title);
  const page = pages[item.slug];
  return (
    <>
      {page?.banner !== false && <Banner {...(page?.banner || {})} />}
      <div className="band">
        <article className="column">
          <h2 className={page?.bigTitle ? 'big-title' : undefined}>{page?.heading ?? item.title}</h2>
          {page?.body ?? (
            <p className="placeholder">
              Add the content for "{item.title}" in <code>src/content.tsx</code>.
            </p>
          )}
        </article>
      </div>
    </>
  );
}
