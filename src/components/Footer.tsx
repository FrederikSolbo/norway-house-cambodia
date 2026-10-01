import { Link } from 'react-router-dom';
import { siteMap } from '../siteMap';

export default function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Bunnmeny">
        <ul>
          {siteMap.map((item) => (
            <li key={item.slug}>
              <Link to={`/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="footer-note">© Norway House Cambodia</p>
    </footer>
  );
}
