import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavList from './Nav';
import { siteMap } from '../siteMap';
import { logo } from '../content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="logo">
          {logoFailed ? (
            <span>{logo.alt}</span>
          ) : (
            <img src={logo.src} alt={logo.alt} onError={() => setLogoFailed(true)} />
          )}
        </Link>
        <button
          className="menu-toggle"
          aria-label="Meny"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          &#9776;
        </button>
        <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
          <NavList items={siteMap} />
        </nav>
      </div>
    </header>
  );
}
