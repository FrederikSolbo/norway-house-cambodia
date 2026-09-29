import { Link } from 'react-router-dom';
import { siteMap, type NavItem } from '../siteMap';

function FooterList({ items }: { items: NavItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.slug}>
          <Link to={`/${item.slug}`}>{item.title}</Link>
          {item.children && <FooterList items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <nav className="footer-nav">
          <FooterList items={siteMap} />
        </nav>
      </div>
    </footer>
  );
}
