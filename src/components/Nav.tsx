import { NavLink } from 'react-router-dom';
import type { NavItem } from '../siteMap';

interface NavListProps {
  items: NavItem[];
  depth?: number;
}

export default function NavList({ items, depth = 0 }: NavListProps) {
  return (
    <ul className={depth === 0 ? 'nav' : 'sub'}>
      {items.map((item) => (
        <li key={item.slug} className={item.children ? 'has-sub' : undefined}>
          <NavLink
            to={`/${item.slug}`}
            end
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.title}
            {item.children && depth > 0 && <span className="caret" aria-hidden>›</span>}
          </NavLink>
          {item.children && <NavList items={item.children} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
}
