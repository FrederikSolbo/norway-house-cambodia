import type { NavItem } from '../siteMap';
import { pages } from '../content';
import { usePageTitle } from '../usePageTitle';

export default function Page({ item }: { item: NavItem }) {
  usePageTitle(item.title);
  const body = pages[item.slug];
  return (
    <section className="block">
      <h2>{item.title}</h2>
      {body ?? (
        <p className="placeholder">
          Add the content for "{item.title}" in <code>src/content.tsx</code>.
        </p>
      )}
    </section>
  );
}
